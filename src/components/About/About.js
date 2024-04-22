import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.leftContent}>
          <h1 className={styles.aboutContentHeading}>About</h1>
          <p className={styles.aboutContentSubheading}>From runway strides to captivating film roles, I transform seamlessly, embodying the essence of your brand with authenticity and grace. Whether you envision a sophisticated photoshoot or a dynamic product launch, I'm your partner in visual storytelling.</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.outerImage}>
            <img src="/star.svg" alt="about image" className={styles.starImage} />
            <img src="/about.png" alt="about image" className={styles.aboutImage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;