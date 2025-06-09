import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

import { routesConfig } from '../routesConfig.js'

// MUI
import { Box, Divider, Typography } from '@mui/material'

// COMPONENTS
import MainDrawer from '../components/MainDrawer/MainDrawer.jsx'

// PAGES
import Home from '../pages/home/Home.jsx'
import Projects from '../pages/Projects/Projects.jsx';
import Games from '../pages/Games/Games.jsx';

// STYLES
import AppStyle from "./AppStyle.js";

const App = () => {

  const [isDrawwerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    const newState = !isDrawwerOpen;
    setIsDrawerOpen(newState);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  // Opcional: transformar "/projects" em "Projects", etc.
  const getPageTitle = (path) => {
    if (path === '/') return 'Home';
    return path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
  };

  const pageTitle = getPageTitle(currentPath);

  // Animação de transição: triggera ao trocar de rota
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setAnimate(false);
    console.log(animate);

    const timeout = setTimeout(() => setAnimate(true), 100); // trigger reflow
    return () => clearTimeout(timeout);
  }, [currentPath]);

  return (
    <>
      <MainDrawer isOpen={isDrawwerOpen} toggleDrawer={toggleDrawer} />

      <Box sx={{ ...(isDrawwerOpen ? AppStyle.opened : AppStyle.closed) }}>

        <Box
          sx={AppStyle.MainContainer}      
          clasName={animate ? "animate" : ''}>
          <Box sx={AppStyle.HeaderContainer}>
            <Typography variant="h3" align="left">
              {pageTitle}
            </Typography>
            <Divider variant='fullWidth' />
          </Box>

          <Routes>
            <Route path={routesConfig.home.path} element={<Home />} />
            <Route path={routesConfig.projects.path} element={<Projects />} />
            <Route path={routesConfig.games.path} element={<Games />} />
          </Routes>
        </Box>
      </Box>
    </>
  )
}

export default App