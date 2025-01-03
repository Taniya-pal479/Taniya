 import React from 'react'
 
 function ProjectCard({src, link, h3,p}) {
   return (
    <a 
            href='https://www.shutterstock.com/image-illustration/not-available-red-rubber-stamp-over-586791809'
             
            >
            <img className="hover" src={src} alt={`${h3} logo`}></img>
              <h3>{h3}</h3> 
              <p>{p}</p>
            </a>
   )
 }
 
 export default ProjectCard