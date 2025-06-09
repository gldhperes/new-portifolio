
const HomeStyle = {

    MainContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
        animation: "PagesAnimation ease .4s", 
    },

    SocialContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
    },

    SocialItem: {
        padding: '8px 18px',

        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '8px',
        cursor: "pointer",
        backgroundColor: 'primary.light',

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

    TypographyContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '20px',

    },

};


export default HomeStyle;