import { textFieldClasses } from "@mui/material";

const DrawerAvatar = {
    minWidth: 0,
    padding: 0,

    background: 'none',
    boxShadow: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};


const drawer = {

    height: '100%',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    flexShrink: 0,
    transition: 'width 0.3s ease',


    '& .MuiDrawer-paper': {
        backgroundColor: "primary.main",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '16px',

        padding: '70px 10px',
        transition: 'width 0.3s ease',
        overflow: 'visible',
    },
}


const MainDrawerStyle = {
    DrawerAvatar,

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
        ...drawer,
        '& .MuiDrawer-paper': {
            ...drawer['& .MuiDrawer-paper'],
            width: '300px',
        },
    },

    DrawerCollapsed: {
        ...drawer,

        transition: 'all 0.3s ease',
        '& .MuiDrawer-paper': {
            ...drawer['& .MuiDrawer-paper'],
            width: '150px',
        },

        '& .MuiButton-root': {
            display: 'flex',

            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.5em',

            "& .MuiButton-icon": {
                margin: 0,
            }
        },
    },

    IconButton:
    {

        width: 40,
        height: 40,

        position: 'absolute',
        top: 20,
        right: -20,
        zIndex: 2,

        color: 'text.secondary',
        backgroundColor: 'secondary.light',
        // borderColor: 'secondary.main',

        '&:hover': {
            color: 'text.primary',
            backgroundColor: 'primary.light',
            border: "1px solid",
        },

    },

    Avatar:
    {
        transition: 'all 0.3s ease',

        '&.avatar-open': {
            width: 140,
            height: 140,
        },

        '&.avatar-closed': {
            width: 90,
            height: 90,
        },

    },

    NameText: {
        fontSize: '22px',

        '&.avatar-closed': {
            fontSize: '1em',
        },
    },

    JobText: {
        fontSize: '.7em',
        '&.avatar-closed': {
            fontSize: '.6em',
        },
    },

};

export default MainDrawerStyle;