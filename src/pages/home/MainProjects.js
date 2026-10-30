import projects from '../Projects/projectConfigs';
import games from '../Games/gamesConfigs';

// Junta projetos e games principais usando a propriedade isMain
const mainProjects = [
    ...games.filter(g => g.isMain),
    ...projects.filter(p => p.isMain),
];

export default mainProjects;