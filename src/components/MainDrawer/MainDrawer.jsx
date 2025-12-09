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
import MainDrawerStyleMobile from "./MainDrawerStyleMobile.js";

// Perfil
import FotoPerfil from '../../assets/perfil.jpg';

//Config
import { useDevice } from '../../app/DeviceContext.jsx';
import { useNavigate } from 'react-router-dom';
import { routesConfig } from '../../routesConfig.js';



const MainDrawer = ({ isOpen, toggleDrawer }) => {
    const navigate = useNavigate();
    const { isMobile } = useDevice();
    const style = isMobile ? MainDrawerStyleMobile : MainDrawerStyle;

    return (
        <Drawer
            variant="permanent"
            open={isOpen}
            anchor="left"
            sx={isOpen ? style.DrawerOpened : style.DrawerCollapsed}
        >
            <IconButton onClick={toggleDrawer} sx={style.IconButton}>
                {isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
            </IconButton>

            <Box sx={style.DrawerAvatar}>
                <AvatarBox isOpen={isOpen} style={style} />
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
                <DrawerNavigationButton isOpen={isOpen} icon={<routesConfig.home.icon />} label={routesConfig.home.label} onClick={() => { isMobile && toggleDrawer(); navigate(routesConfig.home.path);}} isSelected={location.pathname === routesConfig.home.path}/>
                <DrawerNavigationButton isOpen={isOpen} icon={<routesConfig.projects.icon />} label={routesConfig.projects.label} onClick={() => { isMobile && toggleDrawer(); navigate(routesConfig.projects.path); }} isSelected={location.pathname === routesConfig.projects.path}/>
                <DrawerNavigationButton isOpen={isOpen} icon={<routesConfig.games.icon />} label={routesConfig.games.label} onClick={() => { isMobile && toggleDrawer(); navigate(routesConfig.games.path); }} isSelected={location.pathname === routesConfig.games.path}/>
                <DrawerNavigationButton isOpen={isOpen} icon={<routesConfig.resume.icon />} label={routesConfig.resume.label} onClick={() => { isMobile && toggleDrawer(); navigate(routesConfig.resume.path); }} isSelected={location.pathname === routesConfig.resume.path}/>
                {/* <DrawerNavigationButton icon={<routesConfig.aboutMe.icon />} label={routesConfig.aboutMe.label} onClick={() => { isMobile && toggleDrawer(); navigate(routesConfig.aboutMe.path); }} isSelected={location.pathname === routesConfig.aboutMe.path}/> */}
            </Box>
        </Drawer >
    );
}




const AvatarBox = ({ isOpen, style = MainDrawerStyle }) => {
    return (
        <Box sx={style.AvatarBox}>
            <Avatar
                src={FotoPerfil}
                alt="Profile Avatar"
                sx={isOpen ? { ...style.Avatar, width: 140, height: 140 } : { ...style.Avatar, width: 90, height: 90 }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <Typography variant="avatarText" sx={isOpen ? style.NameText : { ...style.NameText, fontSize: '1em' }}>
                    Guilherme Peres
                </Typography>

                <Divider sx={{ width: '100%', margin: '8px 0' }} />

                <Typography variant="avatarText" sx={isOpen ? style.JobText : { ...style.JobText, fontSize: '.6em' }}>
                    Frontend Developer
                </Typography>
            </Box>
        </Box>
    );
}

export default MainDrawer;
