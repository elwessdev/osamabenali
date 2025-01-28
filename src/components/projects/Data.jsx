import YoutubeClone from "../../assets/youtubeClone.jpeg";
import WhatsappClone from "../../assets/whatsapp.jpeg";
import Wessblog from "../../assets/wessblog.jpeg";
import SolarSystem from "../../assets/solarSystem.jpeg";
// import Project2 from "../../assets/project2.webp";
// import Project3 from "../../assets/project3.webp";


export const projectsData = [
    {
        category: "Web",
        title: "YouTube Clone",
        description: "This project is a YouTube clone built using ReactJS. It fetches video and channel data from RapidAPI and is designed as a learning exercise for first-year IT students.",
        image: YoutubeClone,
        code: "https://github.com/elwessdev/Youtube-clone",
        live: "https://osama-youtubeclone.vercel.app",
        tools: [
            "HTML",
            "SASS",
            "ReactJS",
            "RapidAPI"
        ]
    },
    {
        category: "Web",
        title: "WhatsApp Clone",
        description: "This project is a simple WhatsApp clone built with ReactJS and Firebase, designed to simulate basic messaging features.",
        image: WhatsappClone,
        code: "https://github.com/elwessdev/Whatsapp-clone",
        live: "https://osama-whatsappclone.vercel.app",
        tools: [
            "HTML",
            "SASS",
            "ReactJS",
            "Firebase"
        ]
    },
    {
        category: "Web",
        title: "WessBlog",
        description: "Comprehensive blog platform that offers various features for user interaction and content management.",
        image: Wessblog,
        code: "https://github.com/elwessdev/WessBlog",
        live: "https://wessblog.wuaze.com",
        tools: [
            "HTML",
            "SASS",
            "MVC Architecture",
            "PHP",
            "MySQL"
        ]
    },
    {
        category: "Web",
        title: "Solar System",
        description: "MERN stack application showcasing the solar system while emphasizing teamwork and development practices.",
        image: SolarSystem,
        code: "https://github.com/elwessdev/Solar-System",
        live: "https://systemesolaire.vercel.app/",
        tools: [
            "ReactJS",
            "Vite",
            "NodeJS",
            "Express",
            "MongoDB",
            "JWT",
        ]
    },
];

export const projectsNav = [
    {
        name: "All",
    },
    {
        name: "Web",
    },
];