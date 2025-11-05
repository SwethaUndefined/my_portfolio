import React from "react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import Title from "./Title";

const Project = [
 {
  id: 1,
  image:
    "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
  title: "Analytics Dashboard",
  description:
    "A static dashboard showcasing active users, platform performance, and total revenue using charts and cards. Designed for UI/UX and visualization purposes.",
  url: "https://eclectic-daifuku-b562ed.netlify.app/",
},
  {
    id: 2,
    image:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    title: "Referral Application",
    description:
      "Referral web application is developed using MERN stack and implemented a login functionality",

    url: "https://poetic-youtiao-6a1053.netlify.app/",
  },
  {
    id: 3,
    image:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    title: "Blog Web Application",
    description:
      "Blog web application is developed using MERN stack and implemented a login functionality, Email Verification and Reset Password using Node Mailer",
    Githuburl: "https://github.com/SwethaUndefined/Blog-Application",
  },
  {
    id: 4,
    image:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    title: "Hotel Booking Web Application",
    description:
      "Hotel Booking website is developed using HTML5, CSS3, Javascript.",
    url: "https://remarkable-jalebi-fa22a4.netlify.app/",
  },
  {
    id: 5,
    image:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    title: "Agent Desktop",
    description:
      "Led the development of Agent Desktop, a SaaS application for seamless customer-agent interactions via email, chat, and call features using Amazon Connect. Integrated multi-channel communication and a robust task management system, enhancing workflow efficiency and enabling real-time supervision and monitoring for quality assurance.",
  },
  {
    id: 6,
    image:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    title: "Clofus",
    description:
      "Developed Clofus, an Angular-based project showcasing frontend proficiency,featuring secure sign-in/sign-up, topic creation with secure PDF uploads, and real-time chat with instant answers, including PDF to base64 encoding for backend compatibility.",
  },
  {
    id: 7,
    image:
      "https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png",
    title: "Bike Assembly Application",
    description:
    "The Bike Assembly application, built with the MERN stack (MongoDB, Express.js, React, Node.js), includes secure login functionality, allowing users to create accounts and sign in. Users can select a bike model for assembly from a detailed selection interface. The assembly page features an interactive progress mechanism to guide users through the bike assembly process.",
    url: "https://resplendent-palmier-1a0fa5.netlify.app/bikes",
  },
];

const Projects = () => {
  const { projectRef } = useContext(GlobalContext);

  return (
    <section className="px-5 lg:px-10 py-4" id="project" ref={projectRef}>
      <h2 className="text-3xl text-center">Projects</h2>
      <Title name="What I Build" />
      <div className="grid grid-cols-1 my-5 md:grid-cols-2 gap-5 lg:grid-cols-3">
      {Project.map((project) => (
    <div className='shadow-md rounded-md'
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        key={project.id}>
        <img className='rounded-t-md' src={project.image} alt={project.title} />
        <div className='p-5'>
            <h4 className='py-2 font-semibold text-xl'>{project.title}</h4>
            <p className='text-lg'>{project.description}</p>
            {project.url && <a href={project.url}> <button className='bg-blue-600 text-white rounded-sm px-3 mt-2 p-1'>Know more</button></a>}
            {project.Githuburl && <a href={project.Githuburl}><button className='bg-blue-600 text-white rounded-sm px-3 mt-2 p-1'>GitHub</button></a>}
        </div>
    </div>
))}

      </div>
    </section>
  );
};

export default Projects;
