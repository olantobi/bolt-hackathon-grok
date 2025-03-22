import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa';

// Judges data
const judges = [
  {
    id: 4,
    name: 'David Kwon',
    title: 'CTO at FutureTech Labs',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'David Kwon is a technology visionary with deep expertise in cloud computing, big data, and scalable systems. He has built engineering teams at multiple high-growth startups and is passionate about mentoring the next generation of technical talent.',
    expertise: ['Cloud Architecture', 'Distributed Systems', 'Technical Leadership'],
    achievements: [
      'Built systems handling 1B+ daily requests',
      'Open source contributor',
      'Engineering excellence award winner',
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 5,
    name: 'Olivia Martinez',
    title: 'Design Director at CreativeX',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Olivia Martinez is an award-winning designer who combines creativity with strategic thinking to build brand experiences that resonate. Her work spans digital product design, branding, and interactive installations for global brands.',
    expertise: ['UX/UI Design', 'Brand Identity', 'Interactive Design'],
    achievements: [
      'Multiple design award winner',
      'Featured in Design Quarterly',
      'Speaker at major design conferences',
    ],
    social: {
      twitter: '#',
      linkedin: '#',
      dribbble: '#',
    },
  },
  {
    id: 6,
    name: 'Raj Mehta',
    title: 'General Partner at Tech Ventures',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    bio: 'Raj Mehta is a seasoned investor with a keen eye for disruptive technologies. At Tech Ventures, he leads investments in early-stage startups across AI, blockchain, and SaaS. He has backed several unicorn companies in their early days.',
    expertise: ['Venture Capital', 'Startup Scaling', 'Market Strategy'],
    achievements: [
      'Invested in 5 unicorn startups',
      'Board member of multiple tech companies',
      'Former successful founder with exit',
    ],
    social: {
      twitter: '#',
      linkedin: '#',
    },
  },
];

// Variants for card fade-in animation
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
    },
  }),
};

// Variants for bio overlay slide-up animation
const bioOverlayVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 0.9, transition: { duration: 0.5 } },
};

const JudgesSection = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8">Meet the Judges</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {judges.map((judge, index) => (
          <motion.div
            key={judge.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="relative w-80 bg-darkBg/50 border border-neonBlue rounded-lg overflow-hidden"
          >
            {/* Judge Image */}
            <div className="h-96">
              <img
                src={judge.image}
                alt={judge.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Judge Name and Title (Always Visible) */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-neonPink">{judge.name}</h3>
              <p className="text-neonBlue">{judge.title}</p>
            </div>

            {/* Bio Overlay (Visible on Hover) */}
            <motion.div
              className="absolute inset-0 bg-darkBg/90 p-4 overflow-y-auto"
              initial="hidden"
              whileHover="visible"
              variants={bioOverlayVariants}
            >
              <h3 className="text-xl font-semibold text-neonPink">{judge.name}</h3>
              <p className="text-neonBlue">{judge.title}</p>
              <p className="text-white text-sm mt-2">{judge.bio}</p>

              {/* Expertise */}
              <div className="mt-2">
                <h4 className="text-neonBlue font-semibold">Expertise</h4>
                <ul className="text-white text-sm list-disc list-inside">
                  {judge.expertise.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mt-2">
                <h4 className="text-neonBlue font-semibold">Achievements</h4>
                <ul className="text-white text-sm list-disc list-inside">
                  {judge.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="mt-4 flex justify-center space-x-4">
                {judge.social.twitter && (
                  <a
                    href={judge.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neonBlue hover:text-neonPink transition"
                    aria-label={`Follow ${judge.name} on Twitter`}
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {judge.social.linkedin && (
                  <a
                    href={judge.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neonBlue hover:text-neonPink transition"
                    aria-label={`Follow ${judge.name} on LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                )}
                {judge.social.github && (
                  <a
                    href={judge.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neonBlue hover:text-neonPink transition"
                    aria-label={`Follow ${judge.name} on GitHub`}
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {judge.social.dribbble && (
                  <a
                    href={judge.social.dribbble}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neonBlue hover:text-neonPink transition"
                    aria-label={`Follow ${judge.name} on Dribbble`}
                  >
                    <FaDribbble size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JudgesSection;
