// MUI
import { Box } from '@mui/material';

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';

// STYLE
import ProjectsStyle from './ProjectsStyle.js';
import { useDevice } from '../../app/DeviceContext.jsx';

// Configs
import { useNavigate } from 'react-router-dom';
import projects from './projectConfigs.js';


const Projects = () => {
    const { isMobile } = useDevice();

    const navigate = useNavigate()
    const openProject = (_id, _project) => {
        navigate(`/projects/${_id}`, { state: { project: _project } });
    }

    return (
        <Box sx={isMobile ? ProjectsStyle.ProjectsContainerMobile : ProjectsStyle.ProjectsContainer}>

            {projects.map((project, idx) => (
                <ProjectCard project={project} openProject={openProject} key={idx} />
            ))}

        </Box>
    );
}

export default Projects