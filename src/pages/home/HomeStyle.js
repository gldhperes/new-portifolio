const HomeStyle = {

    MainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: '30px',

        // animation: "PagesAnimation ease .4s", 
    },

    SocialContainer: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        gap: '15px',

        "@media (max-width: 600px)": {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },

    SocialItem: {
        padding: '8px 18px',

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '8px',
        cursor: "pointer",
        // backgroundColor: 'primary.light',
        backgroundColor: 'background.paper',

        borderRadius: '8px',

        transition: 'all 0.3s ease',

        "&:hover":
        {
            "&.email": { color: '#e64133', },
            "&.github": { color: '#666', },
            "&.linkedin": { color: '#0077b5', },
            "&.whatsapp": { color: '#25D366', },
            "&.itch": { color: '#f39c12', },

            rotate: "-3deg",
        }
    },

    SubjectBox: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '40px',

          "@media (max-width: 600px)": {
            alignItems: 'center',
            justifyContent: 'center',
        },
    },

};


export default HomeStyle;