import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    fetch('https://secret-everglades-74123.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))


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

    const handleUpdateOrder = (id) => {

        fetch(`https://secret-everglades-74123.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders.map(order => order.status))
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    window.location.reload();
                    alert('update successful');
                }
            })

    }

    return (
        <div>
            <Typography variant="h3" style={{ fontWeight: 700, textAlign: 'center', color: '#5964b4' }}>
                Manage All Orders
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

                        <Button onClick={() => handleDeleteOrder(order._id)} style={{ color: '#5964b4', backgroundColor: 'white', marginTop: 10, marginRight: 8 }}>Delete</Button>
                        <Button onClick={() => handleUpdateOrder(order._id)} style={{ color: '#5964b4', backgroundColor: 'white', marginTop: 10 }}>Update</Button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;