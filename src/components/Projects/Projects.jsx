import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Management Module",
      description: "Developed a comprehensive React + Redux task management module featuring task creation, tracking, and real-time notifications. This module increased user engagement by 35% at Edfora.",
      tags: ["React", "Redux", "Node.js", "Real-time"],
      featured: true
    },
    {
      id: 2,
      title: "High-Performance Analytics System",
      description: "Reduced analytics API latency from 3s to 80ms by architecting scheduled batch processes with Amazon SQS. Served 200K+ active users with optimized caching strategies.",
      tags: ["AWS SQS", "Node.js", "Redis", "Caching"],
      featured: true
    },
    {
      id: 3,
      title: "Job Application Platform",
      description: "Developed a full-stack platform with 2 user roles and 10+ APIs, enabling recruiters to post jobs and applicants to apply. Supported 50 concurrent users with optimized database queries.",
      tags: ["Full Stack", "REST APIs", "PostgreSQL", "Java"],
      featured: true
    },
    {
      id: 4,
      title: "Golden-Hit Benchmarking System",
      description: "Led a 4-member team to build a benchmarking system that cut assessment time by 70% while ensuring accuracy. Implemented automated testing and validation pipelines.",
      tags: ["Team Lead", "Python", "Testing", "Automation"],
      featured: false
    },
    {
      id: 5,
      title: "Custom Unix Shell",
      description: "Implemented a bash-like shell supporting 15+ commands, I/O redirection, piping, and signal handling using POSIX system calls. Built from scratch in C.",
      tags: ["C", "POSIX", "System Programming", "Unix"],
      featured: false
    },
    {
      id: 6,
      title: "BFS Maze Generator & Game",
      description: "Built a BFS-based maze generator with guaranteed solvable paths and keyboard-controlled gameplay. Features procedural generation and real-time pathfinding visualization.",
      tags: ["Algorithms", "BFS", "Game Dev", "Python"],
      featured: false
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>04</span>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <span className={styles.projectFolder}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                  </span>
                  {project.featured && <span className={styles.featuredBadge}>Featured</span>}
                </div>
                
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.moreProjects}>
          <a 
            href="https://github.com/puneeth9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.moreBtn}
          >
            View More on GitHub
            <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

