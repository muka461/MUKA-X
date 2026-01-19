"use client";

import HeadphoneScroll from '@/components/HeadphoneScroll';
import FeaturesTestimonials from '@/components/FeaturesTestimonials';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* 
        Layer 1: Background Interactive Canvas 
        This is the fixed background that stays put while content scrolls over (or creates space)
      */}
      <div className="fixed inset-0 z-0">
        <HeadphoneScroll />
      </div>

      {/* 
        Layer 2: Content Overlay 
        This is the scrollable content container
      */}
      <div className="relative z-10 pointer-events-none">

        {/* Hero Section (Text Overlay) */}
        <section className="h-screen flex flex-col justify-center items-center text-center p-4">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[14vw] font-bold tracking-tighter leading-none mb-4 mix-blend-difference text-white opacity-90"
          >
            MUKA X
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/50 font-light tracking-[0.3em] uppercase mix-blend-difference"
          >
            Sonic Perfection
          </motion.p>
        </section>

        {/* 
          Scroll Spacer:
          This invisible section forces the user to scroll through the "HeadphoneScroll" animation.
          Adjust height to control animation duration relative to scroll.
        */}
        <section className="h-[200vh]" />

        {/* 
          Main Content: "Beyond Hero" Section
          This section slides up over the fixed background.
        */}
        <div className="pointer-events-auto bg-[#050505] relative z-20 shadow-[0_-100px_150px_rgba(0,0,0,1)] border-t border-white/5">
          <FeaturesTestimonials />
          <ContactSection />
        </div>

        {/* Footer */}
        <footer className="py-12 bg-[#050505] text-center text-white/20 text-[10px] uppercase tracking-[0.2em] relative z-20 border-t border-white/5">
          <p>© 2026 Muka X Audio. Designed for Excellence.</p>
        </footer>

      </div>
    </main>
  );
}
