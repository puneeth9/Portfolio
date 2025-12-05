import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 90 },
        { name: "Redux", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "FastAPI", level: 75 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS (EC2, S3, SQS)", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Git", level: 90 },
      ]
    }
  ];

  const technologies = [
    "React", "Redux", "Node.js", "Java", "Python", "TypeScript",
    "JavaScript", "Express.js", "FastAPI", "REST APIs", "Microservices",
    "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
    "AWS", "Docker", "Kubernetes", "Jenkins", "Git", "Bash"
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>02</span>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.titleLine}></div>
        </div>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={styles.skillCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{category.icon}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
              </div>
              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techCloud}>
          <h3 className={styles.techTitle}>Technologies I Work With</h3>
          <div className={styles.techTags}>
            {technologies.map((tech, index) => (
              <span 
                key={tech} 
                className={styles.techTag}
                // style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

