import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
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
                        <Typography variant="h4" style={{ fontWeight: 700 }}>
                            Social Media
                        </Typography>
                        <div>
                            <a href="/home"><FontAwesomeIcon icon={faFacebook} style={{
                                color: '#fff', fontSize: 20, padding: '0 5px'
                            }} /></a>
                            < a href="/home" > <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff', fontSize: 20, padding: '0 5px' }} /></a>
                            <a href="/home"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff', fontSize: 20, padding: '0 5px' }} /></a>
                            <a href="/home"><FontAwesomeIcon icon={faBasketballBall} style={{ color: '#fff', fontSize: 20, padding: '0 5px' }} /></a>
                        </div>
                    </Grid>
                </Grid>

            </div>
            <div style={{ textAlign: 'center', paddingBottom: 20 }}>
                <Typography variant="caption" style={{ color: '#fff' }}>
                    &#169; 2021 Copyright: Smart Tourist Service | All Terms Reserved
                </Typography>
            </div>
        </div >
    );
};

export default Footer;