type Project = {
    title: string;
    description: string;
    link: string;
    technologies: string[];
  };
  
  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
      link: '#',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AOS'],
    },
    {
      title: 'Design System',
      description: 'Reusable design components in Figma & React, ensuring consistency across all digital products.',
      link: '#',
      technologies: ['Figma', 'React', 'Storybook', 'CSS'],
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      link: '#',
      technologies: ['Vue.js', 'Firebase', 'PWA', 'WebSocket'],
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in design and development.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={project.link}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project 
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  