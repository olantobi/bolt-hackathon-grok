import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative"
      >
        <Parallax speed={-20}>
          <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-neonPink opacity-50 blur-3xl rounded-full w-[600px] h-[600px] mx-auto" />
        </Parallax>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl md:text-8xl font-bold text-white mb-4"
        >
          The World’s Largest Hackathon
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-xl md:text-2xl text-neonBlue mb-8"
        >
          Compete. Innovate. Win your share of $1M+ in prizes.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <button className="bg-neonPink text-darkBg px-6 py-3 rounded-full text-lg font-semibold hover:bg-neonBlue transition">
            Register Now
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
