// MUI
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    IconButton,
    Typography,
} from '@mui/material';


// Icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

//Componentes
import DrawerNavigationButton from "./DrawerNavigationButton.jsx";

// Styles
import MainDrawerStyle from "./MainDrawerStyle.js";

// Perfil
import FotoPerfil from '../../assets/perfil.jpg';

//Config
import { useNavigate } from 'react-router-dom';
import { routesConfig } from '../../routesConfig.js';

const MainDrawer = ({ isOpen, toggleDrawer }) => {

    const navigate = useNavigate();

    return (

        <Drawer
            variant="permanent"
            open={isOpen}
            anchor="left"
            sx={{ ...(isOpen ? MainDrawerStyle.DrawerOpened : MainDrawerStyle.DrawerCollapsed) }}
        >


            <IconButton onClick={toggleDrawer} sx={{ ...(MainDrawerStyle.IconButton) }}                >
                {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>

            <Box sx={{ ...(MainDrawerStyle.DrawerAvatar) }}>
                <AvatarBox isOpen={isOpen} />
            </Box>

            <Divider />

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 16px',
                    gap: '8px',
                }}
            >

                <DrawerNavigationButton icon={<routesConfig.home.icon />} label={routesConfig.home.label} onClick={() => navigate(routesConfig.home.path)} />
                <DrawerNavigationButton icon={<routesConfig.projects.icon />} label={routesConfig.projects.label} onClick={() => navigate(routesConfig.projects.path)} />
                <DrawerNavigationButton icon={<routesConfig.games.icon />} label={routesConfig.games.label} onClick={() => navigate(routesConfig.games.path)} />
                <DrawerNavigationButton icon={<routesConfig.resume.icon />} label={routesConfig.resume.label} onClick={() => navigate(routesConfig.resume.path)} />
                <DrawerNavigationButton icon={<routesConfig.aboutMe.icon />} label={routesConfig.aboutMe.label} onClick={() => navigate(routesConfig.aboutMe.path)} />
            </Box>
        </Drawer >

    );
}


const AvatarBox = ({ isOpen }) => {
    const avatarWidthOpen = 100;
    const avatarWidthClosed = 50;
    return (
        <Box sx={{ ...(MainDrawerStyle.AvatarBox) }}>

            <Avatar
                src={FotoPerfil}
                alt="Profile Avatar"
                className={isOpen ? 'avatar-open' : 'avatar-closed'}
                sx={{ ...(MainDrawerStyle.Avatar) }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="avatarText" sx={MainDrawerStyle.NameTextameText} className={isOpen ? 'avatar-open' : 'avatar-closed'}>
                    Guilherme Peres
                </Typography>

                <Divider sx={{ width: '100%', margin: '8px 0' }} />

                <Typography variant="avatarText" sx={MainDrawerStyle.JobText} className={isOpen ? 'avatar-open' : 'avatar-closed'}>
                    Unity and Web Developer
                </Typography>
            </Box>
        </Box>
    );
}

export default MainDrawer;
