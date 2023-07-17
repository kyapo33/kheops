import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import routes from './config/app.routes';
import { RouterProvider } from 'react-router';

function App() {
    const router = createBrowserRouter(routes);

    return (
        <RouterProvider router={router} />
    );
}

export default App;