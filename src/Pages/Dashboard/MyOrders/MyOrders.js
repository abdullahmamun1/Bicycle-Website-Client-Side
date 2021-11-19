import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()


    useEffect(() => {
        const url = `https://secret-everglades-74123.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const userOrder = data.filter(order => order.email === user.email)
                setOrders(userOrder)
            })
    }, [user.email])


    const handleDeleteOrder = (id) => {

        const proceed = window.confirm('Do you want to delete this order?');
        if (proceed) {
            fetch(`https://secret-everglades-74123.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted')
                    }
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                })
        }
    }

    return (
        <div>
            <Typography variant="h3" style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }}>
                My Orders
            </Typography>
            <hr style={{ width: '10%', marginTop: 2 }} />
            {
                orders.map(order => <div key={order._id}>
                    <div style={{ backgroundColor: '#5964b4', color: '#fff', padding: '40px 20px', margin: '30px 0' }}>
                        <Typography variant="caption">
                            Order No - {order._id}
                        </Typography><br />
                        <Typography variant="body11">
                            Name: {order.name}
                        </Typography>
                        <Typography>
                            Email: {order.email}
                        </Typography>
                        <Typography>
                            Address: {order.address}
                        </Typography>
                        <Typography>
                            Product Name: {order.productName}
                        </Typography>
                        <Typography>
                            Phone Number: {order.phone}
                        </Typography>
                        <Typography>
                            Status: {order.status}
                        </Typography>

                        <Button onClick={() => handleDeleteOrder(order._id)} style={{ color: '#5964b4', backgroundColor: 'white', marginTop: 10 }}>Delete</Button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;