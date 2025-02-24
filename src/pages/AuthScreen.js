import React, { useState, useMemo, useEffect } from 'react';
import { Tabs, Tab, Card, CardContent, Typography, TextField, Button, Box, CssBaseline, ThemeProvider, createTheme, LinearProgress } from '@mui/material';
import { ThemeProvider as Emotion10ThemeProvider } from '@emotion/react';
import { useTheme } from '@mui/system';
import { orangeDarkTheme, orangeLightTheme, basicTheme, darkTheme, lightTheme, customTheme, blueLightTheme, blueDarkTheme, greenLightTheme, greenDarkTheme, redLightTheme, redDarkTheme } from '../Layout/themes';
import { GlobalStyles } from '../Layout/GlobalStyle';
import { useNavigate } from 'react-router-dom';
import useApi from '../hooks/APIHandler';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Home from './Home.js';

const AuthScreen = () => {
  const [tab, setTab] = useState(0);
  const [themeMode, setThemeMode] = useState('basic');
  const navigate = useNavigate();
  const { callApi, error, loading } = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'basic';
    setThemeMode(savedTheme);
  }, []);

  let theme = useMemo(() => {
    switch (themeMode) {
      case 'basic':
        return createTheme(basicTheme);
      case 'dark':
        return createTheme(darkTheme);
      case 'light':
        return createTheme(lightTheme);
      case 'custom':
        return createTheme(customTheme);
      case 'blue light':
        return createTheme(blueLightTheme);
      case 'blue dark':
        return createTheme(blueDarkTheme);
      case 'green light':
        return createTheme(greenLightTheme);
      case 'green dark':
        return createTheme(greenDarkTheme);
      case 'red light':
        return createTheme(redLightTheme);
      case 'red dark':
        return createTheme(redDarkTheme);
      case 'orange light':
        return createTheme(orangeLightTheme);
      case 'orange dark':
        return createTheme(orangeDarkTheme);
      default:
        return createTheme(lightTheme);
    }
  }, [themeMode]);

  const goHome = () => {
    navigate('/ReactMUIDashboard/');
  };

  return (
    <Emotion10ThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: theme.palette.background.default
          }}
        >
          <Card sx={{ maxWidth: 400, width: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <img src={theme.logo.square} alt="Logo" style={{ borderRadius: '50%', width: '100px' }} />
              </Box>
              <Typography variant="h5" align="center" gutterBottom>
                Ezymarket
              </Typography>
              
            </CardContent>
          </Card>
        </Box>
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export default AuthScreen;
