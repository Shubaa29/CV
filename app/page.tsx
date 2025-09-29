"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, Download, ChevronDown } from "lucide-react"

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-lg">Georgius Benedict Sungkharisma</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center text-white">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-24 h-24 rounded-full bg-white/20"></div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Georgius Benedict Sungkharisma</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">Data Science Student</p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/georgius-benedict-038917235/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Shubaa29"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:georgius.sungkharisma@binus.ac.id"
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="tel:+6281210019212"
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3"
            >
              Get In Touch
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            <p className="mb-6">
              I'm a passionate Data Science student at Binus University Kemanggisan, Jakarta, currently pursuing my
              undergraduate degree with a focus on machine learning, statistical analysis, and data visualization.
            </p>
            <p>
              With strong programming skills in Python and R, I enjoy exploring complex datasets and building predictive
              models that can drive meaningful insights and business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Undergraduate Data Science</h3>
            <p className="text-blue-600 font-semibold mb-2">Binus University Kemanggisan Jakarta, Indonesia</p>
            <p className="text-gray-600 mb-4">2023 - 2027</p>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
              <p className="text-gray-700">Statistics, Machine Learning, Data Mining, Database Systems</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Programming Languages:</h4>
              <p className="text-gray-700">Python, R</p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Tools & Technologies:</h4>
              <p className="text-gray-700">Jupyter, RStudio, Tableau, Power BI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Programming</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Python</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">R</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Science Skills */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Data Science</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Machine Learning</span>
                    <span className="text-gray-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Data Visualization</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Statistical Analysis</span>
                    <span className="text-gray-600">88%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Tools</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Jupyter Notebook</span>
                    <span className="text-gray-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Tableau</span>
                    <span className="text-gray-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Git</span>
                    <span className="text-gray-600">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Obesity Category Prediction Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <div className="text-sm font-medium">Streamlit Dashboard</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Obesity Category Prediction with Streamlit</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Interactive dashboard built with Python and Streamlit for predicting obesity categories based on user
                  input and health-related features.
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                    Streamlit
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">
                    Pandas
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-sm py-2">Demo</Button>
                </div>
              </div>
            </div>

            {/* Disaster Image Classification Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-sm font-medium">Image Classification</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Disaster Image Classification</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Machine learning model to classify disaster-related images into relevant categories using deep
                  learning and computer vision techniques.
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">Python</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium">
                    Scikit-learn
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                    XGBoost
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-sm py-2">Demo</Button>
                </div>
              </div>
            </div>

            {/* COVID-19 Data Analysis Project */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">📈</div>
                  <div className="text-sm font-medium">Data Analysis</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">COVID-19 Data Analysis</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Comprehensive analysis of COVID-19 data trends using R and statistical modeling techniques.
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">R</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium">
                    ggplot2
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-medium">
                    Shiny
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white text-sm py-2">Demo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get In Touch</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing data science opportunities, collaborations, or just connecting with
            fellow data enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3"
            >
              <a href="mailto:georgius.sungkharisma@binus.ac.id">
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm px-8 py-3"
            >
              <a href="tel:+6281210019212">
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Georgius Benedict Sungkharisma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
