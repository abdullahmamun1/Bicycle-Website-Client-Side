import { Container, Typography } from '@mui/material';
import React from 'react';

const Reviews = () => {
    return (
        <Container id="reviews">
            <Typography variant='h3' style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }} sx={{ mt: 4 }}>
                Happy Client Says
            </Typography>
            <hr style={{ width: '20%' }} />


        </Container>
    );
};

export default Reviews;