// MUI
import { Box, Typography } from '@mui/material';

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';

// STYLE
import ProjectsStyle from './ProjectsStyle.js';

const Projects = () => {
    return (
        <>
            <Box sx={{ ...(ProjectsStyle.ProjectsContainer) }}>

                <ProjectCard />

            </Box>
        </>
    )
}

export default Projects