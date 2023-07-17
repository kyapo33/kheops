import { RouteObject } from 'react-router';
import HomeView from '../components/views/HomeView/HomeView';
import AppLayout from '../components/layout/Layout/AppLayout';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <HomeView /> },
        ],
    },
];

export default routes;
