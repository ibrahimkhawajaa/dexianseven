import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const fadeDownVariant = {
  initial: { opacity: 0, y: -20 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const fadeUpVariant = {
  initial: { opacity: 0, y: 32 },
  animate: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const slideUpVariant = {
  initial: { y: '110%' },
  animate: (custom) => ({
    y: 0,
    transition: {
      delay: 0.4 + custom * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const accentColor = '#5E0ED7';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Story', 'Expertise', 'Studios', 'Feedback'];
  const stats = [
    { number: 300, label: 'Crafted\nBrands' },
    { number: 200, label: 'Digital\nProducts' },
    { number: 100, label: 'Ventures\nFunded' },
  ];
  const headingWords = ['Fearless', 'Vision', 'Delivered'];

  return (
    <div
      className="min-h-screen flex flex-col font-[family-name:Inter,sans-serif] relative overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="initial"
          animate="animate"
          variants={fadeDownVariant}
          className="w-8 h-8 rounded-full border-[2px] flex items-center justify-center"
          style={{ borderColor: accentColor }}
        >
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
        </motion.div>

        {/* Center Nav Links (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => (
            <motion.a
              key={link}
              custom={index + 1}
              initial="initial"
              animate="animate"
              variants={fadeDownVariant}
              href="#"
              className="text-sm font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Button */}
        <motion.button
          custom={5}
          initial="initial"
          animate="animate"
          variants={fadeDownVariant}
          onClick={() => setMenuOpen(true)}
          className="w-9 h-9 bg-black rounded-full flex flex-col items-center justify-center gap-1 md:hidden"
          aria-label="Open menu"
        >
          <span className="w-4 h-0.5 bg-white" />
          <span className="w-4 h-0.5 bg-white" />
          <span className="w-4 h-0.5 bg-white" />
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-5 pt-5">
            {/* Logo */}
            <div
              className="w-8 h-8 rounded-full border-[2px] flex items-center justify-center"
              style={{ borderColor: accentColor }}
            >
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accentColor }} />
            </div>

            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 bg-black rounded-full flex items-center justify-center"
              aria-label="Close menu"
            >
              <X size={20} className="text-white" />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-8 mt-16 px-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-3xl font-semibold tracking-widest uppercase text-black hover:opacity-70 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu CTA */}
          <div className="mt-auto mb-8 px-5">
            <a
              href="#"
              className="flex items-center gap-2 text-xl font-semibold tracking-widest uppercase"
              style={{ color: accentColor }}
              onClick={() => setMenuOpen(false)}
            >
              Work With Us
              <ArrowUpRight size={20} />
            </a>
          </div>
        </motion.div>
      )}

      {/* Stats Row (Middle Section) */}
      <div className="flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
        <div className="flex gap-5 sm:gap-8 md:gap-10 text-right">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              custom={index + 2}
              initial="initial"
              animate="animate"
              variants={fadeUpVariant}
              className="flex flex-col"
            >
              {/* Number with + */}
              <div
                className="font-semibold font-[family-name:Inter,sans-serif]"
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 3.5rem)',
                  lineHeight: 1,
                }}
              >
                <span style={{ color: accentColor, fontSize: '0.5em' }}>+</span>
                <span className="text-black">{stat.number}</span>
              </div>

              {/* Label */}
              <p
                className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight mt-1"
                style={{ lineHeight: '1.2' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
        {/* Row A: Tagline + CTA */}
        <div className="flex items-center justify-between gap-4">
          {/* Tagline */}
          <motion.p
            custom={5}
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black w-[130px] sm:w-[160px] md:max-w-xs"
            style={{ lineHeight: '1.4' }}
          >
            Shaping Bold<br />
            Visions Into Power<br />
            For Your Tribe
          </motion.p>

          {/* CTA Link */}
          <motion.a
            custom={6}
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
            href="#"
            className="flex items-center gap-2 font-semibold whitespace-nowrap hover:opacity-70 transition-opacity"
            style={{
              color: accentColor,
              fontSize: 'clamp(1rem, 4vw, 1.5rem)',
              fontWeight: 600,
            }}
          >
            Work With Us
            <ArrowUpRight size={window.innerWidth >= 640 ? 22 : 18} />
          </motion.a>
        </div>

        {/* Row B: Description + Heading */}
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          {/* Description */}
          <motion.div
            custom={7}
            initial="initial"
            animate="animate"
            variants={fadeUpVariant}
            className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0"
          >
            <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right">
              Creative Studios Built Around Elevating Your Vision Into Striking Reality
            </p>
          </motion.div>

          {/* Main Heading */}
          <div className="text-right flex-1">
            {headingWords.map((word, wordIndex) => (
              <div key={word} className="overflow-hidden" style={{ lineHeight: '0.88' }}>
                <motion.div
                  custom={wordIndex}
                  initial="initial"
                  animate="animate"
                  variants={slideUpVariant}
                  className="font-semibold uppercase text-black"
                  style={{
                    fontSize: 'clamp(2rem, 9vw, 9rem)',
                    lineHeight: '0.88',
                    fontWeight: 600,
                  }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
