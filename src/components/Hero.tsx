export default function Hero() {
    return (
      <section 
        className="min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A Software Designer crafting beautiful experiences that bridge the gap between design and development.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    );
  }