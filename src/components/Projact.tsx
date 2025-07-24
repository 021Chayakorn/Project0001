import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import "./pro.css"; // ถ้าไฟล์ชื่อ Projects.css อยู่ในโฟลเดอร์เดียวกันg

// Import project images
import project1 from "/public/pro/projapan1.png";
import project2 from "/public/aaa/Logo1.png";
import project3 from "/public/aaa/Logo1.png";
import project4 from "/public/aaa/Logo1.png";
import project5 from "/public/aaa/Logo1.png";
import project6 from "/public/aaa/Logo1.png";
import project7 from "/public/aaa/Logo1.png";
import project8 from "/public/aaa/Logo1.png";
import project9 from "/public/aaa/Logo1.png";
import project10 from "/public/aaa/Logo1.png";

const projectsData = [
  {
    id: 1,
    title: "Web JAPEN",
    category: "Web Designer",
    description: "Incorporate Japanese minimalism into the UI/UX design to achieve a simple yet elegant look, aligned with the project’s concept.",
    image: project1,
    link: "#"
  },
  {
    id: 2,
    title: "Mobile App",
    category: "Mobile Design",
    description: "Beautiful mobile application with gradient design and smooth user interactions.",
    image: project2,
    link: "#"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Complete e-commerce solution with modern shopping experience and payment integration.",
    image: project3,
    link: "#"
  },
  {
    id: 4,
    title: "Brand Identity",
    category: "Branding",
    description: "Comprehensive brand identity design including logo, colors, and marketing materials.",
    image: project4,
    link: "#"
  },
  {
    id: 5,
    title: "React Portfolio",
    category: "Development",
    description: "Developer portfolio website built with React and modern development practices.",
    image: project5,
    link: "#"
  },
  {
    id: 6,
    title: "Social Media App",
    category: "Mobile Design",
    description: "Vibrant social media platform with engaging chat and messaging features.",
    image: project6,
    link: "#"
  },
  {
    id: 7,
    title: "Food Delivery",
    category: "App Design",
    description: "Restaurant ordering platform with intuitive interface and smooth ordering flow.",
    image: project7,
    link: "#"
  },
  {
    id: 8,
    title: "Fitness Tracker",
    category: "Health Tech",
    description: "Health analytics dashboard with comprehensive fitness tracking and wellness features.",
    image: project8,
    link: "#"
  }
];

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1 && !visibleCards.includes(index)) {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 100); // Staggered animation
          }
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
            ref={(el: HTMLDivElement | null) => {
  projectRefs.current[index] = el;
}}

              className={`project-card ${visibleCards.includes(index) ? 'project-card-visible' : ''}`}
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <ExternalLink className="project-link-icon" />
                    <span className="project-link-text">View Project</span>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title-card">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-footer">
          <button 
            className="view-all-button"
            onClick={() => console.log('View all projects')}
          >
            View All Projects
            <ExternalLink className="project-button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;