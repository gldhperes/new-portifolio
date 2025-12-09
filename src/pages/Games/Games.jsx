// MUI
import { Box } from '@mui/material';

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';

// STYLE
import GamesStyle from './GamesStyle.js';
import { useDevice } from '../../app/DeviceContext.jsx';

// Configs
import { useNavigate } from 'react-router-dom';
import games from './gamesConfigs.js';


const Games = () => {
    const { isMobile } = useDevice();

    const navigate = useNavigate()
    const openProject = (_id, _project) => {
        navigate(`/games/${_id}`, { state: { project: _project } });
    }

    return (
        <Box sx={isMobile ? GamesStyle.GamesContainerMobile : GamesStyle.GamesContainer}>

            {games.map((project, idx) => (
                <ProjectCard project={project} openProject={openProject} key={idx} />
            ))}

        </Box>
    );
}

export default Games;
