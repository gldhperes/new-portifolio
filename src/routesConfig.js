import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CodeIcon from '@mui/icons-material/Code';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';

const DEFAULT_PATH = '/';

const home = { icon: HomeIcon, label: "Home", path: `${DEFAULT_PATH}home` };
const projects = { icon: CodeIcon, label: "Projects", path: `${DEFAULT_PATH}projects` };
const games = { icon: SportsEsportsIcon, label: "Games", path: `${DEFAULT_PATH}games` };
const resume = { icon: DescriptionIcon, label: "Resume", path: `${DEFAULT_PATH}resume` };
const aboutMe = { icon: PersonIcon, label: "About Me", path: `${DEFAULT_PATH}about` };

export const routesConfig = { home, projects, games, resume, aboutMe };