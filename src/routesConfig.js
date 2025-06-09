import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

const home = { icon: HomeIcon, label: "Home", path: '/' };
const projects = { icon: CodeIcon, label: "Projects", path: '/projects' };
const games = { icon: SportsEsportsIcon, label: "Games", path: '/games' };
const resume = { icon: DescriptionIcon, label: "Resume", path: '/resume' };
const aboutMe = { icon: PersonIcon, label: "About Me", path: '/about' };

export const routesConfig = { home, projects, games, resume, aboutMe };