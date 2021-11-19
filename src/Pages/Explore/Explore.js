import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secret-everglades-74123.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <Container sx={{ py: 15 }}>
                <Typography variant='h3' style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }}>
                    Explore Our Products
                </Typography>
                <hr style={{ width: '20%' }} />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2} style={{ width: '90%' }}>
                        {
                            products.map(product => <ExploreProduct
                                key={product._id}
                                product={product}
                            >
                            </ExploreProduct>)
                        }
                    </Grid>
                </div>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Explore;