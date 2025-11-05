import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

import SkillCard from './SkillCard';
import Title from "./Title";

const Skills = [
    {
        id: 1,
        name: "HTML",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id: 2,
        name: "CSS",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    },
    {
        id: 3,
        name: "Javascript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id: 4,
        name: "Ant",
        image: "https://static-00.iconduck.com/assets.00/ant-design-icon-2048x2046-dl3neb73.png"
    },
    {
        id: 5,
        name: "React",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
    },
    {
        id: 6,
        name: "Material UI",
        image: "https://v3.mui.com/static/brand.png"
    },
    {
        id: 8,
        name: "Node",
        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
    },
    {
        id: 9,
        name: "Express",
        image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
    },
    {
        id: 11,
        name: "MongoDB",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
    },
    {
        id: 12,
        name: "MySQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/744px-Database-mysql.svg.png"
    },
    {
        id: 12,
        name: "AWS Connect",
        image: "https://image.pngaaa.com/485/3822485-middle.png"
    },
    {
        id: 17,
        name: "Bootstrap",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
    },
    {
        id: 19,
        name: "Tailwind",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
    },
    {
        id: 20,
        name: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
    },
    {
        id: 21,
        name: "Netlify",
        image: "https://cdn.iconscout.com/icon/free/png-64/netlify-3628357-3032192.png"
    },
    {
        id: 22,
        name: "Heroku",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg"
    },
     {
        id: 23,
        name: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    }
]

const About = () => {
    const { aboutRef } = useContext(GlobalContext);

    return (
        <section className='px-5 lg:px-10 py-4' id='about' ref={aboutRef}>
            <Title name="About Me" />
            <p className='text-lg pb-5'>
                My name is Swetha Ragunathan and I am a software engineer specialized in fullstack developing.
                I started web development in a strong knowledge and expertise in this field over time.
                I want this page to be a "not-so-formal" description of who I am,
                my main skills and why I think I am a great software engineer and why you should hire me.
                For a more formal introduction, you can download my résumé.
            </p>
            <Title name="Technologies and Tools" />
            <p className='text-lg pb-5'>
                Using a combination of cutting-edge technologies and reliable open-source software I build user-focused,
                performance and responsive websites for smartphones, tablets, and desktops.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {Skills.map((skill) => (
                    <SkillCard data={skill} key={skill.id} />
                ))}
            </div>
        </section>
    )
}

export default About;