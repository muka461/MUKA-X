"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function FeaturesTestimonials() {
    const scrollToFeatures = () => {
        const element = document.getElementById('features-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const element = document.getElementById('contact-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section style={{ width: '100%', backgroundColor: '#000000', color: 'white', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', 'Montserrat', system-ui, -apple-system, sans-serif" }}>

            {/* Navigation */}
            <div style={{ width: '100%', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.03em' }}>Muka X</div>
                    <div style={{ display: 'flex', gap: '48px', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, color: 'rgba(255,255,255,0.4)', alignItems: 'center' }}>
                        <span
                            onClick={scrollToHome}
                            style={{ color: 'white', borderBottom: '1px solid #D4AF37', paddingBottom: '4px', cursor: 'pointer' }}
                        >
                            Home
                        </span>
                        <span
                            onClick={scrollToFeatures}
                            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                        >
                            Features
                        </span>
                        <span
                            onClick={scrollToContact}
                            style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                        >
                            Contact Us
                        </span>
                    </div>
                </div>
            </div>

            <div id="features-section" style={{ maxWidth: '1400px', margin: '0 auto', padding: '80px 48px' }}>

                {/* Upper Section: Product Image (Left) + Features Row (Right) */}
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 1024 ? '45% 55%' : '1fr', gap: '64px', marginBottom: '120px' }}>

                    {/* Left: Professional Product Rendering */}
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px' }}>
                        {/* Large Deep Amber Radial Glow - Backlight Halo */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '600px',
                            height: '600px',
                            background: 'radial-gradient(circle, #4b3621 0%, #3d2b16 25%, #2a1f10 50%, transparent 75%)',
                            pointerEvents: 'none',
                            filter: 'blur(60px)',
                            opacity: 0.9
                        }} />

                        {/* Contact Shadow - Subtle ground shadow */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60%',
                            height: '30px',
                            background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.6) 0%, transparent 70%)',
                            filter: 'blur(15px)',
                            pointerEvents: 'none',
                            zIndex: 5
                        }} />

                        {/* Primary Headphone Image - Perfectly Upright, Transparent */}
                        <img
                            src="/product-hero.png"
                            alt="Muka X Headphones"
                            style={{
                                position: 'relative',
                                zIndex: 10,
                                width: '100%',
                                maxWidth: '480px',
                                height: 'auto',
                                transform: 'rotate(0deg)',
                                filter: 'drop-shadow(0 35px 45px rgba(0, 0, 0, 0.9)) brightness(1.05) contrast(1.1)',
                                mixBlendMode: 'normal'
                            }}
                        />
                    </div>

                    {/* Right: Features in HORIZONTAL ROW with Vertical Dividers */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr 1px 1fr', gap: '0', width: '100%', alignItems: 'center' }}>

                            {/* Feature 1: Active Noise Cancellation */}
                            <div style={{ padding: '0 28px', textAlign: 'center' }}>
                                <div style={{ width: '36px', height: '36px', color: '#D4AF37', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))', margin: '0 auto 20px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
                                        <path d="M4 10h2M8 6v8M12 4v12M16 8v8M20 10h2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.3', letterSpacing: '-0.02em' }}>
                                    Active Noise<br />Cancellation
                                </h3>
                                <p style={{ color: '#CCCCCC', fontSize: '16px', lineHeight: '1.6', textAlign: 'left', fontWeight: 400, margin: 0 }}>
                                    Experience instant sanctuary. Our industry-leading Hybrid ANC technology analyzes and neutralizes environmental distractions in real-time, allowing you to lose yourself in pure, uninterrupted sound.
                                </p>
                            </div>

                            {/* Vertical Divider */}
                            <div style={{ width: '1px', height: '240px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

                            {/* Feature 2: Studio-Grade Audio */}
                            <div style={{ padding: '0 28px', textAlign: 'center' }}>
                                <div style={{ width: '36px', height: '36px', color: '#D4AF37', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))', margin: '0 auto 20px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
                                        <path d="M3 18v-6a9 9 0 0 1 18 0v6" strokeLinecap="round" />
                                        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.3', letterSpacing: '-0.02em' }}>
                                    Studio-Grade<br />Audio
                                </h3>
                                <p style={{ color: '#CCCCCC', fontSize: '16px', lineHeight: '1.6', textAlign: 'left', fontWeight: 400, margin: 0 }}>
                                    Immerse yourself in every detail. Our custom-engineered 40mm drivers deliver crystalline highs, rich mids, and visceral bass, recreating the soundstage exactly as the artist intended.
                                </p>
                            </div>

                            {/* Vertical Divider */}
                            <div style={{ width: '1px', height: '240px', backgroundColor: 'rgba(255,255,255,0.1)' }} />

                            {/* Feature 3: 40-Hour Battery Life */}
                            <div style={{ padding: '0 28px', textAlign: 'center' }}>
                                <div style={{ width: '36px', height: '36px', color: '#D4AF37', filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))', margin: '0 auto 20px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '100%', height: '100%' }}>
                                        <rect x="2" y="7" width="16" height="10" rx="2" ry="2" strokeLinecap="round" />
                                        <line x1="22" x2="22" y1="11" y2="13" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#FFFFFF', margin: '0 0 16px 0', lineHeight: '1.3', letterSpacing: '-0.02em' }}>
                                    40-Hour<br />Battery Life
                                </h3>
                                <p style={{ color: '#CCCCCC', fontSize: '16px', lineHeight: '1.6', textAlign: 'left', fontWeight: 400, margin: 0 }}>
                                    Power that keeps pace with you. Enjoy up to 40 hours of continuous playback on a single charge. Running low? A quick 10-minute charge gives you 5 hours of listening time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section: Testimonials (Left) + Secondary Image (Center) + CTA (Right) */}
                <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr 1fr' : '1fr', gap: '48px', alignItems: 'end', paddingTop: '60px' }}>

                    {/* Left: Testimonials */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#FFFFFF', margin: 0, letterSpacing: '-0.02em' }}>Testimonials</h3>

                        {/* Testimonial 1 */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop" alt="Marcus V." style={{ width: '44px', height: '44px', borderRadius: '50%' }} />
                                <div style={{ display: 'flex', gap: '3px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} style={{ width: '16px', height: '16px', color: '#D4AF37', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))' }} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p style={{ color: '#CCCCCC', fontSize: '18px', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                                "The acoustic precision is breathtaking. I've never experienced a soundstage this wide in a wireless headset—it truly delivers a studio-grade experience in a portable form factor. An absolute masterpiece of engineering."
                            </p>
                            <div>
                                <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, margin: 0 }}>Marcus V.</p>
                                <p style={{ color: '#D4AF37', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '4px 0 0 0', fontWeight: 500 }}>Sound Engineer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="Elena S." style={{ width: '44px', height: '44px', borderRadius: '50%' }} />
                                <div style={{ display: 'flex', gap: '3px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} style={{ width: '16px', height: '16px', color: '#D4AF37', filter: 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))' }} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <p style={{ color: '#CCCCCC', fontSize: '18px', lineHeight: '1.6', margin: 0, fontWeight: 300 }}>
                                "The silence is instant. Whether I'm on a long-haul flight or in a chaotic office, the noise cancellation creates a perfect sanctuary. Combined with the 40-hour battery, it's the most reliable luxury I own."
                            </p>
                            <div>
                                <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700, margin: 0 }}>Elena S.</p>
                                <p style={{ color: '#D4AF37', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '4px 0 0 0', fontWeight: 500 }}>Creative Director</p>
                            </div>
                        </div>
                    </div>

                    {/* Center: Secondary Product Image - Upright, Transparent */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                        <div style={{ position: 'relative' }}>
                            {/* Amber Glow for Secondary Image */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '250px',
                                height: '250px',
                                background: 'radial-gradient(circle, #4b3621 0%, #3d2b16 30%, transparent 70%)',
                                filter: 'blur(40px)',
                                opacity: 0.7
                            }} />

                            {/* Contact Shadow for Secondary Image */}
                            <div style={{
                                position: 'absolute',
                                bottom: '5%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '50%',
                                height: '20px',
                                background: 'radial-gradient(ellipse, rgba(0, 0, 0, 0.5) 0%, transparent 70%)',
                                filter: 'blur(10px)',
                                pointerEvents: 'none'
                            }} />

                            {/* Secondary Headphone - Perfectly Upright, Transparent */}
                            <img
                                src="/product-hero.png"
                                alt="Muka X Detail"
                                style={{
                                    position: 'relative',
                                    width: '200px',
                                    height: 'auto',
                                    transform: 'rotate(0deg)',
                                    opacity: 0.95,
                                    filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.7)) brightness(1.03)',
                                    zIndex: 10
                                }}
                            />
                        </div>
                    </div>

                    {/* Right: CTA Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end', paddingBottom: '16px' }}>
                        <div style={{ display: 'inline-flex', borderRadius: '9999px', overflow: 'hidden', boxShadow: '0 0 30px rgba(212,175,55,0.35)' }}>
                            <button
                                onClick={scrollToContact}
                                style={{ background: 'linear-gradient(to right, #E2B05E, #D49B45)', color: '#000000', padding: '16px 40px', fontSize: '18px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', border: 'none', cursor: 'pointer' }}
                            >
                                Buy Now
                            </button>
                            <div style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '16px 32px', fontSize: '18px', fontWeight: 500, borderLeft: '1px solid rgba(212,175,55,0.3)' }}>
                                KES 6000
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
