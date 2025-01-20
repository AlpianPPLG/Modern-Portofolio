import React, { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/img/Porto1.png",
      description: "Modern e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Travel Booking App",
      category: "Mobile App",
      image: "/img/Porto2.png",
      description: "Cross-platform mobile app for travel bookings",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/img/Porto3.png",
      description: "Personal portfolio website with modern design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/img/Porto4.png",
      description: "Personal portfolio website with modern design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/img/Porto5.png",
      description: "Personal portfolio website with modern design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      category: "UI/UX Design",
      image: "/img/Porto6.png",
      description: "Personal portfolio website with modern design",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Featured Projects
          </p>
          <div className="mt-4 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Showcasing some of my best work and projects
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent to-black/80 transition-opacity duration-300 ${
                    hoveredItem === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-blue-400 mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {item.description}
                    </p>
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-blue-500/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <a
                        href={item.demoLink}
                        className="flex items-center px-3 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition duration-300"
                      >
                        <Eye className="w-4 h-4 mr-1.5" />
                        Live Demo
                      </a>
                      <a
                        href={item.githubLink}
                        className="flex items-center px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition duration-300"
                      >
                        <Github className="w-4 h-4 mr-1.5" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 -mr-1 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
