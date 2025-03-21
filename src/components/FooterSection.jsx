const FooterSection = () => {
  return (
    <footer className="py-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Join the World’s Largest Hackathon</h2>
      <button className="bg-neonPink text-darkBg px-6 py-3 rounded-full text-lg font-semibold hover:bg-neonBlue transition">
        Register Now
      </button>
      <div className="mt-4 space-x-4">
        <a href="https://x.com/boltdotnew" className="text-neonBlue hover:text-neonPink">X</a>
        <a href="https://www.linkedin.com/company/stackblitz" className="text-neonBlue hover:text-neonPink">LinkedIn</a>
        <a href="https://discord.com/invite/stackblitz" className="text-neonBlue hover:text-neonPink">Discord</a>
      </div>
    </footer>
  );
};

export default FooterSection;
