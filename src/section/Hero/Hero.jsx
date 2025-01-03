  import styles from './HeroStyles.module.css';
 import heroImg from '../../assets/img2.webp' ;
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import LinkedinLight from '../../assets/Linkedin-light.svg';
import LinkedinDark from '../../assets/Linkedin-dark.svg';
import CV from '../../assets/tcv.pdf';
import { useTheme } from '../../common/ThemeContext.jsx';

function Hero() {
  const {theme, toggleTheme}= useTheme();

const themeIcon = theme==='light' ? sun : moon ;
const twitterIcon = theme === 'light'? twitterLight:twitterDark;
const githubIcon = theme==='light' ? githubLight : githubDark ;
const LinkedinIcon = theme==='light' ? LinkedinLight : LinkedinDark ;


  return <section id="hero" className={styles.container}>
  <div className={styles.colorModeContainer}>
    <img className={styles.hero} 
    src={heroImg}
     alt="Profile picture of Taniya pal"
      />
      <img className={styles.colorMode}
      src={themeIcon}
      alt='Color mode'
      onClick={toggleTheme}
      />

  </div>

  <div className={styles.info}>
    <h1> 
     Taniya
    <br/>
     Pal
     </h1>
     <h2>Frontend Developer</h2>
     <span>
        <a href="https://x.com/taniyapal811084" target='_blank'>
            <img src={twitterIcon} alt='Twitter icon'/>
        </a>
        <a href="https://github.com/github-login" target='_blank'>
            <img src={githubIcon} alt='github icon'/>
        </a>
        <a href="https://www.linkedin.com/in/taniya-pal-8b4302257/" target='_blank'>
            <img src={LinkedinIcon} alt='Linkedin icon'/>
        </a>
     </span>
     <p className={styles.description}>With a passion for developing morden React web apps for getting experianced.</p>
     <a href={CV}>
        <button className='hover' download>
            Resume
        </button>
     </a>
  </div>

  </section>
}

export default Hero