// MUI
import { Box, Typography } from '@mui/material';

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';

// STYLE
import GamesStyle from './GamesStyle.js';

// Configs
import games from './gamesConfigs.js';

const Games = () => {
    return (
        <>
            <Box sx={{ ...(GamesStyle.GamesContainer) }}>
                <ProjectCard projects={games} />
            </Box>
        </>
    )
}

export default Games;
