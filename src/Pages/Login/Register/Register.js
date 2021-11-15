import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import bike from '../../../images/loginBike.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        let newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    console.log(loginData);

    const handleLoginSubmit = e => {

        e.preventDefault();
    }

    return (
        <Container>
            <div>
                <Typography variant='h3' style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }} sx={{ my: 4 }}>
                    Please Register
                </Typography>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div>
                        <img src={bike} width="80%" alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>

                    <form onSubmit={handleLoginSubmit} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <TextField
                                id="outlined-name-input"
                                label="Your Name"
                                type="name"
                                name="name"
                                onBlur={handleOnChange}
                                autoComplete="current-name"
                                style={{ width: '80%', margin: '5px 0' }}
                            />
                            <TextField
                                id="outlined-email-input"
                                label="Your Email"
                                type="email"
                                name="email"
                                onBlur={handleOnChange}
                                autoComplete="current-email"
                                style={{ width: '80%', margin: '5px 0' }}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                autoComplete="current-password"
                                style={{ width: '80%', margin: '5px 0' }}
                            />
                            <TextField
                                id="outlined-password-input"
                                label="Re-enter Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnChange}
                                autoComplete="current-password"
                                style={{ width: '80%', margin: '5px 0' }}
                            />
                            <Typography style={{ margin: '20px 0' }}>
                                Already Registered? <Link to="/login" > Please Login.</Link>
                            </Typography>
                            <Button type="submit" style={{ width: '80%', backgroundColor: '#5964b4' }} variant="contained">Register</Button>
                            <Typography style={{ margin: '20px 0' }}>
                                <NavLink to="/home">
                                    Back to Home
                                </NavLink>
                            </Typography>
                        </div>
                    </form>
                </Grid>
            </Grid>


        </Container>
    );
};

export default Register;