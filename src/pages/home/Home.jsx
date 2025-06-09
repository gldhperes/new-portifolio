// MUI
import { Box, Divider, Typography, Link } from "@mui/material";

// STYLES
import HomeStyle from "./HomeStyle.js";

// COMPONENTS
import SkillsCarousel from '../../components/SkillsCarousel/SkillsCarousel.jsx';

// JS
import Social from "./Social.js";

const Home = () => {
  return (
    <Box sx={{ ...(HomeStyle.MainContainer) }}    >

      <Box sx={{ ...(HomeStyle.TypographyContainer) }}    >
        <Typography>
          I'm Guilherme Peres, a game and web programmer/developer from Ceará, Brazil.
          Here, I show you what I have been working on and share more about my education and career path.
        </Typography>


        <Typography >
          I’m always up for a challenge, and looking for meaningful projects, so please get in touch.
          You can find my contacts and informations below.
        </Typography>



        <Box sx={HomeStyle.SocialContainer}>
          {Social.map((item, idx) => (
            <Link key={idx} sx={HomeStyle.SocialItem} className={item.className} href={item.url} target="_blank" rel="noopener noreferrer" underline="none" color="inherit" fontWeight={500}>
              <item.icon />
              {item.text}
            </Link>
          ))}
        </Box>


      </Box>



      {/* CONTAINER PARA MINHAS SKILLS E POWER UPS */}
      <Divider variant="page-divider" />


      <Box sx={{ ...(HomeStyle.SkillsContainer) }}>
        <Typography align="left" variant="h5">
          My Skills and Power Ups
        </Typography>

        <SkillsCarousel />

      </Box>


    </Box >
  )
}

export default Home