import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import bg from '../../../images/bg-cycle.jpg'

const Banner = () => {
    return (
        <div style={{
            height: '550px', overflow: "hidden", background: `rgba(0,0,0,0.7)url(${bg})`, backgroundSize: '100% auto', backgroundBlendMode: 'darken', display: 'flex', alignItems: 'center'
        }}>
            <Container >
                <div>
                    <Typography variant='h3' style={{ fontWeight: 700, color: 'white' }}>
                        We have the best collections of<br /> <span style={{ color: '#5964b4' }}> bicycles</span> in our shop
                    </Typography>
                    <Typography variant='p' style={{ color: 'white' }}>
                        We work hard to provide our customers best bicycles of the world
                    </Typography>
                </div>

                <NavLink style={{ textDecoration: 'none' }} to="/explore"><Button style={{ backgroundColor: '#5964b4', color: 'white' }} sx={{ mt: 2 }}>Explore More</Button></NavLink>
            </Container>
        </div >
    );
};

export default Banner;