import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminDubmit = e => {
        e.preventDefault()
        const user = { email }
        fetch('https://secret-everglades-74123.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
                <Typography style={{ fontWeight: 700, textAlign: 'center' }} variant="h4">
                    Add as an Admin
                </Typography>
                <form style={{ margin: '30px 0' }} onSubmit={handleAdminDubmit}>
                    <TextField
                        type="email"
                        label="Email"
                        onBlur={handleOnBlur}
                        variant="standard"
                        style={{ width: '100%' }} />
                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
                        <Button type="submit" style={{ backgroundColor: '#5964b4', color: 'white' }}>Make Admin</Button>
                    </div>
                </form>
                {success && <Alert severity="success">User has been added as an admin</Alert>}
            </div>
        </div>
    );
};

export default MakeAdmin;