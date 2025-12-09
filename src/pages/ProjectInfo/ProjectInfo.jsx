import { useLocation } from 'react-router-dom';

// MUI
import { Button, Typography, Box, Divider, List, ListItem, ListItemIcon, ListItemText, Avatar } from "@mui/material"

// ICONS
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// STYLES
import ProjectInfoStyle from "./ProjectInfoStyle.js"
import { useDevice } from '../../app/DeviceContext.jsx';


const ResponsabilitiesList = ({ implementation }) => {

  if (!implementation || !Array.isArray(implementation)) return null;

  return (
    <List dense={true}>

      {implementation.map((resp, idx) => (
        <ListItem key={idx}>

          <ListItemIcon>
            <FiberManualRecordIcon sx={{ color: 'white' }} />
          </ListItemIcon>

          <ListItemText primary={resp} />

        </ListItem>
      ))}

    </List>
  )
}

const ResponsabilitiesComponent = ({ implementation, _title }) => {

  return (
    <>
      <Divider variant="page-divider" />

      <Box sx={{ ...(ProjectInfoStyle.SubjectBox) }}    >
        <Typography align="left" variant="h4">
          {_title ? 'Technical Implementation' : 'Responsibilities'}
        </Typography>

        <ResponsabilitiesList implementation={implementation} />

      </Box>
    </>
  )
}

const ContributionsComponent = ({ role, _title }) => {
  return (
    <>
      <Divider variant="page-divider" />

      <Box sx={{ ...(ProjectInfoStyle.SubjectBox) }}    >

        <Typography align="left" variant="h4">
          {_title ? 'My Role' : 'Contributions'}
        </Typography>

        <Typography align="left" variant="h6">
          {role}
        </Typography>
      </Box>
    </>
  )
}

const ProjectInfo = () => {
  const location = useLocation();
  const project = location.state?.project;
  const { isMobile } = useDevice();

  return (
    <Box sx={ProjectInfoStyle.MainContainer}>

      {/* TITULO  */}
      <Typography align="left" variant="h2">
        {project?.title}
      </Typography>

      {/* FOTO PRINCIPAL ou VIDEO  */}
      <Avatar sx={{ ...(ProjectInfoStyle.MainImage) }} src={project?.image} alt={project?.title} />

      {/* GALERIA DE FOTOS */}

      <Divider variant="page-divider" />

      {/* DEVELOPED BY */}
      <Box sx={{ ...(ProjectInfoStyle.DevelopedByContainer) }}>

        <Box sx={{ ...(ProjectInfoStyle.DevelopedBy) }}>
          <Typography align="left" variant="p">
            Developed by:
          </Typography>

          <Avatar src="" alt="" />
        </Box>

        <Box sx={{ ...(ProjectInfoStyle.DevelopedTools) }}>
          <Typography align="left" variant="p">
            Tools:
          </Typography>

          <Box sx={{ ...(ProjectInfoStyle.DevelopedToolsList) }}>
            {project?.technologies && project?.technologies.map((tech, tIdx) => (
              <Typography key={tIdx} variant='techChip'>{tech}</Typography>
            ))}
          </Box>

        </Box>

      </Box>

      <Divider variant="page-divider" />

      <Box sx={{}}>

        {/* BOTOES PARA ACESSO (JOGAR e/ou SITE) */}
        
          <Button variant='projectButton'
            href={project?.site || undefined}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<OpenInNewIcon />}
            className={isMobile && project.site ? 'is-mobile' : ''}
            disabled={!project?.site}
          >
            Site 
          </Button>
       

      </Box>

      <Divider variant="page-divider" />

      {/* DESCRIÇÃO */}
      <Typography align="left" variant="h6">
        {project?.about}
      </Typography>


      {/* CONTAINER PARA MINHAS CONTRIBUIÇÕES */}
      {project?.role && (<ContributionsComponent role={project.role} title={project?.isProfessional} />)}


      {/* CONTAINER PARA MINHAS RESPONSABILIDADES */}
      {project?.implementation && (<ResponsabilitiesComponent implementation={project.implementation} title={project?.isProfessional} />)}

    </Box >
  )
}

export default ProjectInfo