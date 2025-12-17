const Home = () => {
  return (
    <section className="min-h-screen bg-gray-500 flex items-center justify-center bg-gradient-r from-indigo-600 to-purple-600 px-4">
      <div className="max-w-5xl text-center text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Build Modern Web Experiences 🚀
        </h1>

        <p className="text-base sm:text-lg text-gray-200 mb-8">
          I create fast, responsive, and scalable web applications using
          <span className="font-semibold"> React, Tailwind CSS, and MERN Stack</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-200 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-indigo-600 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
