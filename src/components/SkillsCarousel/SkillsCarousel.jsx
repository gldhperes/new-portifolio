import { Box, Typography } from "@mui/material";

// SKILLS DATA
import skills from "./skills.js";


// STYLES
import SkillsCarouselStyle from "./SkillsCarouselStyle.js";

const SkillsCarousel = () => {
    return (
        <Box sx={SkillsCarouselStyle.Container}>
            {skills.map((skill, idx) => (
                <Box key={idx} sx={SkillsCarouselStyle.SkillIcon} title={skill.name}>
                    <img src={skill.src} alt={skill.alt} style={{ width: 40, height: 40 }} />

                    <Typography variant="caption" sx={SkillsCarouselStyle.SkillText}>{skill.alt}</Typography>
                </Box>
            ))}
        </Box>
    );
};

export default SkillsCarousel;
