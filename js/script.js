// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initNavigation()
  initScrollAnimations()
  initSkillBars()
  initContactForm()
  initScrollToTop()
})

// Navigation functionality
function initNavigation() {
  const navbar = document.getElementById("navbar")
  const mobileMenu = document.getElementById("mobile-menu")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Active link highlighting
  window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Add animation classes and observe elements
  const animatedElements = document.querySelectorAll(
    ".section-title, .about-text, .timeline-item, .project-card, .contact-info, .contact-form",
  )

  animatedElements.forEach((element, index) => {
    // Add different animation classes based on element type and position
    if (element.classList.contains("section-title")) {
      element.classList.add("fade-in")
    } else if (element.classList.contains("timeline-item")) {
      element.classList.add("slide-in-left")
    } else if (element.classList.contains("project-card")) {
      element.classList.add("fade-in")
      // Add delay for staggered animation
      element.style.transitionDelay = `${(index % 3) * 0.2}s`
    } else if (element.classList.contains("contact-info")) {
      element.classList.add("slide-in-left")
    } else if (element.classList.contains("contact-form")) {
      element.classList.add("slide-in-right")
    } else {
      element.classList.add("fade-in")
    }

    observer.observe(element)
  })
}

// Skill bars animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target
          const width = skillBar.getAttribute("data-width")

          setTimeout(() => {
            skillBar.style.width = width + "%"
          }, 500)

          skillObserver.unobserve(skillBar)
        }
      })
    },
    { threshold: 0.5 },
  )

  skillBars.forEach((bar) => {
    skillObserver.observe(bar)
  })
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const name = formData.get("name")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Basic form validation
    if (!validateForm(name, email, subject, message)) {
      return
    }

    // Create mailto link as fallback
    const mailtoLink = `mailto:georgius.sungkharisma@binus.ac.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

    // Show success message
    showNotification("Thank you for your message! Opening your email client...", "success")

    // Open mailto link
    setTimeout(() => {
      window.location.href = mailtoLink
    }, 1000)

    // Reset form
    contactForm.reset()
  })
}

// Form validation
function validateForm(name, email, subject, message) {
  const errors = []

  if (!name || name.trim().length < 2) {
    errors.push("Please enter a valid name (at least 2 characters)")
  }

  if (!email || !isValidEmail(email)) {
    errors.push("Please enter a valid email address")
  }

  if (!subject || subject.trim().length < 3) {
    errors.push("Please enter a subject (at least 3 characters)")
  }

  if (!message || message.trim().length < 10) {
    errors.push("Please enter a message (at least 10 characters)")
  }

  if (errors.length > 0) {
    showNotification(errors.join("\n"), "error")
    return false
  }

  return true
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification")
  if (existingNotification) {
    existingNotification.remove()
  }

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  // Add to document
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    removeNotification(notification)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    removeNotification(notification)
  }, 5000)
}

function removeNotification(notification) {
  notification.style.transform = "translateX(100%)"
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification)
    }
  }, 300)
}

// Scroll to top functionality
function initScrollToTop() {
  // Create scroll to top button
  const scrollToTopBtn = document.createElement("button")
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
  scrollToTopBtn.className = "scroll-to-top"
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        opacity: 0;
        visibility: hidden;
        z-index: 1000;
    `

  document.body.appendChild(scrollToTopBtn)

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollToTopBtn.style.opacity = "1"
      scrollToTopBtn.style.visibility = "visible"
    } else {
      scrollToTopBtn.style.opacity = "0"
      scrollToTopBtn.style.visibility = "hidden"
    }
  })

  // Scroll to top functionality
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Hover effect
  scrollToTopBtn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)"
    this.style.boxShadow = "0 8px 25px rgba(37, 99, 235, 0.4)"
  })

  scrollToTopBtn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
    this.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.3)"
  })
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Smooth scroll polyfill for older browsers
function smoothScrollPolyfill() {
  if (!("scrollBehavior" in document.documentElement.style)) {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js"
    document.head.appendChild(script)
  }
}

// Initialize polyfill
smoothScrollPolyfill()

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")

  // Add CSS for loading state
  const loadingStyles = document.createElement("style")
  loadingStyles.textContent = `
        body:not(.loaded) {
            overflow: hidden;
        }
        
        body:not(.loaded)::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        body:not(.loaded)::after {
            content: '';
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 10001;
        }
        
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .loaded::before,
        .loaded::after {
            display: none !important;
        }
    `
  document.head.appendChild(loadingStyles)
})

// Performance optimization: Lazy load images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading if there are lazy images
if (document.querySelectorAll("img[data-src]").length > 0) {
  initLazyLoading()
}

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  // ESC key closes mobile menu
  if (e.key === "Escape") {
    const mobileMenu = document.getElementById("mobile-menu")
    const navMenu = document.getElementById("nav-menu")

    if (navMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active")
      navMenu.classList.remove("active")
    }
  }
})

// Console welcome message
console.log(`
🚀 Welcome to Georgius Benedict's Portfolio!
📧 Contact: georgius.sungkharisma@binus.ac.id
💼 LinkedIn: https://www.linkedin.com/in/georgius-benedict-038917235/
🔗 GitHub: https://github.com/Shubaa29

Built with ❤️ using HTML, CSS, and JavaScript
`)
