import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {

    const { name, description, price, img, _id } = product
    return (
        <Grid item xs={12} md={6} lg={4} >
            <Card sx={{ maxWidth: '100%' }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <CardMedia
                    component="img"
                    height="325"
                    image={img}
                    alt="cycle"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: '#5964b4', fontWeight: 700 }}>
                        {name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {description} <br />
                        <Typography variant="h6" style={{ fontWeight: 700 }}> Price: {price}</Typography>
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }} sx={{ mb: 1 }}>
                    <NavLink style={{ textDecoration: 'none' }} to={`/purchase/${_id}`} ><Button style={{ backgroundColor: '#5964b4', color: 'white' }}>Buy Now</Button></NavLink>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default Product;