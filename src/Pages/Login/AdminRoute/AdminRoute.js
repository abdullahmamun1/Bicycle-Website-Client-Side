import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth()

    if (isLoading) {
        return (
            <div style={{ position: 'relative', top: 100, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="secondary" />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;