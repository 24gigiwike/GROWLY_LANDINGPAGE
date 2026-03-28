/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Shield, 
  Zap, 
  ChevronRight,
  ArrowRight,
  Plus
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const waitlistUrl = "https://tally.so/r/vG4vL4";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative">
      {/* Navigation - Minimal Editorial */}
      <nav className="fixed top-0 w-full z-[100] mix-blend-difference px-8 py-8 flex justify-between items-end">
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter uppercase leading-none">Growly<span className="text-brand-primary">+</span></span>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">Titanium Performance</span>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <a href="#system" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-brand-primary transition-colors">System</a>
          <a href="#results" className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-brand-primary transition-colors">Results</a>
          <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black tracking-[0.2em] uppercase bg-white text-black px-4 py-2">Waitlist</a>
        </div>
      </nav>

      {/* 1. HERO SECTION - Editorial Spread */}
      <section className="relative min-h-screen flex flex-col justify-center px-8 pt-20 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10">
          <div className="editorial-grid">
            <div className="col-start-1 col-span-12 lg:col-span-10">
              <h1 className="text-display text-[15vw] lg:text-[12vw] leading-[0.8] mb-8">
                Go <span className="text-brand-primary">Longer.</span><br />
                Stay in Control.
              </h1>
            </div>
            
            <div className="col-start-1 col-span-12 lg:col-start-7 lg:col-span-5 flex flex-col gap-8">
              <p className="text-lg md:text-xl font-medium text-white/60 leading-tight max-w-md">
                Growly+ is a fitness-based app that helps men build stamina, improve performance, and unlock their body's natural potential through focused training and discipline.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial group">
                  Join the Waitlist <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                </a>
                <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest uppercase text-white/40">
                  <Shield size={14} className="text-brand-primary" />
                  Performance System v1.0
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image - Asymmetrical Placement */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="absolute right-[-5%] top-[15%] w-[60%] lg:w-[40%] z-0"
        >
          <img 
            src="https://i.imgur.com/mT7rtCS.png" 
            alt="Growly+ App" 
            className="w-full h-auto drop-shadow-[0_0_100px_rgba(46,91,255,0.2)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Vertical Label */}
        <div className="absolute left-8 bottom-20 hidden lg:block">
          <span className="vertical-text text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">
            Elite Training Protocol / 2026
          </span>
        </div>
      </section>

      {/* 2. PROBLEM SECTION - Asymmetrical Layout */}
      <section className="relative min-h-screen flex items-center px-8 py-32 bg-white/[0.02]">
        <div className="editorial-grid w-full">
          <div className="col-start-1 col-span-12 lg:col-start-2 lg:col-span-5 relative">
            {/* Tertiary Accent Glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-12"
            >
              <span className="text-brand-accent font-black text-xs tracking-[0.3em] uppercase">The Gap</span>
              <h2 className="text-display text-[8vw] lg:text-[6vw]">
                Most men train their <span className="text-brand-accent">body...</span>
              </h2>
              <p className="text-2xl font-light text-white/40 leading-relaxed italic">
                “...but ignore the muscles that control performance.”
              </p>
            </motion.div>
          </div>

          <div className="col-start-1 col-span-12 lg:col-start-8 lg:col-span-4 mt-20 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-16"
            >
              <div className="flex flex-col gap-4 border-l-2 border-brand-primary pl-8">
                <h4 className="text-xl font-black uppercase tracking-tighter">Stamina</h4>
                <p className="text-sm text-white/40">Lack of endurance leads to premature fatigue and loss of confidence.</p>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-brand-accent pl-8">
                <h4 className="text-xl font-black uppercase tracking-tighter">Control</h4>
                <p className="text-sm text-white/40">Without targeted training, control is left to chance rather than discipline.</p>
              </div>
              <div className="flex flex-col gap-4 border-l-2 border-brand-accent pl-8">
                <h4 className="text-xl font-black uppercase tracking-tighter text-brand-accent">Potential</h4>
                <p className="text-sm text-white/40">Unlock the physiological baseline that most men never reach.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION / SYSTEM - Layered Composition */}
      <section id="system" className="relative min-h-screen py-32 px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/5 -z-10" />
        
        <div className="editorial-grid mb-32">
          <div className="col-start-1 col-span-12 lg:col-span-8">
            <h2 className="text-display text-[10vw] lg:text-[8vw] mix-blend-overlay opacity-20 absolute top-20 left-8 pointer-events-none">
              The System
            </h2>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 pt-20"
            >
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 uppercase">
                A Structured<br />
                <span className="text-brand-primary">Performance Protocol.</span>
              </h3>
            </motion.div>
          </div>
        </div>

        <div className="editorial-grid items-center">
          <div className="col-start-1 col-span-12 lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://i.imgur.com/6PoZAzK.png" 
                alt="Dashboard" 
                className="w-[80%] mx-auto drop-shadow-2xl z-20 relative"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-20 -right-10 w-[60%] z-30 hidden lg:block">
                <img 
                  src="https://i.imgur.com/Fg2c6Ym.png" 
                  alt="Workout" 
                  className="w-full drop-shadow-2xl border-4 border-brand-bg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <div className="col-start-1 col-span-12 lg:col-start-8 lg:col-span-5 mt-32 lg:mt-0">
            <div className="flex flex-col gap-12">
              {[
                { num: "01", title: "Kegel Exercises", desc: "Scientific protocols for pelvic floor strength and endurance." },
                { num: "02", title: "Fullness Workouts", desc: "Targeted training to improve blood flow and natural potential." },
                { num: "03", title: "Daily Progression", desc: "A streak-based system built for consistency and discipline." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-8 items-start group"
                >
                  <span className="text-brand-primary font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">{item.num}</span>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-black uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS - Minimal Pacing */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-display text-[8vw] lg:text-[5vw]">The Process</h2>
            <p className="text-white/40 max-w-sm text-right font-bold uppercase tracking-widest text-[10px]">
              Three phases to total performance mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: "Activate", desc: "Isolate and engage the core muscles responsible for performance control." },
              { title: "Build", desc: "Increase endurance through progressive resistance and daily streaks." },
              { title: "Perform", desc: "Apply your training to achieve peak stamina and sexual confidence." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-12 flex flex-col gap-8 hover:bg-white/10 transition-colors group"
              >
                <Plus className="text-brand-accent group-hover:rotate-90 transition-transform duration-500" size={24} />
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-brand-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESULTS / BENEFITS - Editorial Spread */}
      <section id="results" className="relative min-h-screen py-32 px-8 overflow-hidden">
        <div className="editorial-grid">
          <div className="col-start-1 col-span-12 lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display text-[10vw] lg:text-[7vw] mb-12">
                Titanium<br />Results.
              </h2>
              <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                {[
                  "Longer Stamina",
                  "Better Control",
                  "Stronger Erections",
                  "Enhanced Girth",
                  "Peak Confidence",
                  "Discipline First"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 bg-brand-primary group-hover:w-4 transition-all" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-start-1 col-span-12 lg:col-start-8 lg:col-span-5 mt-32 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-16 relative border-l-4 border-l-brand-accent"
            >
              <Zap className="text-brand-accent absolute -top-4 -left-4" size={40} />
              <p className="text-2xl font-light italic leading-relaxed mb-12 text-white/80">
                "Growly+ isn't just an app; it's a mental and physical shift. The discipline it requires translates directly into performance and confidence."
              </p>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-brand-accent">Verified User / Elite Tier</span>
                <span className="text-[10px] text-white/20 uppercase tracking-widest mt-1">30 Day Performance Cycle</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT SHOWCASE - Asymmetrical Collage */}
      <section className="py-24 md:py-32 bg-white/[0.02] overflow-hidden">
        <div className="px-8 text-center mb-16 md:mb-32">
          <span className="text-brand-accent font-black text-xs tracking-[0.5em] uppercase">The Interface</span>
          <h2 className="text-display text-[12vw] md:text-[8vw] lg:text-[5vw] mt-4">Designed for the Elite.</h2>
        </div>

        {/* Mobile: Vertical Stack (Edge-to-Edge) | Desktop: Asymmetrical Collage */}
        <div className="flex flex-col md:block md:relative max-w-7xl mx-auto md:h-[900px] gap-0 md:gap-0">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:absolute md:left-[5%] md:top-0 w-full md:w-[25%] z-10 md:rotate-[-5deg]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-brand-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <img src="https://i.imgur.com/Fg2c6Ym.png" alt="UI 1" className="relative w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[10%] w-full md:w-[30%] z-20"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-brand-accent/20 blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <img src="https://i.imgur.com/YFd59sJ.png" alt="UI 2" className="relative w-full h-auto drop-shadow-2xl md:scale-110" referrerPolicy="no-referrer" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:absolute md:right-[5%] md:top-[20%] w-full md:w-[25%] z-10 md:rotate-[5deg]"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-brand-primary/20 blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <img src="https://i.imgur.com/6PoZAzK.png" alt="UI 3" className="relative w-full h-auto drop-shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. FINAL CTA - Bold & Minimal */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-8 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-primary/10 blur-[200px] rounded-full -z-20" />
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center gap-12"
        >
          <h2 className="text-display text-[12vw] lg:text-[10vw]">
            Take <span className="text-brand-primary">Control.</span>
          </h2>
          <p className="text-xl text-white/40 max-w-xl uppercase font-bold tracking-widest leading-relaxed">
            Join the waitlist for the elite performance training system.
          </p>
          <a href={waitlistUrl} target="_blank" rel="noopener noreferrer" className="btn-editorial text-lg px-16 py-8">
            Join the Waitlist
          </a>
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/20">Limited Access / V1.0 Launch</span>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-black tracking-tighter uppercase">Growly<span className="text-brand-primary">+</span></span>
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest max-w-xs leading-loose">
            The titanium performance protocol for men who demand control and stamina.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Legal</span>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Privacy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Terms</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary">Social</span>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Instagram</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
