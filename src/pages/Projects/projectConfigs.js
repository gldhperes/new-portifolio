import Project from '../../projectClass';

// IMPORTING IMAGES
import gpComputersImg from '../../assets/GP-Computers.png';
import escolaGPImg from '../../assets/EscolaGP.png';
import catalogadorImg from '../../assets/catalogador.png';
import programacaoImg from '../../assets/programacao.png';
import cssFXImg from '../../assets/cssFX.png';
import ytCloneImg from '../../assets/yt_clone.png';
import GPeresAnalyticsImg from '../../assets/GPeresAnalytics.png';
import eventHorizonImg from '../../assets/event_horizon.png';
import modosGregosImg from '../../assets/modos_gregos.png';
import pokeRouletteImg from '../../assets/poke-roulette.png';


// 1. CSS-FX
const CSSFX = new Project(
    'CSS-FX',
    'Social network application to store and share HTML, CSS and JS code snippets.',
    cssFXImg,
    ['MongoDB', 'Express', 'React', 'NodeJS'],
    'https://css-fx.netlify.app/',
    '01/2023',
    '06/2023',
    // about (Long Description)
    'CSS-FX is a complete web application, developed using the MERN Stack, which functions as a social network dedicated to sharing front-end code snippets. The project was conceived to be a hub of creativity and inspiration, allowing the developer community to share and discover effects, components, and animations built with HTML, CSS, and JavaScript. The full-stack architecture ensures a fluid user experience, from browsing the feed to interacting with the content.',
    // contributions (Contributions - Text)
    'My main contribution to this project was the development of the full-stack architecture, implementing the backend with Node.js and Express and the MongoDB database to manage user authentication, post storage, and social interactions (likes and favorites). On the frontend, I used React to create a dynamic and responsive interface, focused on usability and the visual presentation of the code snippets. The challenge was to integrate the complexity of a social network (authentication, CRUD of posts, follower system) into a cohesive and high-performance application.',
    // responsabilities (Responsibilities - List)
    [
        'Development and maintenance of the RESTful API using Express and Node.js.',
        'Modeling and management of the MongoDB database for user and post data.',
        'Implementation of authentication and authorization logic (JWT or Sessions).',
        'Creation of React components for the frontend (feed, post form, profile).',
        'Ensuring the responsiveness and usability of the interface on different devices.'
    ],
);

// 2. YouTube Clone
const YT_CLONE = new Project(
    'YouTube Clone',
    'YouTube clone made with React, using TailwindCSS and Rapid API.',
    ytCloneImg,
    ['React', 'TailwindCSS', 'Javascript'],
    'https://yut-clone.netlify.app/',
    '07/2023',
    '09/2023',
    // about (Long Description)
    'This project is a functional clone of the YouTube interface, focused on simulating the experience of browsing and consuming video content. It was built with React for user interface development and styled with TailwindCSS for fast and modular development. The main feature is the integration with an external API (mentioned as Rapid API in the JS structure) to search and display videos and channel information, demonstrating the ability to consume and manipulate data from third-party services.',
    // contributions (Contributions - Text)
    'I was responsible for implementing the user interface and integrating with the video API. Using React, I developed the component structure for the side navigation bar, the search bar, and the video display area, ensuring the application was reactive and efficient. The use of TailwindCSS allowed for the creation of a clean and modern design, replicating the YouTube aesthetic with a focus on user experience.',
    // responsabilities (Responsibilities - List)
    [
        'Consumption and processing of data from the video API (Rapid API).',
        'Development of functional and reusable React components.',
        'Complete styling of the application using the TailwindCSS framework.',
        'Implementation of application state and routing logic with React.'
    ],
);

