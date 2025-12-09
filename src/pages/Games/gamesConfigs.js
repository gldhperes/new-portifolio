import Project from '../../projectClass';

// IMPORTING IMAGES
import desenvolvimentoImg from '../../assets/desenvolvimento.png';
import adaImg from '../../assets/ada.png';
import moodymadness from '../../assets/MoodyMadness.png';
import kmeansImg from '../../assets/kmeans.png';
import buscaHeuristicaImg from '../../assets/Busca Heuristica.png';
import goGymImg from '../../assets/GoGym.png';
import gnomeBusterImg from '../../assets/GnomeBuster.png';

const MOODY = new Project(
  'Moody Madness',
  'Moody Madness is a NTF multiplayer racing game.',
  moodymadness,
  ['Unity', 'C#', 'UIToolkit'],
  'https://moodymadness.com/',
  '01/2024',
  'present',
  'Moody Madness is a high-octane multiplayer racing game built on the Unity engine, featuring NFT integration for unique in-game assets. The game combines fast-paced kart racing with a vibrant, stylized aesthetic. As a professional project, it requires robust network synchronization, complex game logic, and continuous feature development in an agile environment.',
  'I contributed to the core gameplay loop and the implementation of various game systems. My focus was on ensuring smooth multiplayer synchronization, developing reusable UI components using UIToolkit, and optimizing game performance for a consistent frame rate across different devices. I worked closely with the design and art teams to translate concepts into functional, polished game features.',
  [
    'Development and maintenance of core gameplay mechanics (racing, power-ups, physics).',
    'Implementation of multiplayer features and network synchronization using Unity Netcode.',
    'Creation of reusable and scalable UI/UX components with Unity’s UIToolkit.',
    'Optimization of game performance and memory usage for mobile and desktop platforms.',
    'Collaboration with the QA team to identify and resolve critical bugs.'
  ],
);
MOODY.isMain = true;
MOODY.isProfessional = true;

const GNOME_BUSTER = new Project(
  'Gnome Buster',
  'Top-down GameJam game where you must identify and capture gnomes.',
  gnomeBusterImg,
  ['Unity', 'C#', 'UIToolkit'],
  'https://gldhperes.itch.io/gnome-buster',
  '03/2023',
  '03/2023',
  'Gnome Buster is a top-down action-puzzle game developed for a GameJam, where the player must use observation and quick reflexes to identify and capture gnomes hidden in the environment. The project was a challenge in rapid prototyping, focusing on creating a complete and fun experience within a short development timeframe.',
  'My role was to develop the entire game from concept to execution during the GameJam period. This involved designing the core mechanic of gnome identification, implementing the top-down player movement and interaction system, and creating the UI/UX flow. The project was a great exercise in quickly bringing a game idea to life using Unity and C#.',
  [
    'Implementation of the top-down player movement and camera system.',
    'Development of the gnome identification and capture mechanic.',
    'Creation of the level structure and placement of interactive elements.',
    'Programming of the game state and win/loss conditions.',
    'Packaging and deployment of the game to itch.io (HTML5 build).'
  ],
);
GNOME_BUSTER.isMain = true;

const GOGYM = new Project(
  '2D Online RPG Tycoon Game (GoGym)',
  '2D online multiplayer game in Tycoon and RPG style.',
  goGymImg,
  ['Unity', 'NodeJS', 'Prisma', 'PostgreSQL'],
  '',
  '06/2024',
  'present',
  'GoGym is an ambitious personal project for a 2D online multiplayer game that blends Tycoon and RPG elements. The game is built with Unity for the client and a robust backend using NodeJS, Prisma, and PostgreSQL to handle persistent data, user accounts, and real-time multiplayer interactions. The focus is on creating a scalable architecture for a persistent online world.',
  'I am responsible for the full-stack development of this project. This includes designing and implementing the game client in Unity, developing the RESTful API and WebSocket server with NodeJS, and structuring the database schema using PostgreSQL and Prisma ORM. The main challenge is managing the complexity of a real-time multiplayer environment and ensuring data integrity between the client and the server.',
  [
    'Full-stack development: Unity client and NodeJS backend.',
    'Database modeling and management using PostgreSQL and Prisma.',
    'Implementation of user authentication and account management.',
    'Development of real-time multiplayer features (e.g., chat, shared world state).',
    'Creation of the core Tycoon and RPG game logic in C#.'
  ],
);

