import React from 'react'
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectCard from '../../common/ProjectCard';
import freshBurger from '../../assets/fresh-burger.png'
import hipsster  from  '../../assets/hipsster.png'

function Projects() {
  return (
    <section  id='projects' className={styles.container} >
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
         <ProjectCard  src={viberr}
            h3="Viber"
           p="Movie App"
         /> 

         {/* <ProjectCard  src={freshBurger}
            h3="Fresh Burger"
           p="Restaurant App"
         />

         <ProjectCard  src={hipsster}
            h3="Hipster"
           p="Restaurant App"
         />*/}
        </div>
    </section>
  )
}

export default Projects;