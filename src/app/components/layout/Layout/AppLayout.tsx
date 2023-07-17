import { Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import AppHeader from '../../partials/Header/AppHeader';

const AppLayout = () => {

    return (
        <Stack>
            <AppHeader />
            <Stack className='container' position="relative" top="85px">
                <Outlet />
            </Stack>
        </Stack >
    );
}

export default React.memo(AppLayout);
