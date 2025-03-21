import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  const [prize, setPrize] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (prize < 1000000) {
        setPrize(prize + 10000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [prize]);

  return (
    <section className="py-16 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Why Join the Hackathon?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg text-neonBlue mb-8 max-w-2xl mx-auto"
      >
        Build cool projects, win big, and meet top devs & designers.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-5xl font-bold text-neonPink"
      >
        ${prize.toLocaleString()}+ in Prizes
      </motion.div>
    </section>
  );
};

export default AboutSection;
