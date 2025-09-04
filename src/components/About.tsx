export default function About() {
    return (
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto bg-white dark:bg-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software designer with a love for creating intuitive and engaging digital experiences. 
              I specialize in UX/UI design, prototyping, and full-stack development.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              With a background in both design and development, I bring a unique perspective to every project, 
              ensuring that beautiful designs are not just visually appealing but also functional and user-friendly.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Figma', 'Tailwind CSS', 'Node.js'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 text-center">
            <div className="w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-white font-bold">JD</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">John Doe</h3>
            <p className="text-gray-600 dark:text-gray-300">Software Designer & Developer</p>
          </div>
        </div>
      </section>
    );
  }