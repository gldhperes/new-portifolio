import { Visibility } from '@mui/icons-material';
import MainDrawerStyle from './MainDrawerStyle.js';

const MainDrawerStyleMobile = {
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
        ...MainDrawerStyle.DrawerOpened,


        // ...MainDrawerStyle.DrawerPaperStyle,
        '& .MuiDrawer-paper': {
            backgroundColor: 'primary.dark',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '16px',
            padding: '70px 10px',
            transition: 'all 0.3s ease',
            overflow: 'visible',

            width: '100%', // Mobile: ocupa toda a largura
        },

    },
    DrawerCollapsed: {
        ...MainDrawerStyle.DrawerCollapsed,
        
        
        '& .MuiDrawer-paper': {
            width: '0%', // Mobile: drawer fechado
            // display: 'none',
            visibility: 'hidden',
        },

    },

    IconButton: {
        display: 'none',
    }
};

export default MainDrawerStyleMobile;
