import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import { routesConfig } from '../routesConfig.js'

// MUI
import { Box, Divider, IconButton, Typography } from '@mui/material'

// COMPONENTS
import MainDrawer from '../components/MainDrawer/MainDrawer.jsx'
import Particles from '../components/Particles/Particles.jsx';

// PAGES
import Home from '../pages/Home/Home.jsx'
import Projects from '../pages/Projects/Projects.jsx';
import Games from '../pages/Games/Games.jsx';
import Resume from '../pages/Resume/Resume.jsx';
import ProjectInfo from '../pages/ProjectInfo/ProjectInfo.jsx';

// CONTEXT
import { useDevice } from './DeviceContext.jsx';

// STYLES
import AppStyle from "./AppStyle.js";

import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const { isMobile } = useDevice();
  const [isDrawwerOpen, setIsDrawerOpen] = useState(() => !isMobile);
  const [isExiting, setIsExiting] = useState(false);
  const [displayedPath, setDisplayedPath] = useState(window.location.pathname);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setIsDrawerOpen(!isMobile);
  }, [isMobile]);

  const toggleDrawer = () => {
    const newState = !isDrawwerOpen;
    setIsDrawerOpen(newState);
  };

  // Gera o título da página a partir do path
  const getPageTitle = (path) => {
    if (path === '/' || path === '') return '';
    // Pega só o primeiro segmento após a barra
    const firstSegment = path.replace(/^\//, '').split('/')[0];
    if (!firstSegment) return '';
    return firstSegment.charAt(0).toUpperCase() + firstSegment.slice(1);
  };

  const pageTitle = getPageTitle(displayedPath);

  // Animação de saída e entrada ao trocar de rota
  useEffect(() => {
    if (currentPath !== displayedPath) {
      setIsExiting(true);
      const timeout = setTimeout(() => {
        setDisplayedPath(currentPath);
        setIsExiting(false);
      }, 400); // tempo igual ao da animação de saída
      return () => clearTimeout(timeout);
    }
  }, [currentPath, displayedPath]);

  // Define a animação conforme o estado
  const animationStyle = isExiting
    ? { animation: 'PagesLeaveAnimation ease .4s' }
    : { animation: 'PagesEnterAnimation ease .4s' };

  // Renderiza as rotas da página atualmente exibida
  const renderRoutes = () => (
    <Routes location={{ ...location, pathname: displayedPath }}>
      <Route path="/" element={<Navigate to={routesConfig.home.path} />} replace />
      <Route path={routesConfig.home.path} element={<Home />} />

      <Route path={`${routesConfig.projects.path}`} element={<Projects />} />
      <Route path={`${routesConfig.projects.path}/:id`} element={<ProjectInfo />} />

      <Route path={`${routesConfig.games.path}`} element={<Games />} />
      <Route path={`${routesConfig.games.path}/:id`} element={<ProjectInfo />} />


      <Route path={routesConfig.resume.path} element={<Resume />} />
    </Routes>
  );

  return (
    <>
      <Particles />
      <MainDrawer isOpen={isDrawwerOpen} toggleDrawer={toggleDrawer} />

      <Box sx={isDrawwerOpen ? AppStyle.opened : AppStyle.closed}>

        <Box sx={{ ...AppStyle.MainContainer, ...animationStyle }}>

          <Box sx={AppStyle.HeaderContainer}>
            <Typography variant="h3" align="left" sx={{ ...AppStyle.PathText }}>
              {pageTitle}
              {isMobile &&
                <IconButton onClick={toggleDrawer} sx={AppStyle.IconButtonMobile}>
                  <MenuIcon />
                </IconButton>
              }
            </Typography>
            <Divider variant='fullWidth' />
          </Box>
          {renderRoutes()}
        </Box>
      </Box >

      <Box sx={AppStyle.FooterContainer}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Guilherme Peres. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Made using React and MUI.
        </Typography>
      </Box >

    </>
  );
};

export default App