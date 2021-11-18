import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container id="reviews">
            <Typography variant='h3' style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }} sx={{ mt: 4 }}>
                Happy Client Says
            </Typography>
            <hr style={{ width: '20%' }} />

            <Grid container spacing={2}>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Grid>
            <div>

            </div>

        </Container>
    );
};

export default Reviews;