import { motion } from 'framer-motion';

const timelineEvents = [
  { date: 'TBD', event: 'Registration Opens' },
  { date: 'TBD', event: 'Hackathon Begins' },
  { date: 'TBD', event: 'Winners Announced' },
];

const TimelineSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Timeline & Rules</h2>
      <div className="space-y-8 max-w-2xl mx-auto">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <div className="w-4 h-4 bg-neonPink rounded-full" />
            <div className="text-left">
              <p className="text-neonBlue">{event.date}</p>
              <p className="text-xl font-semibold">{event.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
