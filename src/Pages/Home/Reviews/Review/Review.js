import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const Review = ({ review }) => {
    const { name, rating, reviewDescription } = review
    return (
        <Grid item xs={12} md={4} style={{ display: 'flex' }} >
            <Card sx={{ minWidth: '100%' }} style={{
                backgroundColor: '#5964b4', color: '#fff', textAlign: 'center'
                , display: 'flex', padding: '20px 5px', flexDirection: 'column', justifyContent: 'space-between'
            }}>
                <CardContent>
                    <Typography variant="h4">
                        {name}
                    </Typography >

                    <Typography variant="caption">
                        {reviewDescription}
                    </Typography><br />

                </CardContent>
                <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                />
            </Card>
        </Grid>

    );
};

export default Review;


