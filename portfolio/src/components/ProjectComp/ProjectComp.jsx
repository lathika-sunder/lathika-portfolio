import React from 'react';
import './ProjectComp.css';
import pp1 from '../../assets/images/pp-1.png';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectComp = () => {
  return (
    <div className="project-container" id='project'>
        <h1>Projects</h1>
        <div className='card-grid'>
            <div className='card'>
                <img src={pp1} alt='Nila CRM' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Nila CRM</h3>
                    <p>An advanced Customer Relationship Management system built using the MERN stack along with HTTP and Redis for robust performance and scalability.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp1} alt='MGR E-Commerce' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>MGR E-Commerce</h3>
                    <p>An extensive E-Commerce platform crafted with the MERN stack, leveraging RESTful architecture for efficient data handling and smooth user experiences.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp1} alt='User Management System' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>User Management System</h3>
                    <p>A comprehensive User Management System powered by MERN stack and Material-UI, implementing RESTful APIs for seamless user interaction and control.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp1} alt='React Flow Family Tree' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>React Flow Family Tree</h3>
                    <p>A dynamic Family Tree application developed with the MERN stack and ReactFlow library, enabling intuitive visualization and navigation of familial relationships.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp1} alt='Notes Application' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Notes Application</h3>
                    <p>An interactive Notes Application built on the MEEN stack with Google Auth integration for secure user authentication and seamless note-taking experiences.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp1} alt='Weather App' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Weather App</h3>
                    <p>An elegant Weather App developed with ReactJS, offering real-time weather updates and forecasts using the Open Weather API for accurate data retrieval.</p>
                </div>
            </div>

            {/* <div className='card'>
                <img src={pp1} alt='Fun Challenges' />
                <a href='#' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Fun Challenges</h3>
                    <p>A collection of engaging and entertaining challenges crafted with HTML, CSS, and JavaScript to stimulate creativity and problem-solving skills.</p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default ProjectComp;
