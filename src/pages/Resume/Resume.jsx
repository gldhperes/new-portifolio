
import { Box, Typography, Divider, Button, Link, Avatar, Stack, Chip, Container } from '@mui/material';
import resumeData from './resumeData.js';
import ResumeStyle from './ResumeStyle.js';
import { Description } from '@mui/icons-material';

// Icons
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import TranslateIcon from '@mui/icons-material/Translate';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const Resume = () => {
    return (
        <Box sx={ResumeStyle.root}>

            <SectionHeader title="Experience" icon={<BusinessCenterIcon />} />
            {/** Experience List */}
            {resumeData.experience.map((job, idx) => (
                <JobSection key={idx} job={job} />
            ))}


            <SectionHeader title="Education" icon={<SchoolIcon />} />
            {/** Education List */}
            {resumeData.education.map((edu, idx) => (
                <EducationSection key={idx} edu={edu} />
            ))}

            <SectionHeader title="Skills" icon={<BuildIcon />} />
            {/** Skills List */}
            <Box sx={ResumeStyle.skillsBoxStyle}>
                {resumeData.skills.map((skill, idx) => (
                    <Chip key={idx} label={skill} sx={ResumeStyle.skillsBox}/>
                ))}
            </Box>

            <SectionHeader title="Languages" icon={<TranslateIcon />} />
            {/** Languages List */}
            <Box sx={ResumeStyle.languagesBox}>
                {resumeData.languages.map((lang, idx) => (
                    <Box key={idx} sx={ResumeStyle.languageItem}>
                        <Typography variant="body1" sx={ResumeStyle.languageName}>{lang.name+":"}</Typography>
                        <Box sx={ResumeStyle.languageStars}>
                            {lang.level}
                        </Box>
                    </Box>
                ))}
            </Box>

        </Box>
    );
};


const EducationSection = ({ edu }) => (
    <Box sx={ResumeStyle.educationSection}>
        <Typography color="text.secondary">{edu.period}</Typography>
        <Typography variant="body1" sx={ResumeStyle.educationInstitution}>{edu.institution}</Typography>
        <Typography sx={ResumeStyle.educationDescription}>{edu.description}</Typography>
    </Box>
);

const SectionHeader = ({ title, icon }) => {
    return (
        <Box sx={{ width: '100%', marginBottom: '20px' }}>
            <Box sx={ResumeStyle.sectionHeader}>
                <Typography variant="h6">{title}</Typography>
                {icon}
            </Box>
            <Divider />
        </Box>
    );
};

const JobSection = ({ job }) => {
    return (
        <Box sx={ResumeStyle.jobSection}>
            <Box sx={ResumeStyle.roleSection} >
                <Typography color="text.secondary">{job.period}</Typography>
                <Typography variant="body1">
                    {job.role}
                    <span style={{ color: "text.secondary" }}> at </span>
                    {job.company}
                </Typography>
            </Box>
            <Box sx={ResumeStyle.descriptionContainer}>
                <Typography sx={{ color: "text.secondary", fontSize: "0.7em", fontWeight: "bold" }}>SUMMARY</Typography>

                {
                    // if para saber se job description é um array ou string
                    Array.isArray(job.description) ? (
                        job.description.map((desc, idx) => (
                            <Box key={idx} sx={{ marginBottom: '10px' }}>
                                <Typography >
                                    {desc}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Box sx={{ marginBottom: '10px' }}>
                            {job.description}
                        </Box>
                    )
                }
            </Box>
        </Box >
    );
};

export default Resume;