const GPeresAnalytics = new Project(
    'GPeres Analytics',
    'Analytics Platform for Restaurants, focused on data visualization of sales, channels, and products.',
    GPeresAnalyticsImg,
    ['React', 'NodeJS', 'PostgreSQL',],
    'https://gperes-analytics.netlify.app/',
    '11/2025',
    '11/2025',
    'GPeres Analytics is a complete web application designed to provide business insights for the restaurant sector. The platform allows users to view sales data, compare the performance of different stores and sales channels, and analyze the ranking of best-selling products. The goal is to transform raw data into actionable information to optimize operations and increase profitability.',
    'My main contribution to this project was the development of the data architecture and the visualization frontend. On the backend, I implemented integration with the database (PostgreSQL ) for processing and aggregating large volumes of transaction data. On the frontend, I used React to create an interactive and responsive dashboard, with dynamic filters for store, channel, and period, and data visualization components such as tables and charts (not visible in the screenshot, but implied in an analytics platform).',
    [
        'Development and maintenance of the API for querying and aggregating sales data.',
        'Modeling and optimization of the PostgreSQL database for high-performance analytics queries.',
        'Implementation of server-side data filtering and processing logic.',
        'Creation of React components for the dashboard (filters, Top Products tables, Revenue charts).',
        'Ensuring the accuracy and usability of the interface for real-time data analysis.'
    ],
);


// 3. Event Horizon
const EVENT_HORIZON = new Project(
    'Event Horizon',
    'Astronomy website made with HTML, CSS, and Javascript.',
    eventHorizonImg,
    ['HTML', 'CSS', 'Javascript'],
    'https://gldhperes.github.io/event-horizon/',
    '06/2024',
    '07/2024',
    // about (Long Description)
    'Event Horizon is an informative and visually appealing website dedicated to astronomy and space exploration. The project was built with the fundamental technologies of web development (HTML, CSS, and JavaScript), focusing on an immersive design that uses stellar backgrounds and visual elements that refer to space. The goal is to act as a content portal, gathering information about the universe, space missions, and even curiosities like "the sounds of space," serving as a showcase for the ability to create rich and thematic experiences with Vanilla JavaScript.',
    // contributions (Contributions - Text)
    'My primary contribution was the complete front-end development, from the semantic structuring of the HTML to the creation of an engaging visual experience with CSS. The use of JavaScript was crucial to add interactivity and dynamism, such as navigation between sections and the possible integration of external content (like the science dissemination videos and channels observed on the page). The focus was on creating a design that was both futuristic and informative, demonstrating proficiency in design and interface implementation.',
    // responsabilities (Responsibilities - List)
    [
        'Creation of the semantic and accessible HTML structure.',
        'Development of the layout and visual styling with CSS, including animations and effects.',
        'Implementation of interactive functionalities with pure JavaScript.',
        'Optimization of site performance for fast loading of background images.'
    ],
);

// 4. Greek Modes
const GREEK_MODES = new Project(
    'Greek Modes',
    'Greek Modes selector to help musicians.',
    modosGregosImg,
    ['HTML', 'CSS', 'Javascript'],
    'https://gldhperes.github.io/modos-gregos/',
    '01/2023',
    '02/2023',
    // about (Long Description)
    'Greek Modes is an interactive and educational tool designed for musicians and music theory students. The goal is to simplify the visualization and understanding of the Greek Modes (Ionian, Dorian, Phrygian, etc.) in different keys. The application, built with HTML, CSS, and JavaScript, allows the user to select a root note and a mode, displaying the corresponding notes of the resulting scale. It is a project focused on utility and clarity, demonstrating the application of programming logic to solve practical problems.',
    // contributions (Contributions - Text)
    'I was responsible for developing the core logic of the mode selector. This involved creating a JavaScript algorithm that maps musical notes and applies the correct intervals for each of the seven Greek Modes, starting from any root note. Additionally, I developed the simple and functional user interface with HTML and CSS, ensuring the tool was intuitive and quick to use, transforming a complex concept of music theory into a practical and accessible application.',
    // responsabilities (Responsibilities - List)
    [
        'Implementation of the JavaScript algorithm for calculating and displaying musical scales.',
        'Creation of the user interface with HTML and CSS for note and mode selection.',
        'Mapping and validation of music theory rules for the 7 Greek Modes.',
        'Ensuring the accuracy and usability of the tool for musicians.'
    ],
);

