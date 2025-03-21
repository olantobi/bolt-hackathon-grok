import { motion } from 'framer-motion';

const judges = [
  { name: 'Judge 1', bio: 'Expert in AI and ML.' },
  { name: 'Judge 2', bio: 'Designer with 20+ years of experience.' },
  { name: 'Judge 3', bio: 'Tech entrepreneur and investor.' },
];

const JudgesSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Meet the Judges</h2>
      <div className="flex justify-center space-x-8">
        {judges.map((judge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="p-4 bg-darkBg/50 border border-neonPink rounded-lg"
          >
            <h3 className="text-xl font-semibold text-neonBlue">{judge.name}</h3>
            <p className="text-neonPink">{judge.bio}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JudgesSection;
