
// --- NOVO CARD ---
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

// Configs
// O array de projetos pode ser passado por props, se não, usa o padrão (projectConfigs)
import defaultProjects from '../../pages/Projects/projectConfigs';

// Styles
import ProjectCardStyle from './ProjectCardStyle';


const ProjectCard = ({ projects }) => {
    const data = projects || defaultProjects;
    if (!data || data.length === 0) return null;

    return (
        <>
            {data.map((project, idx) => (
                <Card sx={ProjectCardStyle.CardContainer} key={idx}>
                    <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.title}
                        sx={ProjectCardStyle.Image}
                    />

                    <CardContent sx={ProjectCardStyle.Content}>

                        <Typography sx={ProjectCardStyle.Title}>{project.title}</Typography>

                        <Typography sx={ProjectCardStyle.Description}>{project.description}</Typography>

                        <Box sx={ProjectCardStyle.TechList}>
                            {project.technologies && project.technologies.map((tech, tIdx) => (
                                <Typography key={tIdx} sx={ProjectCardStyle.TechChip}>{tech}</Typography>
                            ))}
                        </Box>


                        <CardActions sx={ProjectCardStyle.Actions}>
                            <Button
                                variant="projectButton"
                                // color="primary"
                                href={project.site || undefined}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<OpenInNewIcon />}
                                // sx={ProjectCardStyle.ActionsButton}
                                disabled={!project.site}
                            >
                                Site
                            </Button>
                            <Button
                                variant="projectButton"
                                // color="primary"
                                href={project.github || undefined}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={<GitHubIcon />}
                                // sx={ProjectCardStyle.ActionsButton}
                                disabled={!project.github}
                            >
                                GitHub
                            </Button>
                        </CardActions>

                    </CardContent>
                </Card>
            ))}
        </>
    );
};

export default ProjectCard;
