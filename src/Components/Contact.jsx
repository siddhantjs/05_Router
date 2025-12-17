const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-900 px-4 py-16 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          Get In Touch 📩
        </h2>

        <form className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
