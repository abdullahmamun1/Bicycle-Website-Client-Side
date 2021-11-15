import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id="products">
            <Typography variant='h3' style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }} sx={{ mt: 4 }}>
                Popular Products
            </Typography>
            <hr style={{ width: '20%' }} />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid container spacing={2} style={{ width: '90%' }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </Grid>
            </div>
        </div>
    );
};

export default Products;