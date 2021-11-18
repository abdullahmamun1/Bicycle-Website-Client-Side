import { Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {
    const { name, rating, reviewDescription } = review
    return (
        <Grid item xs={12} md={4} style={{
            backgroundColor: '#5964b4', color: '#fff', margin: '50px 25px', textAlign: 'center'
            , padding: '30px 15px'
        }}>
            <Typography variant="h4">
                {name}
            </Typography >
            <Typography variant="caption">
                {reviewDescription}
            </Typography><br />
            <Rating
                readonly
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
            />
        </Grid>

    );
};

export default Review;


