
'use client'
import { useState } from 'react'

// CSS animations as a style tag
const animations = `
  <style>
    @keyframes slideInFromLeft {
      0% { transform: translateX(-100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideInFromRight {
      0% { transform: translateX(100%); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeInUp {
      0% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-slideInFromLeft { animation: slideInFromLeft 0.8s ease-out forwards; }
    .animate-slideInFromRight { animation: slideInFromRight 0.8s ease-out 0.3s forwards; opacity: 0; }
    .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
    .animate-pulse { animation: pulse 2s ease-in-out infinite; }
    .animate-bounce { animation: bounce 2s ease-in-out infinite; }
    .bg-grid-pattern {
      background-image: 
        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
      background-size: 20px 20px;
    }
  </style>
`

export default function Portfolio() {
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: animations }} />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 rounded-2xl flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg mx-2">
                      Projects
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg mx-2">
                      Skills
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg mx-2">
                      Experience
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">About</a>
            <a href="#" className="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Services</a>
            <a href="#" className="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Blog</a>
            <a href="#" className="font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">Contact</a>
          </nav>
          <div className="flex items-center">
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 rounded-xl shadow-md hover:shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight overflow-hidden">
            <div className="animate-slideInFromLeft">Welcome to my portfolio</div>
            <br />
            <div className="animate-slideInFromRight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Nguyen Thuan Hai
              </span>
            </div>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{animationDelay: '1s'}}>
            Passionate Full Stack Developer specializing in modern web technologies, creating beautiful and functional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 animate-fadeInUp" style={{animationDelay: '1.5s'}}>
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-lg">
              View My Work
            </button>
            <button className="flex items-center gap-2 px-6 py-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>
          </div>
          <p className="text-sm text-gray-500 animate-fadeInUp" style={{animationDelay: '2s'}}>Let&apos;s build something amazing together.</p>
        </div>
      </div>

      {/* Gradient Transition */}
      <div className="py-8 bg-gradient-to-b from-white to-gray-100"></div>

      {/* Dashboard Preview */}
      <div className="mx-auto px-46 pb-10 bg-gray-100">
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 max-w-xs">
                  myportfolio.com/dashboard
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
              </div>
            </div>
            <div className="flex h-96">
              <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  <span className="font-semibold text-gray-900">Portfolio</span>
                </div>
                <nav className="space-y-1">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Projects</div>
                  <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    Web Development
                  </a>
                  <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    Mobile Apps
                  </a>
                  <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    Design
                  </a>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-4 mb-2">Skills</div>
                  <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">Frontend</a>
                  <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">Backend</a>
                  <a href="#" className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">DevOps</a>
                </nav>
              </div>
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Build your portfolio, showcase projects</h2>
                  <div className="flex items-center gap-2">
                    <button className="text-sm text-gray-500 hover:text-gray-700">Search</button>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 hover:bg-green-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
                        </svg>
                      </div>
                      <span className="text-green-800 font-medium">New project</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 hover:bg-blue-100 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                        </svg>
                      </div>
                      <span className="text-blue-800 font-medium">New skill</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Your projects</h3>
                    <button className="text-sm text-gray-500 hover:text-gray-700">View all</button>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">E-commerce Platform</h4>
                            <p className="text-sm text-gray-500">Full-stack web application</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-xs px-2 py-1 bg-gray-100 rounded">Editor</button>
                          <button className="text-xs px-2 py-1 bg-gray-100 rounded">Preview</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                            <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Mobile Banking App</h4>
                            <p className="text-sm text-gray-500">React Native application</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-xs px-2 py-1 bg-gray-100 rounded">Editor</button>
                          <button className="text-xs px-2 py-1 bg-gray-100 rounded">Preview</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Map */}
      <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <div className="relative">
          <div className="h-96 bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-green-900 opacity-80">
              <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Quảng Ngãi, Vietnam</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
                <button className="p-2 hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                  </svg>
                </button>
                <div className="border-t border-gray-200"></div>
                <button className="p-2 hover:bg-gray-100 transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"/>
                  </svg>
                </button>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                <div className="relative">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 shadow-lg whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-800">Nguyen Thuan Hai</span>
                  </div>
                </div>
              </div>
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <path d="M0,100 Q200,80 400,120 T800,100" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M100,0 Q120,200 100,400" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M200,200 L600,250 L650,300" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Work Together</h3>
                    <p className="text-gray-300">Based in Quảng Ngãi, Vietnam. Available for freelance and full-time opportunities worldwide.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="text-white font-medium">contact@thuanhai.dev</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </div>
                      <p className="text-sm text-gray-300">Phone</p>
                      <p className="text-white font-medium">+84 xxx xxx xxx</p>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end gap-4">
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nguyen Thuan Hai</span>
                </h3>
                <p className="text-gray-400 mb-4">Full Stack Developer passionate about creating exceptional digital experiences.</p>
                <p className="text-sm text-gray-500">🇻🇳 Based in Quảng Ngãi, Vietnam</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">React & Next.js</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Node.js & Python</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AWS & Docker</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">MongoDB & PostgreSQL</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Me</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">My Projects</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 Nguyen Thuan Hai. All rights reserved.</p>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Additional Sections */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about my latest projects, blog posts, and tech insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-medium rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">3+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">What People Say</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">A</div>
                  <div className="ml-3">
                    <div className="font-semibold text-white">Alex Johnson</div>
                    <div className="text-sm text-gray-400">CEO, TechStart</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">&quotThuan Hai delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise is outstanding.&quot</p>
                <div className="flex text-yellow-400 mt-3"><span>★★★★★</span></div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
                  <div className="ml-3">
                    <div className="font-semibold text-white">Maria Garcia</div>
                    <div className="text-sm text-gray-400">Founder, DigitalFlow</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">&quotWorking with Thuan Hai was a pleasure. He transformed our ideas into a beautiful, functional application with clean code and great performance.&quot</p>
                <div className="flex text-yellow-400 mt-3"><span>★★★★★</span></div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold text-lg">D</div>
                  <div className="ml-3">
                    <div className="font-semibold text-white">David Chen</div>
                    <div className="text-sm text-gray-400">CTO, InnovateLab</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">&quotImpressive technical skills and professional communication. Thuan Hai consistently delivers high-quality solutions on time and within budget.&quot</p>
                <div className="flex text-yellow-400 mt-3"><span>★★★★★</span></div>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-white">Latest Blog Posts</h3>
              <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">View All →</a>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <article className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow-400 mb-2">December 15, 2024</div>
                  <h4 className="text-xl font-semibold text-white mb-3">Building Modern React Applications</h4>
                  <p className="text-gray-400 text-sm mb-4">Explore the latest React patterns and best practices for building scalable applications in 2025.</p>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">Read More →</a>
                </div>
              </article>
              <article className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="h-48 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow-400 mb-2">December 10, 2024</div>
                  <h4 className="text-xl font-semibold text-white mb-3">Node.js Performance Optimization</h4>
                  <p className="text-gray-400 text-sm mb-4">Learn advanced techniques to optimize your Node.js applications for better performance and scalability.</p>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">Read More →</a>
                </div>
              </article>
              <article className="bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <span className="text-white font-semibold">Blog Image</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-yellow-400 mb-2">December 5, 2024</div>
                  <h4 className="text-xl font-semibold text-white mb-3">AWS Deployment Strategies</h4>
                  <p className="text-gray-400 text-sm mb-4">Complete guide to deploying full-stack applications on AWS with CI/CD pipelines and monitoring.</p>
                  <a href="#" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">Read More →</a>
                </div>
              </article>
            </div>
          </div>
          <div className="text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-12 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let&apos;s discuss your ideas and turn them into reality. I&apos;m always excited to work on new challenges and create innovative solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 transform hover:scale-105">
                Start a Project
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white rounded-xl hover:bg-gray-800 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Experience Section */}
      <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Skills & Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating exceptional digital experiences with modern technologies and best practices.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-6">Creating beautiful, responsive user interfaces with modern frameworks and tools.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Tailwind</span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-6">Building robust, scalable server-side applications and APIs with best practices.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">MongoDB</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">PostgreSQL</span>
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DevOps & Cloud</h3>
              <p className="text-gray-600 mb-6">Deploying and managing applications with modern DevOps practices and cloud services.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Docker</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">AWS</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Vercel</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing some of my recent work and creative solutions to real-world problems.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Project Preview</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-6">A full-stack e-commerce solution with modern payment integration, inventory management, and admin dashboard.</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">Live Demo</button>
                <button className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">Source Code</button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Project Preview</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Task Management App</h3>
              <p className="text-gray-300 mb-6">A collaborative project management tool with real-time updates, team collaboration, and progress tracking.</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">Live Demo</button>
                <button className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors">Source Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
