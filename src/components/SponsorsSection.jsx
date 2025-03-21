import { motion } from 'framer-motion';

const sponsors = ['Sponsor 1', 'Sponsor 2', 'Sponsor 3', 'Sponsor 4'];

const SponsorsSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
      <div className="flex justify-center space-x-8">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.2 }}
            className="p-4 bg-darkBg/50 border border-neonBlue rounded-lg text-neonPink"
          >
            {sponsor}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
