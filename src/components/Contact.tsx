export default function Contact() {
    return (
      <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in working together or have a question? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300">youremail@example.com</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Your City, Country</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:youremail@example.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }
  