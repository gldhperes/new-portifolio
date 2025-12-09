const MainBox = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '30px',

    // backgroundColor: '#1E1E1EDD',
    color: 'white',

    paddingTop: '20px',
    paddingLeft: '10vw',
    paddingRight: '10vw',

    transition: 'all .4s ease-in',

    // Media query para telas menores que 500px
    '@media (max-width: 500px)': {
        paddingLeft: '2vw',
        paddingRight: '2vw',
    },
};

const AppStyle = {

    opened: {
        ...MainBox,

        // so aplicar esse padding se a tela for maior que 600px
        '@media (min-width: 600px)': {
            paddingLeft: '400px',
        },
    },

    closed: {
        ...MainBox,

        // so aplicar esse padding se a tela for maior que 600px
        '@media (min-width: 600px)': {
            paddingLeft: '250px',
        },
    },

    MainContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        paddingBottom: '50px',
        position: 'relative',
        transition: 'all .3s linear',
    },

    HeaderContainer: {
        width: "100%",

        display: 'flex',
        flexDirection: 'column',
        gap: '10px',

        marginTop: '35px',
        marginBottom: '25px',

        transition: 'all .4s ease-in',
        translateY: '(-10px)',
    },

    PathText: {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },

    IconButtonMobile: {

        width: 40,
        height: 40,

        color: "primary.light",
        backgroundColor: '#424549',

        border: '1px solid',
        boxShadow: `0 0 5px #3fd7ff`,
    },

    FooterContainer:{
        padding: '60px 0 20px 0',
        width: '100%',
    }

};


export default AppStyle;