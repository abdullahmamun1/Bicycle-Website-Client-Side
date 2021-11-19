import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://secret-everglades-74123.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDeleteProduct = (id) => {

        const proceed = window.confirm('Do you want to delete this product?');
        if (proceed) {
            fetch(`https://secret-everglades-74123.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted')
                    }
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }

    return (
        <Container style={{ width: '80%' }}>
            {products.map(product =>
                <Grid key={product._id} container spacing={2} style={{ backgroundColor: '#5964b4', color: '#fff', padding: '10px 5px', margin: '20px 0' }}>
                    <Grid item xs={12} md={4}>
                        <img width="80%" src={product.img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant="caption">
                            {product.description}
                        </Typography>
                        <Typography variant="h6">
                            Price: {product.price}
                        </Typography>
                        <Button onClick={() => handleDeleteProduct(product._id)} style={{ color: '#5964b4', backgroundColor: 'white', marginTop: 10, marginRight: 8 }}>Delete</Button>
                    </Grid>
                </Grid>

            )}
        </Container>
    )
};

export default ManageProducts;