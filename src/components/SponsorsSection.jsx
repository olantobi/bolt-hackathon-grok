import { motion } from 'framer-motion';

// Array of sponsor logos (placeholders for actual images)
const sponsors = [
  { name: 'Apple', logo: '[Apple Logo]' },
  { name: 'Microsoft', logo: '[Microsoft Logo]' },
  { name: 'Google', logo: '[Google Logo]' },
  { name: 'Amazon', logo: '[Amazon Logo]' },
  { name: 'Intel', logo: '[Intel Logo]' },
  { name: 'IBM', logo: '[IBM Logo]' },
  { name: 'Dell', logo: '[Dell Logo]' },
  { name: 'PlayStation', logo: '[PlayStation Logo]' },
  { name: 'Firefox', logo: '[Firefox Logo]' },
  { name: 'Evernote', logo: '[Evernote Logo]' },
  { name: 'Slack', logo: '[Slack Logo]' },
  { name: 'Dropbox', logo: '[Dropbox Logo]' },
  { name: 'GitLab', logo: '[GitLab Logo]' },
  { name: 'Twitch', logo: '[Twitch Logo]' },
  { name: 'OpenSea', logo: '[OpenSea Logo]' },
  { name: 'Rippling', logo: '[Rippling Logo]' },
];

// Duplicate the sponsors array to create a seamless loop
const duplicatedSponsors = [...sponsors, ...sponsors];

const SponsorsSection = () => {
  return (
    <section className="py-16 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-8">Our Sponsors</h2>
      <div className="relative">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20, // Adjust speed of scrolling
              ease: 'linear',
            },
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <motion.div
              key={`${sponsor.name}-${index}`} // Unique key for each item
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 mx-4 p-4 bg-darkBg/50 border border-neonBlue rounded-lg text-neonPink"
              style={{ minWidth: '150px', height: '100px' }} // Adjust size as needed
            >
              <div className="flex items-center justify-center h-full">
                {sponsor.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