const ADA = new Project(
  'A Dauntless Adventure',
  'Shot\'em Up game made in Unity and C#.',
  adaImg,
  ['Unity', 'C#'],
  'https://gldhperes.itch.io/a-dauntless-adventure-v2',
  '10/2022',
  '11/2022',
  'A Dauntless Adventure is a classic 2D top-down Shoot\'em Up (Shmup) game developed in Unity. The project was a foundational exercise in game development, focusing on implementing core mechanics such as player movement, shooting, enemy AI, and wave management. It serves as a solid demonstration of proficiency in C# and the Unity engine for arcade-style gameplay.',
  'My role was the sole developer, responsible for all aspects of the game. I designed and implemented the entire combat system, including various enemy patterns and boss encounters. The project allowed me to gain deep experience with Unity\'s physics and collision systems, as well as creating a satisfying and challenging gameplay loop typical of the Shmup genre.',
  [
    'Development of the player controller and shooting mechanics.',
    'Implementation of enemy AI and wave spawning system.',
    'Management of game state, scoring, and high-score persistence.',
    'Creation of visual effects (VFX) for explosions and power-ups.',
    'Deployment of the game to itch.io (HTML5 build).'
  ],
);

const K_MEANS = new Project(
  'K-Means',
  'K-Means AI algorithm implemented in Unity with C#.',
  kmeansImg,
  ['Unity', 'C#', 'AI'],
  'https://gldhperes.github.io/k-means/',
  '05/2023',
  '05/2023',
  'This project is an interactive implementation of the **K-Means clustering algorithm** within the Unity engine. It serves as a visual and practical demonstration of this fundamental machine learning technique. The application allows users to observe how the algorithm partitions N observations into K clusters by iteratively calculating the closest centroid, showcasing proficiency in applying complex mathematical concepts to practical programming.',
  'My role was to translate the theoretical K-Means algorithm into a functional and visual application using C# in Unity. I developed the core logic for distance calculation (Euclidean distance), centroid recalculation, and the termination condition. The main contribution was creating a clear visualization that helps understand the iterative process of vector quantization and clustering.',
  [
    'Implementation of the K-Means clustering algorithm in C#.',
    'Development of the logic for calculating the closest centroid (Euclidean distance).',
    'Creation of the visualization system in Unity to display data points and centroids.',
    'Programming the iterative process and the convergence check.',
    'Deployment of the interactive demo via GitHub Pages.'
  ],
);

const HEURISTIC_SEARCH = new Project(
  'Heuristic Search',
  'Heuristic search AI algorithm in Unity with C#.',
  buscaHeuristicaImg,
  ['Unity', 'C#', 'AI'],
  'https://gldhperes.github.io/Busca-Heuristica/',
  '04/2023',
  '04/2023',
  'The Heuristic Search project is a practical implementation of AI pathfinding algorithms, such as A* or Greedy Best-First Search, within the Unity environment. It demonstrates the application of heuristic functions to efficiently find the shortest or most optimal path between two points in a graph or grid. This project highlights the ability to work with core concepts of Artificial Intelligence and graph theory.',
  'My role was to implement the chosen heuristic search algorithm (e.g., A*) from scratch in C#. This involved designing the node structure, implementing the priority queue, and developing the heuristic function to guide the search efficiently. The primary contribution was creating a visual demonstration that clearly illustrates the search process and the resulting optimal path.',
  [
    'Implementation of the Heuristic Search algorithm (e.g., A* or GBFS) in C#.',
    'Development of the graph/grid structure for pathfinding.',
    'Creation of the heuristic function for path cost estimation.',
    'Visualization of the search process (open and closed lists) in Unity.',
    'Deployment of the interactive demo via GitHub Pages.'
  ],
);

// Adiciona uma propriedade customizada para destacar projetos principais
MOODY.isMain = true;
MOODY.isProfessional = true;
GNOME_BUSTER.isMain = true;

const games = [
  MOODY,
  GNOME_BUSTER,
  GOGYM,
  ADA,
  K_MEANS,
  HEURISTIC_SEARCH,
];

export default games;
