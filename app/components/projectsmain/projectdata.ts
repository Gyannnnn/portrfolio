type Project = {
  id: number;
  title: string;
  logo: string;
  displayLogo: string;
  description: string;
  dpdescription: string;
  teckstack: string[];
  githubLink: string;
  ongoing: boolean;
  featured: boolean;
};

const projectdata: Project[] = [
  {
    id: 1,
    title: "Portfolio App",
    logo: "/projects/portfolio.png",
    displayLogo: "/projects/portfolio/dp.png",
    description:
      "Welcome to my portfolio! Built with Next.js, ShadCN UI, TypeScript, and Tailwind CSS, this website is a reflection of modern web development principles combined with clean design aesthetics. It features a responsive layout for seamless browsing across all devices, a theme toggler for effortless switching between light and dark modes, and interactive audio controls that let you play or pause background audio. The user interface is designed to be visually captivating, ensuring an engaging experience. To make communication simple, the contact form is powered by NodeMailer, enabling you to send messages directly through the site. Explore my work and feel free to reach out with any opportunities or feedback!",
    dpdescription:
      "Welcome to my portfolio! Built with Next.js, ShadCN UI, TypeScript, and Tailwind CSS, it features a responsive design, theme toggler, interactive audio, and a sleek UI. The NodeMailer-powered contact form makes it easy to connect. Explore my work and share your thoughts!  ",
    teckstack: [
      "NextJs",
      "ShadcnUI",
      "TailwindCSS",
      "Typescript",
      "NodeMailer",
    ],
    githubLink: "https://github.com/Gyannnnn/portrfolio",
    ongoing: false,
    featured: true,
  },
  {
    id: 2,
    title: "StoreIt The ultimatate Storage Platform",
    logo: "",
    displayLogo: "/projects/storeit/dp.png",
    description:
      "Welcome to Soreit, the ultimate platform for secure file storage! Built with Next.js, TypeScript, ShadCN UI, Tailwind CSS, Node.js, and Express, Soreit offers a seamless experience for managing your files. With OTP-based authentication, your data is always safe and accessible only to you. The platform supports storage for videos, PDFs, images, and more, with advanced file filtration features to sort by size and type effortlessly. Designed with a clean and responsive UI, Soreit ensures smooth navigation across all devices. Whether for personal or professional use, it’s your one-stop solution for organized and secure file storage.",
    dpdescription:
      "Soreit is your go-to platform for secure file storage. Built with Next.js, TypeScript, and Node.js, it features OTP-based authentication, file filtration by size and type, and a sleek, responsive UI. Store your videos, PDFs, and images with ease and confidence!",
    teckstack: ["NextJs", "Typescript", "ShadcnUI", "Appwrite","TailwindCss"],
    githubLink: "https://github.com/Gyannnnn/Google_Drive_clone",
    ongoing: true,
    featured: false,
  },
  {
    id: 3,
    title: "Gyan Play ▶️ A Video Streaming Plaform",
    logo: "/projects/gyanplay/gyanplay.png",
    displayLogo: "/projects/gyanplay/dp.png",
    description:
      "Introducing GyanPlay, a sleek video streaming platform built with React, CSS, and JavaScript, powered by the YouTube API. GyanPlay lets you explore, search, and watch your favorite videos with ease. Designed for simplicity and performance, it offers a responsive interface that ensures a smooth experience across devices. Whether you’re diving into educational content or entertainment, GyanPlay is your gateway to endless video streaming.",
    dpdescription:
      "GyanPlay is a video streaming app powered by the YouTube API, built with React, CSS, and JavaScript. Explore and watch your favorite videos with a simple, responsive, and user-friendly interface.",
    teckstack: ["React.Js", "Javascript", "Css", "Google Api"],
    githubLink: "https://github.com/Gyannnnn/Gyan-Play",
    ongoing: false,
    featured: true,
  },
  {
    id: 4,
    title: "ChennaiMath.org",
    logo: "/projects/chennaimath/chennaimath.png",
    displayLogo: "/projects/chennaimath/dp.png",
    description:
      "Chennaimath.org is a fully responsive clone of the original Chennai Math website, built with React, CSS, and JavaScript. It captures the essence and functionality of the original site, providing a seamless user experience. Designed for clarity and simplicity, this clone ensures intuitive navigation and accessibility across all devices, making it easy to explore the content and resources of the Chennai Math website.",
    dpdescription:
      "Chennaimath.org is a responsive clone of the Chennai Math website, created with React, CSS, and JavaScript. It delivers a smooth, user-friendly experience with intuitive navigation and clean design.",
    teckstack: ["React.Js", "Css", "Javascript"],
    githubLink: "https://github.com/Gyannnnn/chennaimath.org",
    ongoing: false,
    featured: false,
  },
  {
    id: 5,
    title: "Taskify",
    logo: "/images/project5.jpg",
    displayLogo: "/projects/todo/todo.png",
    description:
      "This To-Do App is a feature-rich task management tool built with React, Tailwind CSS, Node.js, Express, MongoDB, and JavaScript. It allows you to create, update, and organize tasks effortlessly with a clean, responsive interface powered by Tailwind CSS. The backend, built with Node.js and MongoDB, ensures secure and efficient data handling, while the integration of Express provides seamless API interactions. Whether managing daily errands or long-term goals, this app simplifies your productivity journey.",
    dpdescription:
      "A To-Do App built with React, Tailwind CSS, Node.js, Express, MongoDB, and JavaScript. It offers a responsive UI and secure backend to help you manage tasks efficiently and stay productive.",
    teckstack: ["React.Js", "Node.Js", "Express.Js", "MongoDB","TailwindCss"],
    githubLink: "https://mern-stack-todoapp.vercel.app/",
    ongoing: false,
    featured: false,
  },
  {
    id: 6,
    title: "Photo Gallery",
    logo: "/projects/gallery/dp.png",
    displayLogo: "/projects/gallery/dp.png",
    description:
      "This Gallery App is a visually appealing platform showcasing a collection of images, including nature, mountains, rivers, and skies. Built with HTML, CSS, and JavaScript, it provides a smooth and interactive browsing experience. The app features a clean and responsive design, ensuring optimal viewing on all devices. Whether you're seeking inspiration or simply enjoying beautiful imagery, this gallery offers an engaging and aesthetic experience.",
    dpdescription:
      "A Gallery App featuring stunning images of nature, mountains, rivers, and skies. Built with HTML, CSS, and JavaScript, it offers a clean, responsive design for an enjoyable viewing experience.",
    teckstack: ["HTML", "Css", "Javascript"],
    githubLink: "https://github.com/Gyannnnn/Gallery",
    ongoing: false,
    featured: false,
  },
  {
    id: 7,
    title: "Portfolio With GSAP Scroll Trigger",
    logo: "/images/project7.jpg",
    displayLogo: "/projects/portfolio2/dp.png",
    description:
      "This Portfolio App is a captivating showcase of my work, built with HTML, CSS, and JavaScript, enhanced by GSAP for smooth animations and scroll triggers. With an eye-catching UI and stunning UX, the app leverages GSAP ScrollTrigger to create dynamic transitions and interactive elements. The design is clean and responsive, ensuring a seamless experience across devices while highlighting creativity and technical skill.",
    dpdescription:
      "A Portfolio App built with HTML, CSS, JavaScript, and GSAP ScrollTrigger. It features an eye-catching UI, stunning UX, and smooth animations for an engaging and responsive showcase of my work.",
    teckstack: ["HTML", "Css", "Javascript", "Gsap"],
    githubLink: "https://gyannnnn.github.io/Portfolio-/",
    ongoing: false,
    featured: false,
  },
  {   
    id: 8,
    title: "Weather Forecaster",
    logo: "/images/project8.jpg",
    displayLogo: "/projects/weather/dp.png",
    description:
      "This Weather App provides accurate weather information for locations worldwide, built using HTML, CSS, JavaScript, and a Weather API. Users can check details like temperature, wind speed, humidity, and visibility in real-time. Designed with a clean and responsive interface, the app ensures seamless usability across devices, making it an excellent tool for staying updated on weather conditions globally.",
    dpdescription:
      "A Weather App built with HTML, CSS, JavaScript, and a Weather API to deliver real-time data on temperature, wind speed, humidity, and visibility for locations worldwide. It features a clean and responsive design for easy use.",
    teckstack: ["HTML", "Css", "Javascript", "Weather API"],
    githubLink: "https://github.com/Gyannnnn/Weather-forecaster",
    ongoing: false,
    featured: false,
  },
];

export default projectdata;
