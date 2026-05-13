import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const resumeData = {
    experience: [
        {
            period: "Jan 2025 - present",
            role: "Unity Developer",
            company: "Heimo Games",
            description: [
                "Designed and maintained scalable, high-quality user interfaces for multiple game projects using Unity UI Toolkit and AppUI (React-like framework), building flexible and reusable components to ensure visual consistency and efficient development.",
                "Developed intuitive screen layouts and interactive elements aligned with UX best practices, improving navigation flow and enhancing overall user satisfaction.",
                "Integrated UI systems with backend solutions such as Content Backend Services (CBS), enabling real-time content updates and significantly reducing manual data handling.",
                "Collaborated closely with gameplay engineers to deliver UI-driven gameplay features, ensuring seamless synchronization between game logic and interface.",
                "Implemented fluid UI animations with UI Toolkit, enriching the player experience and adding smooth, engaging transitions.",
                "Participated in code reviews and applied targeted optimization strategies, achieving better performance and cross-platform responsiveness.",
                "Led development of the game’s website store using React, Sass, and TailwindCSS, enabling two-way communication between React and Unity, and implementing Web3 digital wallet integration.",
                "Coordinated with the international team in strategic meetings to align layouts, resolve build issues, and ensure a consistent visual experience across platforms.",
            ],
        },
        {
            period: "Jan 2023 - Mar 2023",
            role: "Front-end Intern",
            company: "Orion Soluções Tecnológicas",
            description: "Development of websites and pages using HTML, CSS, and JavaScript."
        },
       
    ],

    education: [
        {
            period: "Jan 2020 - Dec 2024",
            institution: "Universidade 7 de Setembro",
            description: "Bachelor's degree in Information Systems",
        },
    ],

    skills: [
        "React", "Redux", "Axios", "MUI", "Tailwind", "HTML", "CSS",
        "Node", "Express", "Prisma", "Git", "MongoDB", "PostgreSQL",
        "TypeScript", "Javascript", "Unity", "C#", "App UI", "UIToolkit"
    ],

    languages: [
        {
            name: "Portuguese",
            level: "Native", // 5 estrelas cheias
        },
        {
            name: "English",
            level: "Advanced", // 4 cheias, 1 vazia
        },
    ]

}

export default resumeData;
