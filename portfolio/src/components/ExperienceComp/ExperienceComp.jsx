import React from "react";
import "./ExperienceComp.css";
const ExperienceComp = () => {

  
  const experiences = [
    {
        "title": "Software Developer",
        "company": "Freelancer",
        "years": "10/2023",
        "desc": [
            "Developed multiple projects like E-Commerce with admin panel and other functionalities for an organic products store",
            "Developed a user management system using MERN",
            "Delivered static and dynamic web applications to fulfill client requirements."
        ]
    },
    {
        "title": "Software Engineer - Intern",
        "company": "Institute of Telecommunication & Electrical Engineers (IETE)",
        "years": "09/2023",
        "desc": [
            "Served as the primary website developer lead, handling and updating the data to showcase the portfolio of the community.",
            "Managed the project keeping up with deadlines and scrutinizing project possibilities to deliver the best end results.",
            "Worked in the Frontend development part using frontend framework and libraries, along with deployment."
        ]
    },
    {
        "title": "Software Engineer - Intern",
        "company": "Eddyease",
        "years": "09/2023",
        "desc": [
            "As a backend developer intern at Eddyease, I collaborated remotely to develop a large-scale learner management system.",
            "I designed a scalable database schema, showcasing expertise in backend development and database architecture.",
            "The integration of NextJS enhanced the project's efficiency and underscored a commitment to modern web development tools."
        ]
    },
    {
        "title": "Business Analyst",
        "company": "Infologia Technologies",
        "years": "03/2023 to 08/2023",
        "desc": [
            "Defined key data points and data sources to track against measurable performance indicators and produce useful reports.",
            "Developed innovative, fact-based and achievable strategies and operating models based on evaluations.",
            "Conducted research on competitor marketing and digital content."
        ]
    },
    {
        "title": "Intern - Full stack Development",
        "company": "Infologia Technologies",
        "years": "01/2023 to 03/2023",
        "desc": [
            "Worked closely with systems analysts, engineers and programmers to understand limitations, develop capabilities and resolve software problems.",
            "Implemented Database management using SQL.",
            "Played an integral role in the team to develop the company website."
        ]
    }
];


  return (
    <div className="experience-container" id="experience">
      <h1>Experiences</h1>
      <div className="timeline">
        

        {experiences.map((experience, index) => (
          <div className="">
            
            <div className="content">
              
              <h3 key={index}>{experience.title} </h3>
              <h5>{experience.company}</h5>
              <p>{experience.years}</p>
              <ul>
                {experience.desc.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComp;
