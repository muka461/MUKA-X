"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [focused, setFocused] = useState<string | null>(null);

    const inputStyle = (id: string) => ({
        width: '100%',
        backgroundColor: '#0A0A0A',
        border: `1px solid ${focused === id ? '#D4AF37' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '8px',
        padding: '16px 20px',
        color: 'white',
        fontSize: '15px',
        fontFamily: "'Inter', sans-serif",
        outline: 'none',
        transition: 'all 0.3s ease',
        boxShadow: focused === id ? '0 0 15px rgba(212, 175, 55, 0.1)' : 'none',
    });

    const labelStyle = {
        display: 'block',
        fontSize: '12px',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.15em',
        color: 'rgba(255,255,255,0.5)',
        marginBottom: '8px',
        fontWeight: 600,
    };

    return (
        <section id="contact-section" style={{ width: '100%', backgroundColor: '#000000', padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
            {/* Background Accent */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(75, 54, 33, 0.08) 0%, transparent 70%)',
                filter: 'blur(100px)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '48px', fontWeight: 700, color: 'white', marginBottom: '16px', letterSpacing: '-0.02em' }}
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ color: '#CCCCCC', fontSize: '18px', lineHeight: '1.6', fontWeight: 300 }}
                    >
                        Have questions about Muka X? Our team of audio experts is here to help you experience sonic perfection.
                    </motion.p>
                </div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '48px', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                        <div>
                            <label style={labelStyle}>Full Name</label>
                            <input
                                type="text"
                                placeholder="Marcus V."
                                style={inputStyle('name')}
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Email Address</label>
                            <input
                                type="email"
                                placeholder="marcus@studio.com"
                                style={inputStyle('email')}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        <label style={labelStyle}>Subject</label>
                        <input
                            type="text"
                            placeholder="Product Inquiry"
                            style={inputStyle('subject')}
                            onFocus={() => setFocused('subject')}
                            onBlur={() => setFocused(null)}
                        />
                    </div>

                    <div style={{ marginBottom: '40px' }}>
                        <label style={labelStyle}>Message</label>
                        <textarea
                            rows={5}
                            placeholder="How can we help you..."
                            style={{ ...inputStyle('message'), resize: 'none', minHeight: '150px' }}
                            onFocus={() => setFocused('message')}
                            onBlur={() => setFocused(null)}
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ display: 'inline-flex', borderRadius: '9999px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.3)' }}>
                            <button style={{
                                background: 'linear-gradient(135deg, #D4AF37 0%, #BE9B4B 100%)',
                                color: '#000000',
                                border: 'none',
                                padding: '18px 48px',
                                fontSize: '16px',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                transition: 'opacity 0.2s ease'
                            }}>
                                Send Message
                            </button>
                            <div style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: '18px 32px', fontSize: '16px', fontWeight: 500, borderLeft: '1px solid rgba(212,175,55,0.3)' }}>
                                Inquiry
                            </div>
                        </div>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
