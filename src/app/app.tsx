import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import routes from './config/app.routes';
import { RouterProvider } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
    const router = createBrowserRouter(routes);

    const THEME = createTheme({
        typography: {
            "fontFamily": `'Kumbh Sans', sans-serif`,
        }
    });

    return (
        <ThemeProvider theme={THEME}>
            <RouterProvider router={router} />
        </ThemeProvider>

    );
}

export default App;