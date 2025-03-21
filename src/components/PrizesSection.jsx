import { motion } from 'framer-motion';

const prizes = [
  { title: 'Best Overall', amount: '$500,000' },
  { title: 'Most Innovative', amount: '$250,000' },
  { title: 'Sponsor Challenges', amount: '$250,000' },
];

const PrizesSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Prizes: $1M+ in Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-darkBg/50 border border-neonBlue rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-neonPink">{prize.title}</h3>
            <p className="text-xl text-neonBlue mt-2">{prize.amount}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
