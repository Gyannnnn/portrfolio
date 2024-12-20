
type Project = {
    id: number;
    title: string;
    logo: string;
    description: string;
    teckstack: string[];
    githubLink:string
  };


const projectdata:Project[] = [
    {
        id:1,
        title: "Project 1",
        logo: "/images/experiance/ecel.png",
        description: "A comprehensive full-stack web application designed to manage tasks, track progress, and boost team productivity using cutting-edge technologies.",
        teckstack: ["Node.js", "Express.js", "MongoDB", "TypeScript"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {
        id:2,
        title: "Project 2",
        logo: "/images/project2.jpg",
        description: "A real-time chat application enabling seamless communication between users, featuring a responsive interface and WebSocket integration for instant updates.",
        teckstack: ["React", "Socket.IO", "Node.js", "Firebase"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {
        id:3,
        title: "Project 3",
        logo: "/images/project3.jpg",
        description: "An innovative task management app that helps users organize, prioritize, and complete their daily goals with advanced reminders and analytics.",
        teckstack: ["Node.js", "Express.js", "PostgreSQL", "Tailwind CSS"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {   
        id:4,
        title: "Project 4",
        logo: "/images/project4.jpg",
        description: "A fully-functional e-commerce platform offering an intuitive shopping experience, integrated payment gateway, and secure checkout options for users.",
        teckstack: ["Next.js", "Stripe API", "MongoDB", "TypeScript"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {
        id:5,
        title: "Project 5",
        logo: "/images/project5.jpg",
        description: "A fitness tracker app designed to monitor physical activity, set goals, and encourage healthy habits through gamified challenges and leaderboards.",
        teckstack: ["React Native", "Expo", "Firebase", "TypeScript"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {
        id:6,
        title: "Project 6",
        logo: "/images/project6.jpg",
        description: "An AI-powered blog suggestion tool that leverages natural language processing to recommend engaging topics tailored to user preferences and industry trends.",
        teckstack: ["Python", "Flask", "OpenAI API", "MongoDB"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {
        id:7,
        title: "Project 7",
        logo: "/images/project7.jpg",
        description: "A user-friendly university portal enabling students to access previous year question papers and notes, fostering better preparation and collaboration.",
        teckstack: ["Next.js", "Express.js", "MongoDB", "ShadCN UI"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
    {
        id:8,
        title: "Project 8",
        logo: "/images/project8.jpg",
        description: "A weather forecast app that provides accurate real-time weather updates, future forecasts, and geolocation features to enhance user convenience.",
        teckstack: ["React", "OpenWeather API", "Node.js", "Tailwind CSS"],
        githubLink:"https://github.com/Gyannnnn/portrfolio"
    },
   
];

export default projectdata;
