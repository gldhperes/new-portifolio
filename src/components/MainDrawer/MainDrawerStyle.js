const MainDrawer = {
    height: '100%',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'all 3s ease',
    // overflow: 'visible',
};

const DrawerPaperStyle = {
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px',
    padding: '70px 10px',
    transition: 'all 0.3s ease',
    overflow: 'visible',
}

const MainDrawerStyle = {
    DrawerAvatar: {
        minWidth: 0,
        padding: 0,
        background: 'none',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    DrawerNavButton: {
        marginBottom: 8,
        fontWeight: 500,
        fontSize: '1em',
        textTransform: 'none',
        borderRadius: 8,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: '#36393E',
            color: '#F8AF0A',
        },
    },

    AvatarBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        height: 'auto',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
    },

    DrawerOpened: {
        ...MainDrawer,

        '& .MuiDrawer-paper': {
            ...DrawerPaperStyle,
            width: '300px', // Desktop: largura fixa
        },
    },

    DrawerCollapsed: {
        ...MainDrawer,

        '& .MuiDrawer-paper': {
            ...DrawerPaperStyle,
            width: '150px',
        },
        '& .MuiButton-root': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.5em',
            '& .MuiButton-icon': {
                margin: 0,
            },
        },
    },

    IconButton: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 20,
        right: -20,
        zIndex: 2,
        color: "primary.light",
        backgroundColor: 'background.paper',
        border: '1px solid',
        boxShadow: `0 0 5px #3fd7ff`,

        '&:hover': {
            color: "warning.main",
            backgroundColor: '#424549',
            boxShadow: `0 0 5px #ffb50a`,
        },
    },
    Avatar: {
        transition: 'all 0.3s ease',
    },
    NameText: {
        fontSize: '22px',
        // fontFamily: 'Aurebesh', 
    },
    JobText: {
        fontSize: '.7em',
        // fontFamily: 'Aurebesh',
    },
};

export default MainDrawerStyle;