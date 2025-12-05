import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.greeting}>Hello, I'm</span>
          <h1 className={styles.name}>
            Puneeth Sai
            <span className={styles.highlight}>.</span>
          </h1>
          <div className={styles.titleWrapper}>
            <span className={styles.title}>
              {displayText}
              <span className={styles.cursor}>|</span>
            </span>
          </div>
          <p className={styles.description}>
            US Citizen with 2+ years of experience building scalable web applications 
            serving 1M+ users. Proven ability to improve performance (3s → 80ms) and 
            mentor junior developers at fast-paced startups.
          </p>
          
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
              <svg className={styles.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              Get In Touch
            </a>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1M+</span>
              <span className={styles.statLabel}>Users Served</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>3</span>
              <span className={styles.statLabel}>Companies</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot} style={{background: '#ff5f57'}}></span>
              <span className={styles.dot} style={{background: '#febc2e'}}></span>
              <span className={styles.dot} style={{background: '#28c840'}}></span>
            </div>
            <pre className={styles.code}>
              <code>
{`const developer = {
  name: "Puneeth Sai",
  role: "Full Stack Dev",
  skills: [
    "React", "Node.js",
    "Java", "Python", "AWS"
  ],
  experience: "2+ years",
  
  buildScalableApps: () => {
    return "1M+ users served";
  }
};`}
              </code>
            </pre>
          </div>
        </div>
      </div>
      
      <a href="#about" className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </a>
    </section>
  );
};

export default Hero;

