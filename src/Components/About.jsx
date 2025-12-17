const About = () => {
  return (
    <section className="min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          About Me 👨‍💻
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              Hi, I'm <span className="font-semibold">Siddhant</span>, a passionate
              Frontend & MERN Stack Developer. I love building clean and
              interactive user interfaces that deliver great user experiences.
            </p>

            <p className="text-gray-700 text-base sm:text-lg">
              Currently, I am focusing on React, Redux Toolkit, Node.js,
              MongoDB, and Tailwind CSS while preparing for software developer
              interviews.
            </p>
          </div>

          {/* Right Content */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind CSS",
                "Node.js",
                "MongoDB",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
