import { BorderColor, BorderLeft, Padding } from "@mui/icons-material";
import { bgBG } from "@mui/material/locale";
import { Color } from "ogl";

const ResumeStyle = {
    // Custom styles for Resume.jsx

    languagesBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    languageItem: {
        display: 'flex',
        alignItems: 'center',
        gap: 2,
    },
    languageName: {
        fontWeight: 600,
    },
    languageStars: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
    },
    educationSection: {
        mb: 2,
    },
    educationInstitution: {
        fontWeight: 600,
    },
    educationDescription: {
        mt: 1,
    },
    root: {
        maxWidth: 800,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',

        // animation: "PagesAnimation ease .4s", 

    },

    sectionHeader: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    jobSection: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // gap: '10px',

        paddingBottom: '20px',
    },

    roleSection: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // gap: '10px',

        paddingBottom: '10px',
    },

    descriptionContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'background.paper',
        padding: '3px 0px',
        paddingLeft: '15px',

        borderLeft: '1px solid',
        borderColor: 'text.secondary',

        // Media query para telas menores que 500px
        '@media (max-width: 500px)': {
            width: '95%',
        },
    },


    skillsBoxStyle: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        mb: 2,
    },

    skillsBox: {
        padding: '5px',

        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        color: 'primary.light',
        backgroundColor: 'background.paper',
        boxShadow: "0 0 5px rgb(0, 234, 255)",
    }
};

export default ResumeStyle;
