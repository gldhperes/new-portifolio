

const ProjectCardStyle = {
    CardContainer: {
        width: 340,
        height: 420,
        backgroundColor: 'primary.main',
        borderRadius: '18px',
        boxShadow: '0 4px 24px 0 rgba(18,18,18,0.25)',
        overflow: 'hidden',

        display: 'flex',
        flexDirection: 'column',

        transition: 'transform 0.2s cubic-bezier(.4,2,.6,1), box-shadow 0.2s',

        '&:hover': {
            transform: 'translateY(-8px) scale(1.03)',
            boxShadow: '0 10px 20px 0 rgb(0, 0, 0)',
        },

    },

    Image: {
        width: '100%',
        height: 160,
        objectFit: 'cover',
        background: '#222',
    },

    Content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '15px',
        gap: '12px',
    },

    Title: {
        fontWeight: 700,
        fontSize: '1.25rem',
        color: '#fff',
    },

    Description: {
        color: '#B9BBBE',
        fontSize: '1rem',
        height: '100%',
    },

    TechList: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',

    },

    TechChip: {
        color: 'text.primary',
        backgroundColor: 'primary.light',
        borderRadius: '8px',
        padding: '2px 10px',
        fontSize: '0.85rem',
        fontWeight: 500,
        letterSpacing: 0.2,
    },

    Actions: {
        display: 'flex',
        gap: '12px',
        padding: '0',
    },

    ActionsButton: {
        backgroundColor: 'primary.light',
        borderRadius: '8px',
        fontWeight: 600,
    },

};

export default ProjectCardStyle;