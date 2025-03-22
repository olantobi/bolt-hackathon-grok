import { motion } from 'framer-motion';

const prizes = [
  { title: 'Best Overall', amount: '$500,000' },
  { title: 'Most Innovative', amount: '$250,000' },
  { title: 'Sponsor Challenges', amount: '$250,000' },
];

const PrizesSection = () => {
  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Prizes: $1M+ in Rewards</h2>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {prizes.map((prize, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-darkBg/50 border border-neonBlue rounded-lg p-4 md:p-6"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-neonPink">{prize.title}</h3>
            <p className="text-2xl md:text-3xl text-neonBlue my-4">{prize.amount}</p>
            <p className="text-base md:text-lg text-white">{prize.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