// 5. Pokemon Roulette
const POKE_ROULETTE = new Project(
    'Pokemon Roulette',
    'Game to spin and get your favorite Pokémon, made with React.',
    pokeRouletteImg,
    ['React', 'HTML', 'CSS', 'Javascript'],
    'https://gldhperes.github.io/Pokemon-Roulette/',
    '12/2022',
    '12/2022',
    // about (Long Description)
    'Pokemon Roulette is a simple and fun game developed in React that simulates a roulette wheel to draw a Pokémon. The project uses the React library to manage the application state and game logic, demonstrating the ability to create interactive and entertainment-focused applications. The interface is visually appealing, featuring a selection of Pokémon from different generations and types, and the drawing mechanism is the central point of the application.',
    // contributions (Contributions - Text)
    'My main contribution was the development of the roulette component and the drawing logic using React. I created the data structure to store Pokémon information and implemented the drawing function which, when triggered, randomly selects a Pokémon and displays it on the screen. The challenge was to ensure the roulette animation was visually satisfying and that React\'s state logic correctly managed the transition between selection and the final result.',
    // responsabilities (Responsibilities - List)
    [
        'Development of the user interface with React, HTML, and CSS.',
        'Implementation of the random drawing logic in JavaScript.',
        'Management of the application state (selection, drawing, result) with React Hooks.',
        'Integration of visual resources (Pokémon images) for the roulette.'
    ],
);

// 6. GP-Computers
const GP_COMPUTERS = new Project(
    'GP-Computers',
    'Simple computer e-commerce using Angular and Typescript.',
    gpComputersImg,
    ['Angular', 'HTML', 'CSS', 'Typescript'],
    'https://gldhperes.github.io/GP-Computers/',
    '12/2023',
    '12/2023',
    // about (Long Description)
    'GP-Computers is a simplified e-commerce project focused on selling peripherals and computer components. The application was developed using the Angular framework and the TypeScript language, which demonstrates proficiency in building robust and scalable single-page applications (SPA). The project simulates the essential functionalities of a virtual store, such as product listing, detail viewing, and shopping cart management.',
    // contributions (Contributions - Text)
    'I was responsible for the complete front-end development of the application using Angular. This included creating modules and components for product listing, the product details page, and the shopping cart component. The use of TypeScript was fundamental to ensure code typing and maintainability. I implemented Angular routing for navigation between pages and used the framework\'s reactivity to update the shopping cart in real-time.',
    // responsabilities (Responsibilities - List)
    [
        'Creation of the Angular component and module structure.',
        'Implementation of the shopping cart management service.',
        'Development of the user interface with HTML and CSS.',
        'Use of TypeScript for object-oriented and typed development.'
    ],
);

// 7. Escola G/P
const ESCOLA_GP = new Project(
    'Escola G/P',
    'Student grades CRUD for a school, made with Angular.',
    escolaGPImg,
    ['Angular', 'HTML', 'CSS', 'Typescript'],
    'https://gldhperes.github.io/Escola-GP/',
    '12/2023',
    '12/2023',
    // about (Long Description)
    'Escola G/P is a CRUD (Create, Read, Update, Delete) system for managing student grades in a school environment. Developed with Angular and TypeScript, the project is a practical example of how to build data management applications with a focus on functionality and user experience. It allows for the insertion of grades, the calculation of the average, and the determination of the student\'s status (approved/failed), being a clear demonstration of skills in developing line-of-business applications.',
    // contributions (Contributions - Text)
    'My main contribution was the development of the data management logic and the CRUD interface using Angular. I created the data service to store and manipulate student information and implemented the logic for calculating the average and status. The main component of the application allows for the insertion of new students and grades, searching, and displaying the list in a dynamic table. The project highlights the ability to build complex data management solutions with Angular.',
    // responsabilities (Responsibilities - List)
    [
        'Development of a data service (Service) for managing the state of the student list.',
        'Implementation of business logic for calculating averages and status.',
        'Creation of the form component for data entry and the table component for display.',
        'Use of data binding and Angular directives for interface reactivity.'
    ],
);

// Adiciona uma propriedade customizada para destacar projetos principais
CSSFX.isMain = true;
YT_CLONE.isMain = true;

const projects = [
    CSSFX,
    YT_CLONE,
    GPeresAnalytics,
    EVENT_HORIZON,
    GREEK_MODES,
    POKE_ROULETTE,
    GP_COMPUTERS,
    ESCOLA_GP,
];

export default projects;