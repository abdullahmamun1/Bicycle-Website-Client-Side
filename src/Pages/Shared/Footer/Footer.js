import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#5964b4', marginTop: '100px' }}>
            <div style={{ padding: '60px 60px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} >
                        <div>
                            <HashLink to="/home#home" style={{ textDecoration: 'none', fontSize: 30, fontWeight: 700, color: '#fff' }} >
                                <Typography variant="h4">Bicycler's<br /> Shop</Typography>
                            </HashLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">
                            Quick Links
                        </Typography>
                        <div>
                            <HashLink style={{ textDecoration: 'none', color: '#fff' }} smooth to="/home#home">Home</HashLink><br />
                            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to="/explore">Explore</NavLink> <br />
                            <HashLink style={{ textDecoration: 'none', color: '#fff' }} smooth to="/home#products">Products</HashLink><br />
                            <HashLink style={{ textDecoration: 'none', color: '#fff' }} smooth to="/home#reviews">Reviews</HashLink>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h1>a</h1>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
};

export default Footer;