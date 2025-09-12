'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getImageKitUrl, IMAGE_PATHS } from '@/lib/imagekit';
import TeamMemberCard from '@/components/TeamMemberCard';

// Lazy load the Hyperspeed component for better performance
const Hyperspeed = dynamic(() => import("@/components/HyperspeedComplete"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll detection for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'team', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  }, [formData]);

  return (
    <div className="min-h-screen gradient-bg tech-scrollbar">
      {/* Professional Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10" role="navigation" aria-label="Main navigation">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-800/30 to-slate-900/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-20">
            {/* Professional Logo Section */}
            <div className="flex items-center group">
              <div className="relative w-12 h-12">
                {/* Outer logo spinning anticlockwise with glow */}
                <div className="absolute inset-0 animate-spin-anticlockwise">
                  <div className="relative w-full h-full">
                    {/* Glow layers behind the logo */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400/10 via-blue-500/15 to-purple-500/10 rounded-lg blur-sm"></div>
                    <div className="absolute inset-1 w-full h-full bg-gradient-to-r from-cyan-300/8 via-blue-400/12 to-purple-400/8 rounded-lg blur-sm"></div>
                    <Image 
                      src={getImageKitUrl(IMAGE_PATHS.outerLogo, 'w-48,h-48,f-auto,q-100')}
                      alt="PowerProject Outer Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain relative z-10 rounded-lg"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
                {/* Inner logo spinning clockwise with glow */}
                <div className="absolute inset-1.5 animate-spin-clockwise">
                  <div className="relative w-full h-full">
                    {/* Inner glow layers behind the logo */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400/8 via-cyan-400/12 to-blue-400/8 rounded-lg blur-sm"></div>
                    <div className="absolute inset-1 w-full h-full bg-gradient-to-r from-emerald-300/6 via-cyan-300/10 to-blue-300/6 rounded-lg blur-sm"></div>
                    <Image
                      src={getImageKitUrl(IMAGE_PATHS.innerLogo, 'w-36,h-36,f-auto,q-100')}
                      alt="PowerProject Inner Logo"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain relative z-10 rounded-lg"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <div className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  PowerProject
                </div>
                <div className="text-sm text-cyan-400/80 font-medium">
                  AI-Powered Solutions
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {[
                { name: 'HOME', id: 'home', icon: '🏠', code: 'HOM' },
                { name: 'SERVICES', id: 'services', icon: '⚡', code: 'SVC' },
                { name: 'ABOUT', id: 'about', icon: '🔧', code: 'ABT' },
                { name: 'TEAM', id: 'team', icon: '👥', code: 'TAM' },
                { name: 'PROJECTS', id: 'projects', icon: '🚀', code: 'PRJ' },
                { name: 'CONTACT', id: 'contact', icon: '📡', code: 'CNT' }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative px-2 py-2 transition-all duration-300 cyberpunk-nav-item ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-blue-400/10 border-blue-400/50' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5 border-transparent hover:border-blue-400/30'
                  }`}
                >
                  <span className="flex items-center space-x-1">
                    <span className="text-xs group-hover:scale-110 transition-transform duration-300 text-blue-500">
                      {item.icon}
                    </span>
                    <span className="font-mono text-xs font-medium">{item.name}</span>
                    <span className="text-xs text-slate-400/60 font-mono">[{item.code}]</span>
                  </span>
                  {/* Professional hover effect */}
                  <div className="absolute inset-0 border border-blue-500/20 group-hover:border-blue-500/60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
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
                {/* Professional animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500 bg-[length:200%_100%] group-hover:animate-gradient-x"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
                <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center group cyberpunk-menu-btn"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-blue-500 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-blue-500 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-blue-500 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
                </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-blue-500/20 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="px-4 py-4 space-y-2">
              {[
                { name: 'HOME', id: 'home', icon: '🏠', desc: 'Back to Top', code: 'HOM' },
                { name: 'SERVICES', id: 'services', icon: '⚡', desc: 'Our Solutions', code: 'SVC' },
                { name: 'ABOUT', id: 'about', icon: '🔧', desc: 'Who We Are', code: 'ABT' },
                { name: 'TEAM', id: 'team', icon: '👥', desc: 'Meet Our Team', code: 'TAM' },
                { name: 'PROJECTS', id: 'projects', icon: '🚀', desc: 'Our Work', code: 'PRJ' },
                { name: 'CONTACT', id: 'contact', icon: '📡', desc: 'Get In Touch', code: 'CNT' }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 p-2 transition-all duration-300 group cyberpunk-mobile-item ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-blue-400/10 border-blue-400/50' 
                      : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/5 border-transparent hover:border-blue-400/30'
                  }`}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300 text-blue-500">
                    {item.icon}
                  </span>
                  <div className="flex-1 text-left">
                    <div className="font-mono font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-slate-400/60 font-mono">[{item.code}] {item.desc}</div>
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-blue-500">→</span>
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
      <section className="hero-gradient pt-24 pb-12 relative overflow-hidden min-h-[80vh]" id="home" aria-label="Hero section">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 pt-16 relative z-20">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="mb-6">
                <div className="relative w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-4 -mt-8 md:-mt-12 lg:-mt-16">
                  {/* Outer logo spinning anticlockwise with glow */}
                  <div className="absolute inset-0 animate-spin-anticlockwise">
                    <div className="relative w-full h-full">
                      {/* Glow layers behind the logo */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400/15 via-blue-500/20 to-purple-500/15 rounded-full blur-xl"></div>
                      <div className="absolute inset-2 w-full h-full bg-gradient-to-r from-cyan-300/12 via-blue-400/16 to-purple-400/12 rounded-full blur-lg"></div>
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400/8 via-blue-500/12 to-purple-500/8 rounded-full blur-xl animate-pulse-glow"></div>
                      <div className="absolute inset-2 w-full h-full bg-gradient-to-r from-cyan-300/6 via-blue-400/10 to-purple-400/6 rounded-full blur-lg animate-pulse-glow"></div>
                <Image 
                  src={getImageKitUrl(IMAGE_PATHS.outerLogo, 'w-320,h-320,f-auto,q-100')}
                  alt="PowerProject Outer Logo - Spinning outer ring representing our dynamic development process"
                  width={320}
                  height={320}
                  className="w-full h-full object-contain relative z-10"
                  priority
                  quality={100}
                />
                    </div>
                  </div>
                  {/* Inner logo spinning clockwise with glow */}
                  <div className="absolute inset-6 md:inset-10 lg:inset-12 animate-spin-clockwise">
                    <div className="relative w-full h-full">
                      {/* Inner glow layers behind the logo */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400/10 via-cyan-400/15 to-blue-400/10 rounded-full blur-lg animate-pulse-glow-inner"></div>
                      <div className="absolute inset-1 w-full h-full bg-gradient-to-r from-emerald-300/8 via-cyan-300/12 to-blue-300/8 rounded-full blur-md"></div>
                                            <Image
                        src={getImageKitUrl(IMAGE_PATHS.innerLogo, 'w-256,h-256,f-auto,q-100')}
                        alt="PowerProject Inner Logo - Core technology hub spinning clockwise representing innovation"
                        width={256}
                        height={256}
                        className="w-full h-full object-contain relative z-10"
                        priority
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl professional-heading mb-6 px-4">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                <span className="text-white">
                  Software Development
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl professional-subheading mb-8 px-4 max-w-4xl mx-auto leading-relaxed">
                Transform your ideas into cutting-edge software solutions with our expert team. 
                Get your MVP developed in just 6 weeks using the latest technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="glass-card glass-card-hover px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 w-full sm:w-auto"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="glass-card glass-card-hover px-8 py-4 rounded-xl font-semibold text-blue-400 border border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-400/10 transition-all duration-300 w-full sm:w-auto"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Cyberpunk Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-gray-900/50 relative overflow-hidden">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyberpunk-card text-center">
              <div className="text-4xl font-bold cyberpunk-text mb-2 font-mono">[300+]</div>
              <div className="text-blue-400 font-mono">SUCCESSFUL_PROJECTS</div>
              <div className="text-sm text-slate-400/60 mt-2 font-mono">[STATUS: DELIVERED] Exceptional results for our clients</div>
            </div>
            <div className="cyberpunk-card text-center">
              <div className="text-4xl font-bold cyberpunk-text mb-2 font-mono">[8+]</div>
              <div className="text-blue-400 font-mono">YEARS_ACTIVE</div>
              <div className="text-sm text-slate-400/60 mt-2 font-mono">[STATUS: PROVEN] Track record of excellence</div>
            </div>
            <div className="cyberpunk-card text-center">
              <div className="text-4xl font-bold cyberpunk-text mb-2 font-mono">[100+]</div>
              <div className="text-blue-400 font-mono">EXPERT_DEVELOPERS</div>
              <div className="text-sm text-slate-400/60 mt-2 font-mono">[STATUS: ONLINE] Top-tier talent across all technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-950/95 via-gray-900/98 to-gray-950/95 relative overflow-hidden">
        {/* Square box texture pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(75,85,99,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(75,85,99,0.08)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        {/* Dark grey background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,41,55,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(17,24,39,0.15),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <Image 
                src={getImageKitUrl(IMAGE_PATHS.logoBgr, 'w-80,h-80,f-auto,q-100')} 
                alt="PowerProject Logo" 
                width={80}
                height={80}
                className="h-20 w-auto mx-auto mb-4 logo-img"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 futuristic-heading px-4">
              <span className="cyberpunk-text">[OUR_SERVICES]</span>
            </h2>
            <p className="text-xl text-blue-400/80 max-w-3xl mx-auto font-mono">
              [SYSTEM_READY] Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyberpunk-card">
              <div className="w-16 h-16 bg-blue-400/20 rounded-lg flex items-center justify-center mb-6 relative">
                <div className="w-8 h-8 bg-blue-400 rounded animate-cyber-pulse"></div>
                <div className="absolute inset-0 border border-blue-400/30 rounded-lg animate-spin-slow"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-blue-400">[CUSTOM_DEV]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-mono cyberpunk-glow"
              >
                [LEARN_MORE] →
              </button>
            </div>

            <div className="cyberpunk-card">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-lg flex items-center justify-center mb-6 relative">
                <div className="w-8 h-8 bg-cyan-400 rounded animate-cyber-pulse"></div>
                <div className="absolute inset-0 border border-cyan-400/30 rounded-lg animate-spin-reverse"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-cyan-400">[MOBILE_APPS]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-mono cyberpunk-glow"
              >
                [LEARN_MORE] →
              </button>
            </div>

            <div className="cyberpunk-card">
              <div className="w-16 h-16 bg-violet-400/20 rounded-lg flex items-center justify-center mb-6 relative">
                <div className="w-8 h-8 bg-violet-400 rounded animate-cyber-pulse"></div>
                <div className="absolute inset-0 border border-violet-400/30 rounded-lg animate-spin-slow"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-violet-400">[AI_SOLUTIONS]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] Intelligent automation and AI-powered solutions to streamline your business processes and boost efficiency.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-violet-400 hover:text-violet-300 transition-colors cursor-pointer font-mono cyberpunk-glow"
              >
                [LEARN_MORE] →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900/40 via-slate-800/60 to-gray-900/40 relative overflow-hidden" aria-label="About section">
        {/* Cyberpunk matrix-style background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <Image 
                src={getImageKitUrl(IMAGE_PATHS.powerProject, 'w-96,h-96,f-auto,q-100')} 
                alt="PowerProject" 
                width={96}
                height={96}
                className="h-24 w-auto mx-auto mb-4 logo-img"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 futuristic-heading px-4">
              <span className="cyberpunk-text">[ABOUT_POWERPROJECT]</span>
            </h2>
            <p className="text-xl text-blue-400/80 max-w-3xl mx-auto font-mono">
              [STATUS: ACTIVE] We are a leading software development company with over 8 years of experience in delivering cutting-edge solutions to businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-mono text-blue-400">[OUR_MISSION]</h3>
              <p className="text-gray-300 mb-6 font-mono">
                [EXECUTE] To transform innovative ideas into powerful software solutions that drive business growth and success in the digital age..
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
                <div className="text-xl text-blue-400 mb-2 font-mono">YEARS_EXPERIENCE</div>
                <div className="text-slate-400/60 font-mono">[STATUS: DELIVERING] Excellence in software development</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-gray-950/95 via-gray-900/98 to-gray-950/95 relative overflow-hidden" aria-label="Team section">
        {/* Square box texture pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(75,85,99,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(75,85,99,0.08)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        {/* Dark grey background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,41,55,0.15)_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-6">
              <Image 
                src={getImageKitUrl(IMAGE_PATHS.powerProject, 'w-96,h-96,f-auto,q-100')} 
                alt="PowerProject" 
                width={96}
                height={96}
                className="h-24 w-auto mx-auto mb-4 logo-img"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 futuristic-heading px-4">
              <span className="cyberpunk-text">[MEET_OUR_TEAM]</span>
            </h2>
            <p className="text-xl text-blue-400/80 max-w-3xl mx-auto font-mono">
              [STATUS: ACTIVE] The brilliant minds behind PowerProject, dedicated to transforming your ideas into reality.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Team Member Card */}
            <div className="flex justify-center">
              <TeamMemberCard
                name="Ubaid Ahmed"
                role="Lead Developer & Software Engineer"
                portfolio="https://botportfolio.netlify.app"
                imagePath={IMAGE_PATHS.ubaidAhmed}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Placeholder for future team members */}
            <div className="flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full overflow-hidden border-2 border-slate-600/30 group-hover:border-blue-400/50 transition-all duration-300 bg-slate-800/50 flex items-center justify-center">
                  <div className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="text-slate-400 font-medium">Coming Soon</div>
                  <div className="text-sm text-slate-500">New Team Member</div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 glass-card rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-slate-300">We push boundaries and explore cutting-edge technologies to deliver exceptional solutions.</p>
            </div>

            <div className="text-center p-6 glass-card rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-slate-300">We work closely with our clients to understand their vision and bring it to life.</p>
            </div>

            <div className="text-center p-6 glass-card rounded-2xl">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-slate-300">We are committed to delivering high-quality solutions that exceed expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-900/50 via-slate-800/40 to-gray-900/50 relative overflow-hidden">
        {/* Cyberpunk grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 futuristic-heading px-4">
              <span className="cyberpunk-text">[OUR_PROJECTS]</span>
            </h2>
            <p className="text-xl text-blue-400/80 font-mono">
              [STATUS: SHOWCASING] Our expertise through successful project deliveries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* FitFlex - Fitness Mobile App */}
            <div className="cyberpunk-card group">
              <div className="w-full h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(59,130,246,0.1)_50%,transparent_70%)]"></div>
                <div className="absolute top-2 left-2 text-blue-400 font-mono text-xs">[FITNESS]</div>
                <div className="absolute bottom-2 right-2 text-cyan-400 font-mono text-xs">[FLUTTER]</div>
                {/* Fitness icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">💪</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-blue-400">[FITFLEX_MOBILE_APP]</h3>
              <p className="text-gray-300 text-sm mb-4 font-mono">[EXECUTE] Dynamic Flutter fitness app with workout plans, diet suggestions, and equipment guidance</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-mono rounded">Flutter</span>
                <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-mono rounded">Firebase</span>
                <span className="px-2 py-1 bg-slate-400/20 text-slate-400 text-xs font-mono rounded">Mobile</span>
              </div>
              <a 
                href="https://github.com/LabridTech/FitFlex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer text-sm font-mono cyberpunk-glow inline-flex items-center gap-2"
              >
                [VIEW_CODE] →
              </a>
            </div>

            {/* E-Commerce Platform */}
            <div className="cyberpunk-card group">
              <div className="w-full h-48 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(6,182,212,0.1)_50%,transparent_70%)]"></div>
                <div className="absolute top-2 left-2 text-cyan-400 font-mono text-xs">[E-COMMERCE]</div>
                <div className="absolute bottom-2 right-2 text-blue-400 font-mono text-xs">[WEB]</div>
                {/* E-commerce icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🛒</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-cyan-400">[E-COMMERCE_PLATFORM]</h3>
              <p className="text-gray-300 text-sm mb-4 font-mono">[EXECUTE] Full-stack e-commerce solution with advanced features and payment integration</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-mono rounded">React</span>
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-mono rounded">Node.js</span>
                <span className="px-2 py-1 bg-slate-400/20 text-slate-400 text-xs font-mono rounded">MongoDB</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer text-sm font-mono cyberpunk-glow"
              >
                [VIEW_DETAILS] →
              </button>
            </div>

            {/* AI Analytics Dashboard */}
            <div className="cyberpunk-card group">
              <div className="w-full h-48 bg-gradient-to-br from-violet-400/20 to-cyan-400/20 rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,92,246,0.1)_50%,transparent_70%)]"></div>
                <div className="absolute top-2 left-2 text-violet-400 font-mono text-xs">[AI_ANALYTICS]</div>
                <div className="absolute bottom-2 right-2 text-cyan-400 font-mono text-xs">[AI]</div>
                {/* AI icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🤖</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-mono text-violet-400">[AI_ANALYTICS_DASHBOARD]</h3>
              <p className="text-gray-300 text-sm mb-4 font-mono">[EXECUTE] Intelligent analytics platform with machine learning and real-time insights</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-violet-400/20 text-violet-400 text-xs font-mono rounded">Python</span>
                <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-mono rounded">TensorFlow</span>
                <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-mono rounded">React</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-violet-400 hover:text-violet-300 transition-colors cursor-pointer text-sm font-mono cyberpunk-glow"
              >
                [VIEW_DETAILS] →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cyberpunk Tech Stack Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800/30 via-slate-900/50 to-gray-800/30 relative overflow-hidden">
        {/* Cyberpunk circuit board background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,255,255,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 futuristic-heading px-4">
              <span className="cyberpunk-text">[TECH_STACK]</span>
            </h2>
            <p className="text-xl text-blue-400/80 font-mono">
              [STATUS: CUTTING_EDGE] Technologies for modern software development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', logo: IMAGE_PATHS.react, color: 'text-blue-400' },
              { name: 'Next.js', logo: IMAGE_PATHS.nextjs, color: 'text-white' },
              { name: 'Node.js', logo: IMAGE_PATHS.nodejs, color: 'text-green-400' },
              { name: 'Express', logo: IMAGE_PATHS.express, color: 'text-gray-400' },
              { name: 'TypeScript', logo: IMAGE_PATHS.typescript, color: 'text-blue-500' },
              { name: 'Flutter', logo: IMAGE_PATHS.flutter, color: 'text-blue-300' },
              { name: 'C++', logo: IMAGE_PATHS.cpp, color: 'text-blue-600' },
              { name: 'Git', logo: IMAGE_PATHS.git, color: 'text-orange-500' },
              { name: 'AWS', logo: IMAGE_PATHS.aws, color: 'text-orange-400' },
              { name: 'Shopify', logo: IMAGE_PATHS.shopify, color: 'text-green-600' },
              { name: 'Stripe', logo: IMAGE_PATHS.stripe, color: 'text-purple-500' },
              { name: 'MongoDB', logo: IMAGE_PATHS.mongodb, color: 'text-green-500' },
              { name: 'PostgreSQL', logo: IMAGE_PATHS.postgresql, color: 'text-blue-700' },
              { name: 'Prisma', logo: IMAGE_PATHS.prisma, color: 'text-gray-300' },
              { name: 'UI/UX', logo: IMAGE_PATHS.figma, color: 'text-pink-400' },
              { name: 'Vercel', logo: IMAGE_PATHS.vercel, color: 'text-black' }
            ].map((tech) => (
              <div key={tech.name} className="cyberpunk-card text-center p-4 group">
                <div className="w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  <Image
                    src={getImageKitUrl(tech.logo, 'w-32,h-32,f-auto,q-100')}
                    alt={`${tech.name} technology logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    quality={80}
                  />
                </div>
                <div className={`text-sm font-semibold font-mono ${tech.color} group-hover:text-blue-400 transition-colors duration-300`}>
                  {tech.name}
                </div>
                <div className="mt-2 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberpunk Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-950/95 via-gray-900/98 to-gray-950/95 relative overflow-hidden" aria-label="Contact section">
        {/* Square box texture pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(75,85,99,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(75,85,99,0.08)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        {/* Dark grey terminal background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(31,41,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(31,41,55,0.1)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 futuristic-heading px-4">
              <span className="cyberpunk-text">[READY_TO_START?]</span>
            </h2>
            <p className="text-xl text-blue-400/80 font-mono mb-8">
              [INITIATE] Let&apos;s discuss your project and bring your vision to life
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="cyberpunk-card p-4 min-w-[280px]">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📧</div>
                  <div>
                    <div className="text-xs text-slate-400/60 font-mono">[EMAIL]</div>
                    <a href="mailto:assist.powerproject@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors font-mono cyberpunk-glow">
                      assist.powerproject@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="cyberpunk-card p-4 min-w-[280px]">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">📞</div>
                  <div>
                    <div className="text-xs text-slate-400/60 font-mono">[PHONE]</div>
                    <a href="tel:+923030009437" className="text-blue-400 hover:text-blue-300 transition-colors font-mono cyberpunk-glow">
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
                  <label className="block text-sm font-medium text-blue-400 mb-2 font-mono">[NAME]</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white font-mono cyberpunk-glow"
                    placeholder="[ENTER_NAME]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-400 mb-2 font-mono">[EMAIL]</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white font-mono cyberpunk-glow"
                    placeholder="[ENTER_EMAIL]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-400 mb-2 font-mono">[PROJECT_DESCRIPTION]</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-blue-400/30 rounded-lg focus:border-blue-400 focus:outline-none transition-colors text-white font-mono cyberpunk-glow"
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
      <footer className="bg-gradient-to-br from-gray-900/80 via-slate-800/90 to-gray-900/80 border-t border-blue-400/20 py-12 relative overflow-hidden">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image 
                src={getImageKitUrl(IMAGE_PATHS.logoBgr, 'w-64,h-64,f-auto,q-100')} 
                alt="PowerProject Logo" 
                width={64}
                height={64}
                className="h-16 w-auto mr-3 logo-img"
              />
              <div className="text-2xl font-bold cyberpunk-text font-mono">PowerProject</div>
            </div>
            <p className="text-blue-400/80 mb-6 font-mono">
              [MISSION] Transforming ideas into digital reality with cutting-edge technology
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-blue-400/60 hover:text-blue-400 transition-colors font-mono cyberpunk-glow">[LINKEDIN]</a>
              <a href="https://github.com/powerproject-ltd/powerproject-ltd" target="_blank" rel="noopener noreferrer" className="text-blue-400/60 hover:text-blue-400 transition-colors font-mono cyberpunk-glow">[GITHUB]</a>
              <a href="#" className="text-blue-400/60 hover:text-blue-400 transition-colors font-mono cyberpunk-glow">[TWITTER]</a>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-400/20 text-blue-400/60 text-sm font-mono">
              © 2025 PowerProject. [STATUS: ALL_RIGHTS_RESERVED]
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
