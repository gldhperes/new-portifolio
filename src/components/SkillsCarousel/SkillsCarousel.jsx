import { Box } from "@mui/material";
import SkillsCarouselStyle from "./SkillsCarouselStyle.js";
import skills from "./skills.js";

const SkillsCarousel = () => (
    <Box sx={SkillsCarouselStyle.Container}>
        {skills.map((skill, idx) => (
            <Box key={idx} sx={SkillsCarouselStyle.SkillIcon} title={skill.name}>
                <img src={skill.src} alt={skill.alt} style={{ width: 40, height: 40 }} />
            </Box>
        ))}
    </Box>
);

export default SkillsCarousel;
