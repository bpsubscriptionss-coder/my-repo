// HPI 1.7-G
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  ArrowRight, 
  Target, 
  TrendingUp, 
  Award, 
  Cpu, 
  Brain, 
  Zap, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  ChevronRight,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Utility Components for Design System ---

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <div className="h-[1px] w-8 bg-electric-teal/50" />
    <span className="font-paragraph text-xs tracking-[0.2em] text-electric-teal uppercase">
      {children}
    </span>
  </div>
);

const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden bg-background/40 backdrop-blur-md border border-white/10 p-8 ${className}`}>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
    {children}
  </div>
);

const GridBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
        backgroundSize: '4rem 4rem'
      }} 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
  </div>
);

// --- Main Component ---

export default function HomePage() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-electric-teal/30 selection:text-electric-teal-foreground overflow-x-clip">
      <Header />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-electric-teal z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
        <GridBackground />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-30" />

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-electric-teal/30 bg-electric-teal/5 mb-8">
                <div className="w-2 h-2 rounded-full bg-electric-teal animate-pulse" />
                <span className="font-paragraph text-xs text-electric-teal tracking-widest uppercase">System Online</span>
              </div>
              
              <h1 className="font-heading text-6xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                CASEPROIQ
              </h1>
              
              <p className="font-paragraph text-lg lg:text-xl text-muted-gray-foreground max-w-2xl mb-10 leading-relaxed border-l-2 border-primary/50 pl-6">
                The definitive interface where academic theory integrates with corporate reality. 
                <span className="text-white block mt-2">Master the simulation. Lead the future.</span>
              </p>

              <div className="flex flex-wrap gap-6">
                <Button
                  onClick={() => navigate('/category')}
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-white font-heading text-lg px-10 py-8 rounded-none clip-path-button transition-all duration-300"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 90% 100%, 0 100%)' }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    INITIATE SEQUENCE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
                
                <div className="flex items-center gap-4 px-6 py-4 border border-white/10 bg-white/5 backdrop-blur-sm">
                  <Activity className="w-5 h-5 text-electric-teal" />
                  <div className="flex flex-col">
                    <span className="font-paragraph text-[10px] text-muted-gray-foreground uppercase tracking-wider">System Status</span>
                    <span className="font-heading text-sm text-white">Optimized for Growth</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <Image
                src="https://static.wixstatic.com/media/4e8bb3_63bb62d5663a422ca0937c3dd4eb45c8~mv2.png?originWidth=960&originHeight=704"
                alt="Digital Nexus Interface Visualization"
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
              />
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-10 z-20 bg-background/80 backdrop-blur-xl border border-electric-teal/30 p-4 max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-electric-teal" />
                  <span className="font-paragraph text-xs text-electric-teal">AI CORE</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[70%] bg-electric-teal animate-pulse" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-5 z-20 bg-background/80 backdrop-blur-xl border border-secondary/30 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-heading text-lg text-white">98.4%</div>
                    <div className="font-paragraph text-xs text-muted-gray-foreground">Logic Efficiency</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION PROTOCOL (Sticky Scroll) --- */}
      <section className="relative w-full py-32 border-t border-white/5">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Sticky Header */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <SectionLabel>Mission Protocol</SectionLabel>
                <h2 className="font-heading text-4xl lg:text-5xl mb-8 leading-tight">
                  BRIDGE THE <br />
                  <span className="text-primary">KNOWLEDGE GAP</span>
                </h2>
                <p className="font-paragraph text-muted-gray-foreground leading-relaxed mb-8">
                  A systematic approach to learning brand strategy and strategic planning. 
                  Engage with real-life scenarios to build the confidence required for modern leadership.
                </p>
                <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-primary to-transparent" />
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-8 space-y-24">
              <ProtocolCard 
                number="01"
                icon={<Target className="w-8 h-8 text-primary" />}
                title="Independent Mastery"
                description="Practice and master case-solving from home, without relying on external guidance. The program is designed to build autonomy and self-reliance."
              />
              <ProtocolCard 
                number="02"
                icon={<Layers className="w-8 h-8 text-secondary" />}
                title="Corporate Simulation"
                description="Align theoretical learning with practical application. Develop a clear, structured understanding of professional problem-solving techniques used in top-tier environments."
              />
              <ProtocolCard 
                number="03"
                icon={<Terminal className="w-8 h-8 text-electric-teal" />}
                title="Strategic Formulation"
                description="Gain a systematic and practical approach to brand strategy. Build the critical thinking and analytical reasoning skills essential for succeeding in modern workplaces."
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SIMULATION (Horizontal/Grid Hybrid) --- */}
      <section className="relative w-full py-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="relative z-10 max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionLabel className="justify-center">Assessment Architecture</SectionLabel>
            <h2 className="font-heading text-4xl lg:text-6xl mb-6">THREE-STAGE SIMULATION</h2>
            <p className="font-paragraph text-muted-gray-foreground">
              Progress through increasingly complex AI-generated business cases. 
              Each stage is a firewall between you and mastery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-primary/20 via-secondary/20 to-electric-teal/20 -translate-y-1/2 z-0" />

            <StageCard 
              stage="01"
              title="Easy Stage"
              color="primary"
              cases="1 Case Generated"
              desc="Foundational skills assessment. Randomly generated business case to solve from AI."
              icon={<ShieldCheck className="w-6 h-6" />}
            />
            <StageCard 
              stage="02"
              title="Medium Stage"
              color="secondary"
              cases="2 Cases Generated"
              desc="Intermediate problem solving. Two distinct scenarios testing adaptability and logic."
              icon={<Zap className="w-6 h-6" />}
            />
            <StageCard 
              stage="03"
              title="Difficult Stage"
              color="electric-teal"
              cases="4 Cases Generated"
              desc="Advanced strategic thinking. Complex multi-variable scenarios for final validation."
              icon={<Award className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* --- FEEDBACK LOOP (Feature Highlight) --- */}
      <section className="w-full py-32 relative">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-electric-teal/20 to-primary/20 blur-[100px] opacity-30" />
              <GlassCard className="relative z-10">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <span className="font-paragraph text-xs text-muted-gray-foreground">ANALYSIS_REPORT.JSON</span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                </div>
                <div className="space-y-6 font-paragraph text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-gray-foreground">Logic Score</span>
                    <span className="text-electric-teal">8.5/10</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-electric-teal" 
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-gray-foreground">Strategy Depth</span>
                    <span className="text-secondary">9.2/10</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "92%" }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      className="h-full bg-secondary" 
                    />
                  </div>

                  <div className="p-4 bg-white/5 rounded border-l-2 border-primary mt-4">
                    <p className="text-xs text-muted-gray-foreground leading-relaxed">
                      "Your solution demonstrates strong analytical reasoning. To improve, focus on more granular financial forecasting in the implementation phase."
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="order-1 lg:order-2">
              <SectionLabel>Feedback Loop</SectionLabel>
              <h2 className="font-heading text-4xl lg:text-5xl mb-6">
                INTELLIGENT <br />
                PERFORMANCE DATA
              </h2>
              <p className="font-paragraph text-lg text-muted-gray-foreground mb-8">
                Receive detailed performance analysis and improvement recommendations. 
                The system explains the "why" and "what" behind every model answer, 
                rating your solution on a 1-10 scale.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Detailed gap analysis vs model answers",
                  "Quantitative scoring metrics",
                  "Actionable improvement advice"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-electric-teal" />
                    <span className="font-paragraph text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative w-full py-40 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl lg:text-7xl mb-8 tracking-tight">
              READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-teal to-secondary">DEPLOY?</span>
            </h2>
            <p className="font-paragraph text-muted-gray-foreground max-w-2xl mx-auto mb-12 text-lg">
              The simulation awaits. Test your skills, receive feedback, and prepare for the corporate world.
            </p>
            
            <Button
              onClick={() => navigate('/category')}
              className="group bg-white text-background hover:bg-electric-teal hover:text-background font-heading text-xl px-12 py-8 rounded-none transition-all duration-300"
            >
              START ASSESSMENT <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// --- Sub-Components ---

function ProtocolCard({ number, icon, title, description }: { number: string, icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group grid md:grid-cols-[100px_1fr] gap-8 items-start border-b border-white/5 pb-12 last:border-0"
    >
      <div className="font-heading text-4xl text-white/10 group-hover:text-electric-teal/50 transition-colors">
        {number}
      </div>
      <div>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-electric-teal/30 transition-colors">
            {icon}
          </div>
          <h3 className="font-heading text-2xl text-foreground">{title}</h3>
        </div>
        <p className="font-paragraph text-muted-gray-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

function StageCard({ stage, title, color, cases, desc, icon }: { stage: string, title: string, color: string, cases: string, desc: string, icon: React.ReactNode }) {
  const colorClasses: Record<string, string> = {
    primary: "text-primary border-primary/30 bg-primary/10 group-hover:border-primary",
    secondary: "text-secondary border-secondary/30 bg-secondary/10 group-hover:border-secondary",
    "electric-teal": "text-electric-teal border-electric-teal/30 bg-electric-teal/10 group-hover:border-electric-teal"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative z-10 bg-background border border-white/10 p-8 hover:-translate-y-2 transition-all duration-300"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      
      <div className="flex justify-between items-start mb-8">
        <span className="font-paragraph text-xs text-muted-gray-foreground tracking-widest">STAGE {stage}</span>
        <div className={`p-2 rounded-full ${colorClasses[color].split(' ')[2]}`}>
          {React.cloneElement(icon as React.ReactElement, { className: `w-5 h-5 text-${color}` })}
        </div>
      </div>

      <h3 className="font-heading text-2xl mb-2">{title}</h3>
      <div className={`inline-block px-3 py-1 rounded text-xs font-bold mb-6 border ${colorClasses[color]}`}>
        {cases}
      </div>
      
      <p className="font-paragraph text-sm text-muted-gray-foreground leading-relaxed mb-8">
        {desc}
      </p>

      <div className="flex items-center gap-2 text-xs font-paragraph text-muted-gray-foreground">
        <Activity className="w-4 h-4" />
        <span>Rating: 1-10 Scale</span>
      </div>
    </motion.div>
  );
}