import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../Navbar/Navbar';
import './Purchase.css'

const Purchase = () => {
    const { user } = useAuth()
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { register, handleSubmit } = useForm()
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const onSubmit = data => {
        axios.post('http://localhost:5000/orders', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Order added Successfully')
                    history.push('/')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>
            <Navbar></Navbar>
            <Container sx={{ pt: 15 }}>
                <div>
                    <Typography variant="h3" style={{ fontWeight: 700, color: '#5964b4', textAlign: 'center' }}>
                        Product details
                        <hr style={{ width: '20%', marginTop: 2 }} />
                    </Typography>

                    <Grid container spacing={1} sx={{ mt: 6 }}>
                        <Grid item xs={12} md={6} className="product-img" >
                            <img style={{ border: '2px solid #5964b4', borderRadius: '30px' }} src={product.img} width="70%" alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                <Typography gutterBottom variant="h3" component="div" style={{ color: '#5964b4', fontWeight: 700 }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {product.description} <br />
                                </Typography>
                                <Typography variant="h4" style={{ fontWeight: 700 }} sx={{ mt: 4 }}> Price: {product.price}</Typography>
                            </div>

                        </Grid>
                    </Grid>
                </div>
                <div style={{ margin: '80px 0' }}>
                    <Typography variant="h3" style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }}>
                        Shipping Information
                        <hr style={{ width: '20%', marginTop: 2 }} />
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="form" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                        <TextField
                            defaultValue={user.displayName}
                            type="text"
                            label="Name"
                            name="name"
                            {...register("name")}
                            style={{ width: '80%', margin: '8px 0' }}
                        />
                        <TextField
                            defaultValue={user.email}
                            type="email"
                            label="Email"
                            name="email"
                            {...register("email")}
                            style={{ width: '80%', margin: '8px 0' }}
                        />
                        <select style={{ padding: '18px 10px', borderRadius: '5px', width: '80%', margin: '8px 0' }}  {...register("productName", { required: true })} placeholder="Please Select your product" >
                            <option value="" selected disabled>Please Select your product</option>
                            <option value={product.name}>{product.name}</option>
                        </select>
                        <TextField
                            value={product.price}
                            name="price"
                            readOnly
                            {...register("price")}
                            style={{ width: '80%', margin: '8px 0' }}
                        />
                        <TextField
                            type="text"
                            label="Address"
                            name="address"
                            {...register("address", { required: true })}
                            style={{ width: '80%', margin: '8px 0' }}
                        />
                        <TextField
                            type="text"
                            label="Phone Number"
                            name="phone"
                            {...register("phone", { required: true })}
                            style={{ width: '80%', margin: '8px 0' }}
                        />

                        <TextField
                            name="status"
                            label="Status"
                            defaultValue="Pending"
                            InputProps={{
                                readOnly: true,
                            }}
                            {...register("status")}
                            style={{ color: 'gray', width: '80%', margin: '8px 0' }}
                        />

                        <Button type="submit" style={{ width: '80%', backgroundColor: '#5964b4' }} variant="contained">Submit</Button>
                    </form>
                </div>
            </Container>
        </>
    );
};


export default Purchase;