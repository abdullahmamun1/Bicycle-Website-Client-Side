import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div style={{ backgroundColor: '#5964b4', padding: '50px 0' }}>
            <div style={{ textAlign: 'center', color: '#fff' }}>
                <Typography variant='h3' style={{ fontWeight: 700 }} sx={{ mt: 4 }}>
                    Subscribe to Newsletter
                </Typography>
                <Typography variant='caption' sx={{ mt: 4, px: 2 }}>
                    Subscribe to our newsletter to get latest updates, and know more about our products.
                </Typography>
            </div>
            <hr style={{ width: '20%' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
                <div className="form-mobile">
                    <TextField
                        placeholder="Email"
                        type="email"
                        style={{ width: '100%', borderRadius: '5px', backgroundColor: '#fff', marginBottom: '5px' }}
                    />
                    <div >
                        <Button className="submit-btn" type="submit" style={{ height: '53px', backgroundColor: '#fff', color: '#5964b4', marginLeft: 5 }} variant="contained">Subscribe</Button>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default NewsLetter;