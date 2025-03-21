import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';

// Social share icons with actual icons and links
const socialIcons = [
  { name: 'X', link: 'https://x.com/boltdotnew', icon: <FaTwitter /> },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/company/stackblitz', icon: <FaLinkedin /> },
  { name: 'Discord', link: 'https://discord.com/invite/stackblitz', icon: <FaDiscord /> },
];

// Variants for the headline glow effect
const glowVariants = {
  initial: { textShadow: '0 0 10px rgba(255, 0, 255, 0.5)' },
  animate: {
    textShadow: [
      '0 0 10px rgba(255, 0, 255, 0.5)',
      '0 0 20px rgba(0, 255, 255, 0.8)',
      '0 0 10px rgba(255, 0, 255, 0.5)',
    ],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// Variants for the subheadline bounce effect
const subheadlineVariants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      delay: 0.7,
    },
  },
};

// Variants for the social icons fade-in
const socialIconVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 + i * 0.2, // Staggered delay for each icon
      duration: 0.5,
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10"
      >
        {/* Gradient Background - Lower z-index to ensure it's behind the content */}
        <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonPink opacity-50 blur-3xl rounded-full w-[600px] h-[600px] mx-auto z-0" />

        {/* Headline with Glow Effect */}
        <motion.h1
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="text-6xl md:text-8xl font-bold text-white mb-4 relative z-10"
        >
          The World’s Largest Hackathon
        </motion.h1>

        {/* Subheadline with Bounce Effect */}
        <motion.p
          variants={subheadlineVariants}
          initial="initial"
          animate="animate"
          className="text-xl md:text-2xl text-neonBlue mb-8 relative z-10"
        >
          Compete. Innovate. Win your share of $1M+ in prizes.
        </motion.p>

        {/* CTA Button with Hover Effect */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="relative z-10"
        >
          <motion.button
            onClick={() => alert('Registration form coming soon!')}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-neonPink text-darkBg px-6 py-3 rounded-full text-lg font-semibold border-2 border-neonBlue cursor-pointer"
          >
            Register Now
          </motion.button>
        </motion.div>

        {/* Social Share Icons */}
        <motion.div
          className="flex justify-center space-x-4 mt-8 relative z-10"
          initial="initial"
          animate="animate"
        >
          {socialIcons.map((icon, index) => (
            <motion.a
              key={icon.name}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={socialIconVariants}
              initial="initial"
              animate="animate"
              className="text-neonBlue hover:text-neonPink transition text-2xl"
            >
              {icon.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
