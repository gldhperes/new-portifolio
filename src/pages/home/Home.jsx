// MUI
import { Box, Divider, Typography, Link, Button } from "@mui/material";

// STYLES
import HomeStyle from "./HomeStyle.js";
import ProjectsStyle from "../Projects/ProjectsStyle.js";

// COMPONENTS
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel.jsx';
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";

// JS
import Social from "./Social.js";
import MainProjects from "./MainProjects.js";
import { useDevice } from "../../app/DeviceContext.jsx";

const Home = () => {
  const { isMobile } = useDevice();
  return (
    <Box sx={{ ...(HomeStyle.MainContainer) }}    >

      <Box sx={{ ...(HomeStyle.SubjectBox) }}>

        <Typography variant="h5" style={{ width: isMobile && '100%', textAlign: isMobile && 'center'  }} >
          Hello There!
        </Typography>

        <Typography style={{ textAlign: isMobile && 'center'  }} >
          I'm Guilherme Peres, a web and game developer from Ceará, Brazil.
          Here, I show you what I have been working on and share more about my education and career path.
        </Typography>


        <Typography style={{ textAlign: isMobile && 'center'  }}>
          I’m always up for a challenge, and looking for meaningful projects, so please get in touch.
          You can find my contacts and informations below.
        </Typography>

      </Box>

      <Box sx={HomeStyle.SocialContainer}>
        {Social.map((item, idx) => (
          <Link key={idx} sx={HomeStyle.SocialItem} className={item.className} href={item.url} target="_blank" rel="noopener noreferrer" underline="none" color="inherit" fontWeight={500}>
            <item.icon />
            {item.text}
          </Link>
        ))}
      </Box>

      <Divider variant="page-divider" />

      {/* CONTAINER PARA MINHAS SKILLS E POWER UPS */}
      <Box sx={{ ...(HomeStyle.SubjectBox) }}>
        <Typography align="left" variant="h5">
          My Skills and Power Ups
        </Typography>

        <SkillsCarousel />
      </Box>

      <Divider variant="page-divider" />

      {/* CONTAINER PARA MAIN PROJECTS */}
      <Box sx={{ ...(HomeStyle.SubjectBox) }}>

        <Typography align="left" variant="h5">
          Featured Projects
        </Typography>

        <Box sx={isMobile ? ProjectsStyle.ProjectsContainerMobile : ProjectsStyle.ProjectsContainer}>
          <ProjectCard projects={MainProjects} />
        </Box>

      </Box>

    </Box >
  )
}

export default Home