import projects from '../Projects/projectConfigs';
import games from '../Games/gamesConfigs';

// Junta projetos e games principais usando a propriedade isMain
const mainProjects = [
    ...projects.filter(p => p.isMain),
    ...games.filter(g => g.isMain),
];

export default mainProjects;