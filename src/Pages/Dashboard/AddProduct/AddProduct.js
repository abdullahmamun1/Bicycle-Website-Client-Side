import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit } = useForm()
    const history = useHistory()


    const onSubmit = data => {
        axios.post('https://secret-everglades-74123.herokuapp.com/products', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Product added Successfully')
                    history.push('/')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <Typography variant="h3" style={{ fontWeight: 700, color: '#5964b4', textAlign: 'center' }}>
                Add a Product
                <hr style={{ width: '15%', marginTop: 2 }} />
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="form" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                <TextField
                    type="text"
                    label="Product Name"
                    name="productName"
                    {...register("name")}
                    style={{ width: '80%', margin: '8px 0' }}
                />
                <TextField
                    type="text"
                    label="Price"
                    name="price"
                    {...register("price")}
                    style={{ width: '80%', margin: '8px 0' }}
                />
                <TextField
                    type="text"
                    label="Image URL"
                    name="img"
                    {...register("img")}
                    style={{ width: '80%', margin: '8px 0' }}
                />
                <TextField
                    placeholder="Product Description"
                    multiline
                    rows={2}
                    {...register("description", { required: true })}
                    style={{ width: '80%', margin: '8px 0' }}
                />
                <Button type="submit" style={{ width: '80%', backgroundColor: '#5964b4' }} variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default AddProduct;

