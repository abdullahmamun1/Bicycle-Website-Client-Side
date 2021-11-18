import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm()
    const history = useHistory()


    const onSubmit = data => {
        axios.post('http://localhost:5000/reviews', data)
            .then((res) => {
                if (res.data.insertedId) {
                    alert('Review added Successfully')
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
                Write a Review
                <hr style={{ width: '15%', marginTop: 2 }} />
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
                <select style={{ padding: '18px 10px', borderRadius: '5px', width: '80%', margin: '8px 0' }}  {...register("rating", { required: true })} placeholder="Please Select your product" >
                    <option value="" selected disabled>Select your rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <TextField
                    placeholder="Write your review"
                    multiline
                    rows={2}
                    rowsMax={5}
                    {...register("reviewDescription", { required: true })}
                    style={{ width: '80%', margin: '8px 0' }}
                />
                <Button type="submit" style={{ width: '80%', backgroundColor: '#5964b4' }} variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default AddReview;