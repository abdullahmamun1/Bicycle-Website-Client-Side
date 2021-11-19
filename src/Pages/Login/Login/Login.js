import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import bike from '../../../images/loginBike.png';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const location = useLocation();
    const history = useHistory()

    const { user, loginUser, isLoading, error } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, history, location)
        e.preventDefault();
    }

    return (
        <>
            <Container>
                <div>
                    <Typography variant='h3' style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }} sx={{ my: 4 }}>
                        Please Login
                    </Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>

                        {isLoading ?
                            <div style={{ position: 'relative', top: 100, display: 'flex', justifyContent: 'center' }}>
                                <CircularProgress color="secondary" />
                            </div>
                            :
                            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <TextField
                                        id="outlined-email-input"
                                        label="Email"
                                        type="email"
                                        name="email"
                                        onBlur={handleOnChange}
                                        autoComplete="current-email"
                                        style={{ width: '80%', margin: '20px 0' }}
                                    />
                                    <TextField
                                        id="outlined-password-input"
                                        label="Password"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnChange}
                                        autoComplete="current-password"
                                        style={{ width: '80%' }}
                                    />
                                    <Typography style={{ margin: '20px 0' }}>
                                        New User? <Link to="/register"> Please Register.</Link>
                                    </Typography>
                                    <Button type="submit" style={{ width: '80%', backgroundColor: '#5964b4' }} variant="contained">Login</Button>
                                    <Typography style={{ margin: '20px 0' }}>
                                        <NavLink to="/home">
                                            Back to Home
                                        </NavLink>
                                    </Typography>
                                </div>
                            </form>}
                        {user.email && <Alert severity="success">User logged in Successfully</Alert>}
                        {error && <Alert severity="warning">{error}</Alert>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div>
                            <img src={bike} width="80%" alt="" />
                        </div>
                    </Grid>
                </Grid>


            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;