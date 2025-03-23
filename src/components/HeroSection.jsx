import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaDiscord, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Globe from './Globe';

// Social share icons
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
      delay: 1 + i * 0.2,
      duration: 0.5,
    },
  }),
};

// Variants for the modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const HeroSection = () => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Registration successful:', formData);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '' });
          setIsModalOpen(false);
        }, 2000); // Close after 2 seconds
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
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

      {/* Globe Background */}
      <Globe />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-darkBg/70 z-10"></div>
      
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-10"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonPink opacity-50 blur-3xl rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px] mx-auto z-0" />

        {/* Headline with Glow Effect */}
        <motion.h1
          variants={glowVariants}
          initial="initial"
          animate="animate"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4 relative z-10"
        >
          The World’s Largest Hackathon
        </motion.h1>

        {/* Subheadline with Bounce Effect */}
        <motion.p
          variants={subheadlineVariants}
          initial="initial"
          animate="animate"
          className="text-lg sm:text-xl md:text-2xl text-neonBlue mb-8 relative z-10"
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
            onClick={() => setIsModalOpen(true)}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-neonPink text-darkBg px-6 py-3 rounded-full text-base md:text-lg font-semibold border-2 border-neonBlue cursor-pointer"
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
              className="text-neonBlue hover:text-neonPink transition text-xl md:text-2xl"
            >
              {icon.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-darkBg p-6 rounded-lg border-2 border-neonBlue w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-neonPink hover:text-neonBlue"
              >
                ✕
              </button>

              {/* Modal Content */}
              {isSubmitted ?  (
                <p className="text-neonBlue text-lg">Registration successful! See you at the hackathon! 🎉 </p>
              ) : (
                <>
                <h2 className="text-2xl md:text-3xl font-bold text-neonPink mb-4">
                  Register for the Hackathon
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-neonBlue mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-darkBg/50 border border-neonBlue text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-neonBlue mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 rounded bg-darkBg/50 border border-neonBlue text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-neonPink text-darkBg py-2 rounded-full font-semibold hover:bg-neonBlue transition"
                  >
                    Submit
                  </button>
                </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
