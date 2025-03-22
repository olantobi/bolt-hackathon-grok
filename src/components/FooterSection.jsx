import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Variants for the modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const FooterSection = () => {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  // Handle form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Registration successful:', formData);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '' });
          setIsModalOpen(false);
        }, 2000); // Close after 2 seconds
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <footer className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Join the World’s Largest Hackathon</h2>
      <button className="bg-neonPink text-darkBg px-6 py-3 rounded-full text-lg font-semibold hover:bg-neonBlue transition"
        onClick={() => setIsModalOpen(true)}>
        Register Now
      </button>
      <div className="mt-4 space-x-4">
        <a href="https://x.com/boltdotnew" className="text-neonBlue hover:text-neonPink">X</a>
        <a href="https://www.linkedin.com/company/stackblitz" className="text-neonBlue hover:text-neonPink">LinkedIn</a>
        <a href="https://discord.com/invite/stackblitz" className="text-neonBlue hover:text-neonPink">Discord</a>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-darkBg p-6 rounded-lg border-2 border-neonBlue w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-neonPink hover:text-neonBlue"
              >
                ✕
              </button>

              {/* Modal Content */}
              {isSubmitted ?  (
                <p className="text-neonBlue text-lg">Registration successful! See you at the hackathon! 🎉 </p>
              ) : (
              <>
              <h2 className="text-2xl md:text-3xl font-bold text-neonPink mb-4">
                Register for the Hackathon
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-neonBlue mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded bg-darkBg/50 border border-neonBlue text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-neonBlue mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded bg-darkBg/50 border border-neonBlue text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-neonPink text-darkBg py-2 rounded-full font-semibold hover:bg-neonBlue transition"
                >
                  Submit
                </button>
              </form>
              </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default FooterSection;
