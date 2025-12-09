// --- NOVO CARD ---

import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';

// Device context
import { useDevice } from '../../app/DeviceContext.jsx';



// Styles
import ProjectCardStyle from './ProjectCardStyle';



const ProjectCard = ({ project, openProject }) => {
    
    const { isMobile } = useDevice();

    if (!project || project.length === 0) return null;

    return (
        <>
            <Card sx={ProjectCardStyle.CardContainer}>
                <CardMedia
                    component="img"
                    image={project?.image}
                    alt={project?.title}
                    sx={ProjectCardStyle.Image}
                />

                <CardContent sx={ProjectCardStyle.Content}>

                    <Box sx={{}}>
                        <Typography sx={ProjectCardStyle.Title}>{project?.title}</Typography>
                        <Typography sx={ProjectCardStyle.Date}>{project?.startDate} - {project.endDate}</Typography>
                    </Box>

                    <Typography sx={ProjectCardStyle.Description}>{project?.description}</Typography>

                    <Box sx={ProjectCardStyle.TechList}>
                        {project?.technologies && project?.technologies.map((tech, tIdx) => (
                            <Typography key={tIdx} variant='techChip'>{tech}</Typography>
                        ))}
                    </Box>

                    <CardActions sx={ProjectCardStyle.ActionButtonsContainer}>
                        <Button
                            variant="projectButton"
                            href={project?.site || undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<OpenInNewIcon />}
                            className={isMobile && project.site ? 'is-mobile' : ''}
                            disabled={!project?.site}
                        >
                            Site
                        </Button>
                        <Button
                            variant="projectButton"
                            onClick={() => openProject(project.title, project)}
                            rel="noopener noreferrer"
                            startIcon={<InfoIcon />}
                            className={isMobile ? 'is-mobile' : ''}
                        >
                            About
                        </Button>
                    </CardActions>

                </CardContent>
            </Card>
        </>
    );
};

export default ProjectCard;
