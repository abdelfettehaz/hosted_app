import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  BarChart3, 
  Bot, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Globe, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const navLinks = ["Features", "How it Works", "Security", "Support"];
  
  const stats = [
    { label: "Active Nodes", value: "10K+" },
    { label: "Predictions/sec", value: "2.5K" },
    { label: "Accuracy", value: "99.9%" },
  ];

  const features = [
    { 
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />, 
      title: "Real-time Telemetry", 
      desc: "Instant synchronization with industrial sensors for zero-latency monitoring." 
    },
    { 
      icon: <Bot className="w-6 h-6 text-blue-400" />, 
      title: "Neural RUL Engine", 
      desc: "Deep learning models specialized in predicting machine failure before it happens." 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6 text-blue-400" />, 
      title: "Encrypted Edge", 
      desc: "End-to-end TLS 1.3 encryption for all data processed at the edge." 
    },
    { 
      icon: <Cpu className="w-6 h-6 text-blue-400" />, 
      title: "Hardware Optimized", 
      desc: "Minimal battery and CPU footprint, optimized for modern industrial mobile devices." 
    },
    { 
      icon: <Zap className="w-6 h-6 text-blue-400" />, 
      title: "Instant Alerts", 
      desc: "Push notifications and webhooks to keep your team informed of critical shifts." 
    },
    { 
      icon: <Globe className="w-6 h-6 text-blue-400" />, 
      title: "Global Sync", 
      desc: "Access your dashboard from anywhere in the world with cloud persistence." 
    }
  ];

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      {/* Background Layers */}
      <div className="mesh-gradient" />
      <div className="grid-overlay" />
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" onError={(e) => e.target.style.display='none'} />
            <span className="text-xl font-bold tracking-tight">Sentinel<span className="text-blue-500">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-slate-400 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm font-medium transition-all">
            Contact Sales
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              NEW: V1.2.0 NOW AVAILABLE
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-24 h-24 mx-auto mb-10 filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo'; }}
            />
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
              Predict. Prevent.<br />
              <span className="text-gradient">Optimize.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              The industry-standard platform for predictive maintenance. 
              Built for precision engineering and high-stakes operations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a 
              href="/app-release.apk" 
              className="btn-glow group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download APK
            </a>
            <button className="flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg text-white hover:bg-white/5 transition-all">
              Watch Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/5 pt-12">
            {stats.map(stat => (
              <div key={stat.label}>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enterprise Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need to manage your industrial assets with confidence and clarity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[32px] hover:border-white/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-br from-blue-600 to-blue-900 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Ready to transform your maintenance?</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto relative z-10 opacity-80">
            Join thousands of engineers who trust Sentinel AI for their mission-critical operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a 
              href="/app-release.apk" 
              className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
            >
              Get Started for Free
            </a>
            <button className="px-10 py-5 rounded-2xl font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" onError={(e) => e.target.style.display='none'} />
              <span className="text-xl font-bold">SentinelAI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Advancing industrial intelligence through predictive modeling and edge computing.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-6 text-slate-600 text-xs uppercase tracking-widest font-semibold">
          <p>© 2026 PRECISION SENTINEL AI. BUILT FOR THE FUTURE.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
