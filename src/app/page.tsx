'use client';

import { useState, useEffect } from 'react';
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen gradient-bg tech-scrollbar">
      {/* Enhanced Technological Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-primary/20 shadow-2xl">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]"></div>
        
        {/* Animated data streams */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-stream"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent animate-data-stream" style={{animationDelay: '1.5s'}}></div>
        
        {/* Tech status indicators */}
        <div className="absolute top-2 right-4 flex items-center space-x-2 text-xs text-primary/60 font-mono">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-tech-pulse"></div>
            <span>ONLINE</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-secondary rounded-full animate-tech-pulse" style={{animationDelay: '1s'}}></div>
            <span>AI-READY</span>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section with Cyberpunk Elements */}
            <div className="flex items-center group">
              <div className="relative">
                <img 
                  src="/assets/logobgr.png" 
                  alt="PowerProject Logo" 
                  className="h-10 w-auto mr-4 logo-img group-hover:scale-110 transition-all duration-300 relative z-10"
                />
                {/* Cyberpunk hexagon frame */}
                <div className="absolute -inset-3 w-16 h-16">
                  <div className="absolute inset-0 border-2 border-cyan-400/40 group-hover:border-cyan-400/80 transition-all duration-500 transform rotate-45"></div>
                  <div className="absolute inset-1 border border-pink-400/30 group-hover:border-pink-400/60 transition-all duration-700 transform rotate-45"></div>
                </div>
                {/* Cyberpunk corner brackets */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60 group-hover:border-cyan-400 transition-all duration-300"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60 group-hover:border-cyan-400 transition-all duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-pink-400/60 group-hover:border-pink-400 transition-all duration-300"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-pink-400/60 group-hover:border-pink-400 transition-all duration-300"></div>
                {/* Scanning lines */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-line"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-scan-line" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-2xl font-bold cyberpunk-text group-hover:scale-105 transition-transform duration-300 relative">
                  PowerProject
                </div>
                <div className="text-xs text-cyan-400/80 font-mono tracking-wider flex items-center space-x-2">
                  <span className="cyberpunk-glow">[AI-POWERED_SOLUTIONS]</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-cyber-pulse"></div>
                    <div className="w-1 h-1 bg-pink-400 rounded-full animate-cyber-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-cyber-pulse" style={{animationDelay: '0.6s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {[
                { name: 'SERVICES', id: 'services', icon: '⚡', code: 'SVC' },
                { name: 'ABOUT', id: 'about', icon: '🔧', code: 'ABT' },
                { name: 'PROJECTS', id: 'projects', icon: '🚀', code: 'PRJ' },
                { name: 'CONTACT', id: 'contact', icon: '📡', code: 'CNT' }
              ].map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative px-4 py-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/30 cyberpunk-nav-item"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-300 text-cyan-400">
                      {item.icon}
                    </span>
                    <span className="font-mono text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-pink-400/60 font-mono">[{item.code}]</span>
                  </span>
                  {/* Cyberpunk hover effect */}
                  <div className="absolute inset-0 border border-cyan-400/20 group-hover:border-cyan-400/60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>

            {/* CTA Button with Cyberpunk Effects */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('contact')} 
                className="group relative cyberpunk-button overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2 font-mono">
                  <span>[INITIATE]</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                {/* Cyberpunk animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-[length:200%_100%] group-hover:animate-gradient-x"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group cyberpunk-menu-btn"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-cyan-400/20 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="px-4 py-6 space-y-4">
              {[
                { name: 'SERVICES', id: 'services', icon: '⚡', desc: 'Our Solutions', code: 'SVC' },
                { name: 'ABOUT', id: 'about', icon: '🔧', desc: 'Who We Are', code: 'ABT' },
                { name: 'PROJECTS', id: 'projects', icon: '🚀', desc: 'Our Work', code: 'PRJ' },
                { name: 'CONTACT', id: 'contact', icon: '📡', desc: 'Get In Touch', code: 'CNT' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-4 p-3 text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/30 transition-all duration-300 group cyberpunk-mobile-item"
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300 text-cyan-400">
                    {item.icon}
                  </span>
                  <div className="flex-1 text-left">
                    <div className="font-mono font-medium">{item.name}</div>
                    <div className="text-sm text-pink-400/60 font-mono">[{item.code}] {item.desc}</div>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-cyan-400">→</span>
                </button>
              ))}
              <button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full cyberpunk-button mt-4"
              >
                [INITIATE]
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 pb-12 relative overflow-hidden min-h-[80vh]">
        <Boxes className="absolute inset-0 opacity-40 z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-20">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <img 
                  src="/assets/powerproject.png" 
                  alt="PowerProject" 
                  className="h-24 md:h-36 lg:h-40 w-auto mx-auto mb-4 logo-img hero-logo"
                />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono">
                <span className="cyberpunk-text animate-neon-flicker">[AI-POWERED]</span>
                <br />
                <span className="text-white cyberpunk-glow">SOFTWARE_DEVELOPMENT</span>
              </h1>
              <p className="text-lg md:text-xl text-cyan-400/80 mb-6 max-w-2xl mx-auto font-mono">
                [SYSTEM_INIT] Transform your ideas into cutting-edge software solutions with our expert team. 
                [EXECUTE] Get your MVP developed in just 6 weeks with the latest technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="cyberpunk-button w-full sm:w-auto"
                >
                  [INITIATE_PROJECT]
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-mono font-semibold hover:bg-cyan-400/10 hover:text-cyan-300 hover:border-cyan-300 transition-all duration-300 w-full sm:w-auto cyberpunk-glow"
                >
                  [VIEW_PORTFOLIO]
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cyberpunk Floating Elements */}
        <div className="absolute top-1/4 left-10 float-animation">
          <div className="w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-cyber-pulse"></div>
          <div className="absolute inset-0 w-20 h-20 border border-cyan-400/30 rounded-full animate-spin-slow"></div>
        </div>
        <div className="absolute top-1/3 right-20 float-animation" style={{animationDelay: '2s'}}>
          <div className="w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-cyber-pulse"></div>
          <div className="absolute inset-0 w-32 h-32 border border-pink-400/30 rounded-full animate-spin-reverse"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/2 float-animation" style={{animationDelay: '4s'}}>
          <div className="w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-cyber-pulse"></div>
          <div className="absolute inset-0 w-16 h-16 border border-purple-400/30 rounded-full animate-spin-slow"></div>
        </div>
      </section>

      {/* Cyberpunk Stats Section */}
      <section className="py-20 bg-black/50 relative overflow-hidden">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyberpunk-card text-center">
              <div className="text-4xl font-bold cyberpunk-text mb-2 font-mono">[300+]</div>
              <div className="text-cyan-400 font-mono">SUCCESSFUL_PROJECTS</div>
              <div className="text-sm text-pink-400/60 mt-2 font-mono">[STATUS: DELIVERED] Exceptional results for our clients</div>
            </div>
            <div className="cyberpunk-card text-center">
              <div className="text-4xl font-bold cyberpunk-text mb-2 font-mono">[8+]</div>
              <div className="text-cyan-400 font-mono">YEARS_ACTIVE</div>
              <div className="text-sm text-pink-400/60 mt-2 font-mono">[STATUS: PROVEN] Track record of excellence</div>
            </div>
            <div className="cyberpunk-card text-center">
              <div className="text-4xl font-bold cyberpunk-text mb-2 font-mono">[100+]</div>
              <div className="text-cyan-400 font-mono">EXPERT_DEVELOPERS</div>
              <div className="text-sm text-pink-400/60 mt-2 font-mono">[STATUS: ONLINE] Top-tier talent across all technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        {/* Cyberpunk background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,0,128,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <img 
                src="/assets/logobgr.png" 
                alt="PowerProject Logo" 
                className="h-16 w-auto mx-auto mb-4 logo-img"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="cyberpunk-text">[OUR_SERVICES]</span>
            </h2>
            <p className="text-xl text-cyan-400/80 max-w-3xl mx-auto font-mono">
              [SYSTEM_READY] Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyberpunk-card">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-6 relative">
                <div className="w-8 h-8 bg-cyan-400 rounded animate-cyber-pulse"></div>
                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-spin-slow"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">[CUSTOM_DEV]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-mono cyberpunk-glow"
              >
                [LEARN_MORE] →
              </button>
            </div>

            <div className="cyberpunk-card">
              <div className="w-16 h-16 bg-pink-400/20 rounded-lg flex items-center justify-center mb-6 relative">
                <div className="w-8 h-8 bg-pink-400 rounded animate-cyber-pulse"></div>
                <div className="absolute inset-0 border border-pink-400/30 rounded-lg animate-spin-reverse"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-pink-400">[MOBILE_APPS]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-pink-400 hover:text-pink-300 transition-colors cursor-pointer font-mono cyberpunk-glow"
              >
                [LEARN_MORE] →
              </button>
            </div>

            <div className="cyberpunk-card">
              <div className="w-16 h-16 bg-purple-400/20 rounded-lg flex items-center justify-center mb-6 relative">
                <div className="w-8 h-8 bg-purple-400 rounded animate-cyber-pulse"></div>
                <div className="absolute inset-0 border border-purple-400/30 rounded-lg animate-spin-slow"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-purple-400">[AI_SOLUTIONS]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] Intelligent automation and AI-powered solutions to streamline your business processes and boost efficiency.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer font-mono cyberpunk-glow"
              >
                [LEARN_MORE] →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Cyberpunk matrix-style background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <img 
                src="/assets/powerproject.png" 
                alt="PowerProject" 
                className="h-20 w-auto mx-auto mb-4 logo-img"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="cyberpunk-text">[ABOUT_POWERPROJECT]</span>
            </h2>
            <p className="text-xl text-cyan-400/80 max-w-3xl mx-auto font-mono">
              [STATUS: ACTIVE] We are a leading software development company with over 8 years of experience in delivering cutting-edge solutions to businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">[OUR_MISSION]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] To transform innovative ideas into powerful software solutions that drive business growth and success in the digital age.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="cyberpunk-button"
              >
                [WORK_WITH_US]
              </button>
            </div>
            <div className="cyberpunk-card">
              <div className="text-center">
                <div className="text-6xl font-bold cyberpunk-text mb-4 font-mono">[8+]</div>
                <div className="text-xl text-cyan-400 mb-2 font-mono">YEARS_EXPERIENCE</div>
                <div className="text-pink-400/60 font-mono">[STATUS: DELIVERING] Excellence in software development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Projects Section */}
      <section id="projects" className="py-20 bg-black/50 relative overflow-hidden">
        {/* Cyberpunk grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="cyberpunk-text">[OUR_PROJECTS]</span>
            </h2>
            <p className="text-xl text-cyan-400/80 font-mono">
              [STATUS: SHOWCASING] Our expertise through successful project deliveries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyberpunk-card">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(0,255,255,0.1)_50%,transparent_70%)]"></div>
                <div className="absolute top-2 left-2 text-cyan-400 font-mono text-xs">[E-COMMERCE]</div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-cyan-400">[E-COMMERCE_PLATFORM]</h3>
              <p className="text-gray-300 text-sm mb-4 font-mono">[EXECUTE] Full-stack e-commerce solution with advanced features</p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer text-sm font-mono cyberpunk-glow"
              >
                [VIEW_DETAILS] →
              </button>
            </div>
            <div className="cyberpunk-card">
              <div className="w-full h-48 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,0,128,0.1)_50%,transparent_70%)]"></div>
                <div className="absolute top-2 left-2 text-pink-400 font-mono text-xs">[BANKING]</div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-pink-400">[MOBILE_BANKING_APP]</h3>
              <p className="text-gray-300 text-sm mb-4 font-mono">[EXECUTE] Secure mobile banking application with real-time features</p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-pink-400 hover:text-pink-300 transition-colors cursor-pointer text-sm font-mono cyberpunk-glow"
              >
                [VIEW_DETAILS] →
              </button>
            </div>
            <div className="cyberpunk-card">
              <div className="w-full h-48 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(128,0,255,0.1)_50%,transparent_70%)]"></div>
                <div className="absolute top-2 left-2 text-purple-400 font-mono text-xs">[AI_ANALYTICS]</div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-purple-400">[AI_ANALYTICS_DASHBOARD]</h3>
              <p className="text-gray-300 text-sm mb-4 font-mono">[EXECUTE] Intelligent analytics platform with machine learning</p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer text-sm font-mono cyberpunk-glow"
              >
                [VIEW_DETAILS] →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Tech Stack Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Cyberpunk circuit board background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,255,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,0,128,0.03),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="cyberpunk-text">[TECH_STACK]</span>
            </h2>
            <p className="text-xl text-cyan-400/80 font-mono">
              [STATUS: CUTTING_EDGE] Technologies for modern software development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', logo: '⚛️', color: 'text-blue-400' },
              { name: 'Next.js', logo: '▲', color: 'text-white' },
              { name: 'Node.js', logo: '🟢', color: 'text-green-400' },
              { name: 'Python', logo: '🐍', color: 'text-yellow-400' },
              { name: 'TypeScript', logo: '🔷', color: 'text-blue-500' },
              { name: 'AWS', logo: '☁️', color: 'text-orange-400' },
              { name: 'Docker', logo: '🐳', color: 'text-blue-300' },
              { name: 'Kubernetes', logo: '⚓', color: 'text-blue-600' },
              { name: 'MongoDB', logo: '🍃', color: 'text-green-500' },
              { name: 'PostgreSQL', logo: '🐘', color: 'text-blue-700' },
              { name: 'GraphQL', logo: '🔺', color: 'text-pink-400' },
              { name: 'Redis', logo: '🔴', color: 'text-red-500' }
            ].map((tech) => (
              <div key={tech.name} className="cyberpunk-card text-center p-4 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.logo}
                </div>
                <div className={`text-sm font-semibold font-mono ${tech.color} group-hover:text-cyan-400 transition-colors duration-300`}>
                  {tech.name}
                </div>
                <div className="mt-2 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberpunk Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Cyberpunk terminal background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="cyberpunk-text">[READY_TO_START?]</span>
            </h2>
            <p className="text-xl text-cyan-400/80 font-mono mb-8">
              [INITIATE] Let's discuss your project and bring your vision to life
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="cyberpunk-card p-4 min-w-[280px]">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="text-xs text-pink-400/60 font-mono">[EMAIL]</div>
                    <a href="mailto:assist.powerproject@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono cyberpunk-glow">
                      assist.powerproject@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="cyberpunk-card p-4 min-w-[280px]">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="text-xs text-pink-400/60 font-mono">[PHONE]</div>
                    <a href="tel:+923030009437" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono cyberpunk-glow">
                      +923-030-009-437
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cyberpunk-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-cyan-400 mb-2 font-mono">[NAME]</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white font-mono cyberpunk-glow"
                    placeholder="[ENTER_NAME]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-cyan-400 mb-2 font-mono">[EMAIL]</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white font-mono cyberpunk-glow"
                    placeholder="[ENTER_EMAIL]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-400 mb-2 font-mono">[PROJECT_DESCRIPTION]</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-400/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors text-white font-mono cyberpunk-glow"
                  placeholder="[DESCRIBE_PROJECT]"
                ></textarea>
              </div>
              <button type="submit" className="w-full cyberpunk-button">
                [SEND_MESSAGE]
              </button>
            </form>
          </div>
      </div>
    </section>

      {/* Cyberpunk Footer */}
      <footer className="bg-black border-t border-cyan-400/20 py-12 relative overflow-hidden">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/assets/logo.jpeg" 
                alt="PowerProject Logo" 
                className="h-12 w-auto mr-3 logo-img"
              />
              <div className="text-2xl font-bold cyberpunk-text font-mono">PowerProject</div>
            </div>
            <p className="text-cyan-400/80 mb-6 font-mono">
              [MISSION] Transforming ideas into digital reality with cutting-edge technology
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-cyan-400/60 hover:text-cyan-400 transition-colors font-mono cyberpunk-glow">[LINKEDIN]</a>
              <a href="https://github.com/powerproject-ltd/powerproject-ltd" target="_blank" rel="noopener noreferrer" className="text-cyan-400/60 hover:text-cyan-400 transition-colors font-mono cyberpunk-glow">[GITHUB]</a>
              <a href="#" className="text-cyan-400/60 hover:text-cyan-400 transition-colors font-mono cyberpunk-glow">[TWITTER]</a>
            </div>
            <div className="mt-8 pt-8 border-t border-cyan-400/20 text-cyan-400/60 text-sm font-mono">
              © 2024 PowerProject. [STATUS: ALL_RIGHTS_RESERVED]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}