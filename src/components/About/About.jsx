import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.titleLine}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBorder}></div>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <span>PS</span>
              </div>
            </div>
            <div className={styles.floatingBadge}>
              <span className={styles.badgeIcon}>&#x1F680;</span>
              <span>Open to Work</span>
            </div>
          </div>
          
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>
              Building Scalable Apps with 
              <span className={styles.highlight}> Passion</span> & 
              <span className={styles.highlight}> Precision</span>
            </h3>
            
            <p className={styles.infoParagraph}>
              I'm a Full Stack Developer with 2+ years of experience at startups, 
              specializing in building scalable web applications using React, Node.js, 
              Java, Python, and AWS. I've contributed to products serving over 1 million users.
            </p>
            
            <p className={styles.infoParagraph}>
              My expertise includes architecting microservices, optimizing performance 
              (reduced API latency from 3s to 80ms), and mentoring junior developers. 
              I thrive in fast-paced environments where I can solve complex problems 
              and deliver impactful solutions.
            </p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Name</span>
                <span className={styles.infoValue}>Puneeth Sai Tumbalabeedu</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>United States</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>puneeth.sai2803@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status</span>
                <span className={styles.infoValue}>US Citizen - No Sponsorship</span>
              </div>
            </div>
            
            <a href="#contact" className={styles.contactBtn}>
              Let's Connect
              <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

