const MainBox =
{
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '30px',


    color: 'white',

    paddingTop: '20px',
    paddingRight: '250px',

    transition: 'all .4s ease-in',
}

const AppStyle = {

    opened: {
        ...MainBox,
        paddingLeft: '400px',
    },

    closed: {
        ...MainBox,
        paddingLeft: '250px',
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

};


export default AppStyle;