import styles from './Experience.module.css';

const Experience = () => {
  const featuredExperience = {
    company: "Edfora",
    role: "Software Engineer",
    duration: "Jul 2023 - Feb 2025",
    achievements: [
      "Architected and implemented report generation with Amazon SQS, improving retrieval speed by 55% — designed asynchronous processing and modular service integration to reduce API load and enhance scalability.",
      "Processed 500k+ student records to surface peer improvement journeys, enabling personalized dashboards that drove a ~15–20% uplift in admissions.",
      "Integrated Zoom link creation into workflows, reducing setup time and enabling 10k+ students and 1k+ teachers to seamlessly access live classes.",
      "Reduced analytics API latency from 3s to 80ms by moving real-time calculations to scheduled batch processes — leveraged background workers, cron jobs, and caching for 200K+ active users.",
      "Spearheaded user journey mapping & behavioral tracking, boosting engagement by 25%.",
      "Developed a React + Redux task management module (creation, tracking, notifications), increasing engagement by 35%."
    ]
  };

  const otherExperiences = [
    {
      company: "Wilya",
      role: "Software Engineering Intern",
      duration: "Mar 2023 - May 2023",
      description: "Built and launched a React + Storybook design system, cutting UI development time by 40% and ensuring consistency across 50+ reusable components."
    },
    {
      company: "Centime Inc",
      role: "Software Engineering Intern",
      duration: "May 2022 - Jul 2022",
      description: "Developed and deployed a Java Spring Boot microservice integrating configurable metadata, resolving 100+ user data analysis issues and streamlining backend workflows."
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Featured Experience - Edfora */}
        <div className={styles.featuredCard}>
          <div className={styles.featuredBadge}>
            <span className={styles.star}>★</span>
            Featured Role
          </div>
          <div className={styles.featuredHeader}>
            <div className={styles.companyInfo}>
              <h3 className={styles.companyName}>{featuredExperience.company}</h3>
              <span className={styles.role}>{featuredExperience.role}</span>
            </div>
            <span className={styles.duration}>{featuredExperience.duration}</span>
          </div>
          <ul className={styles.achievementsList}>
            {featuredExperience.achievements.map((achievement, index) => (
              <li key={index} className={styles.achievementItem}>
                <span className={styles.bullet}>▹</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Experiences - Side by Side */}
        <div className={styles.otherExperiences}>
          {otherExperiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <h4 className={styles.cardCompany}>{exp.company}</h4>
                <span className={styles.cardDuration}>{exp.duration}</span>
              </div>
              <span className={styles.cardRole}>{exp.role}</span>
              <p className={styles.cardDescription}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

