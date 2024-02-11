import React from 'react'
import './ProjectComp.css'
import pp1 from '../../assets/images/pp-1.png'
import { FaExternalLinkAlt } from "react-icons/fa";


const ProjectComp = () => {

  return (
    <div className="project-container" id='project'>
        <h1>Projects</h1>
        <div className='card-grid'>
            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='https://github.com/josephmiller360/weatherApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    <p>A simple weather app that uses the Open Weather API to display current and forecasted weather conditions for any city in the world.</p>
                    
                    <p>A weather forecast app built using Open Weather API and Google Maps API.</p>
                    
                </div>
            </div>
            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='https://github.com/josephmiller360/weatherApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    
                    <p>A simple weather app that uses the Open Weather API to display current and forecasted weather conditions for any city in the world.</p>
                    <p>A weather forecast app built using Open Weather API and Google Maps API.</p>
                    
                </div>
            </div>
            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='https://github.com/josephmiller360/weatherApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    
                    <p>A simple weather app that uses the Open Weather API to display current and forecasted weather conditions for any city in the world.</p>
                    <p>A weather forecast app built using Open Weather API and Google Maps API.</p>
                    
                </div>
            </div>
            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='https://github.com/josephmiller360/weatherApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    
                    <p>A simple weather app that uses the Open Weather API to display current and forecasted weather conditions for any city in the world.</p>
                    <p>A weather forecast app built using Open Weather API and Google Maps API.</p>
                    
                </div>
            </div>
            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='https://github.com/josephmiller360/weatherApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    
                    <p>A simple weather app that uses the Open Weather API to display current and forecasted weather conditions for any city in the world.</p>
                    <p>A weather forecast app built using Open Weather API and Google Maps API.</p>
                    
                </div>
            </div>
            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='https://github.com/josephmiller360/weatherApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    
                    <p>A simple weather app that uses the Open Weather API to display current and forecasted weather conditions for any city in the world.</p>
                    <p>A weather forecast app built using Open Weather API and Google Maps API.</p>
                    
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ProjectComp