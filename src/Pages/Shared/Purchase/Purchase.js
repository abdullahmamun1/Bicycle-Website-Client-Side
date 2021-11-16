import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Purchase = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])



    return (
        <>
            <Navbar></Navbar>
            <Container sx={{ pt: 15 }}>
                <Typography variant="h3" style={{ fontWeight: 700, color: '#5964b4', textAlign: 'center' }}>
                    Product details
                </Typography>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={product.img} width="70%" alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h4" component="div" style={{ color: '#5964b4', fontWeight: 700 }}>
                                {product.name}
                            </Typography>

                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
};

export default Purchase;