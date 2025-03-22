import { motion } from 'framer-motion';

// Array of sponsor logos (placeholders for actual images)
const sponsors = [
  { name: 'Google', logo: <img src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google Logo" className="h-12" /> },  
  { name: 'Nvidia', logo: <img src="https://static.cdnlogo.com/logos/n/48/nvidia-image.svg" alt="Nvidia Logo" className="h-12" /> },  
  { name: 'TikTok', logo: <img src="https://static.cdnlogo.com/logos/t/60/tiktok.svg" alt="TikTok Logo" className="h-12" /> },
  { name: 'Oracle', logo: <img src="https://static.cdnlogo.com/logos/o/94/oracle.svg" alt="Oracle Logo" className="h-12" /> },
  { name: 'DeepSeek', logo: <img src="https://static.cdnlogo.com/logos/d/9/deepseek.svg" alt="DeepSeek Logo" className="h-12" /> },
  { name: 'Cisco', logo: <img src="https://static.cdnlogo.com/logos/c/56/cisco.svg" alt="Cisco Logo" className="h-12" /> },
  { name: 'Tesla', logo: <img src="https://static.cdnlogo.com/logos/t/34/tesla.svg" alt="Tesla Logo" className="h-12" /> },
  { name: 'Bluesky', logo: <img src="https://static.cdnlogo.com/logos/b/12/bluesky.svg" alt="Bluesky Logo" className="h-12" /> },
  { name: 'Salesforce', logo: <img src="https://static.cdnlogo.com/logos/s/3/salesforce.svg" alt="Salesforce Logo" className="h-12" /> },
  { name: 'Sony', logo: <img src="https://static.cdnlogo.com/logos/s/44/sony.svg" alt="Sony Logo" className="h-12" /> },
  { name: 'Anthropic', logo: <img src="https://static.cdnlogo.com/logos/a/68/anthropic.svg" alt="Anthropic Logo" className="h-12" /> },
  { name: 'Shopify', logo: <img src="https://static.cdnlogo.com/logos/s/88/shopify.svg" alt="Shopify Logo" className="h-12" /> },
  { name: 'LinkedIn', logo: <img src="https://static.cdnlogo.com/logos/l/74/linkedin.svg" alt="Linkedin Logo" className="h-12" /> },
  { name: 'Paypal', logo: <img src="https://static.cdnlogo.com/logos/p/41/paypal.svg" alt="Paypal Logo" className="h-12" /> },
  { name: 'AirBnb', logo: <img src="https://static.cdnlogo.com/logos/a/94/airbnb.svg" alt="AirBnb Logo" className="h-12" /> },
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
