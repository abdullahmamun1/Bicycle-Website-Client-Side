import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Purchase = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    console.log(product.description);

    return (
        <>
            <Navbar></Navbar>
            <Container sx={{ pt: 15 }}>
                <Typography variant="h3" style={{ fontWeight: 700, color: '#5964b4', textAlign: 'center' }}>
                    Product details
                </Typography>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={product.img} width="70%" alt="" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom variant="h4" component="div" style={{ color: '#5964b4', fontWeight: 700 }}>
                                {product.name}

                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Frame: {product.description.frame} <br />
                                Brakes: {product.description.brake}<br />
                                Chainwheel: {product.description.chainwheel}<br />
                                Tire: {product.description.tires}<br />
                                Size: {product.description.size}<br />
                                <span style={{ fontWeight: 700 }}> Price: {product.description.price}</span>
                            </Typography>

                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
};
const a = [{
    name: "Upland Spyker 700",
    description: `Frame : LIGHT ALUMINUIM 6061-T6 TB, Brake: HAYES DOYNO SPORT,180/160MM, Chainwheel: SHIMANO FC-M391 44/32/22T, Tires: SCHWALBE 26" 2.1", Size: 26" 17"`,
    img: "https://i.ibb.co/5YLjXP0/bike-1.jpg"
},
{
    name: "Upland Count 500",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Brake: TEKTRO NOVELA 160MM,Chainwheel: SHIMANO FC-M391 44/32/22T , Tires: SCHWALBE 26" 2.1",Size: 26" 17"`,
    Price: 32000,
    img: "https://i.ibb.co/BzSTLpc/bike-2.jpg"
},
{
    name: "Upland Fusion Fully",
    description: `Frame: FUSION TP AL 100MM, Chainwheel: SHIMANO FC-M391 44/32/22T, Brake: HAYES DOYNO SPORT,180/160MM, Tires: SCHWALBE 26" 2.1", Size: 26" 18"`,
    price: 47000,
    img: "https://i.ibb.co/Z8pjYc8/bike-3.jpg"
},
{
    name: "Upland Count 700",
    description: ` Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: SHIMANO FC-M391 44/32/22T, Brake: HAYES OYNO SPORT,160MM, Tires: SCHWALBE 26" 2.1", Size: 26" 17"`,
    price: 41000,
    img: "https://i.ibb.co/CW31YST/bike-4.jpg"
},
{
    name: "Upland X80",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: GT24 - S377CP 42/34/24T, Brake: PROMAX DSK - 320, 160MM, Tires: KENDA 26" * 1.95", Size:26" 16"`,
    price: 21500,
    img: "https://i.ibb.co/1dZ268V/bike-5.jpg"
},
{
    name: "Upland Vanguard 100",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: Shimano FC-M171 34/24T 170mm, Brake: Promax TX-117- V Brake, Tires: KENDA 26" * 1.95", Size: 26" 16"`,
    price: 18500,
    img: "https://i.ibb.co/tHZfYwk/bike-6.jpg"
},
{
    name: "Upland Vanguard 300",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: Shimano ALTUS FC-M311 42T 170mm, Brake: Promax DSK-320 disc-Break 160mm, Tires: KENDA 26" * 1.95", Size: 26" 16"`,
    price: 25500,
    img: "https://i.ibb.co/VpGYswD/bike-7.jpg"
},
{
    name: "Upland Leader 500",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: Shimano ALTUS FC-M311 42T 170mm, Brake:HAYES MX5 Disc-Brake 160mm, Tires: Kenda K879 26*1.95, Size: 26" 16"`,
    price: 33000,
    img: "https://i.ibb.co/q7hsg0w/bike-8.jpg"
},
{
    name: "Upland Vanguard 200",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: Shimano FC-M171- 42T -170mm, Brake: Promax DSK-320 Disc-Brake 160mm, Tires: Kenda K879 26*1.95, Size: 26" 16"`,
    price: 23000,
    img: "https://i.ibb.co/JzWctht/bike-9.jpg"
},
{
    name: "Upland Leader 300",
    description: `Frame: LIGHT ALUMINUIM 6061-T6 TB, Chainwheel: Shimano ALTUS FC-M311 32T 170mm, Brake: Promax DSK-320 Disc-Brake 160mm, Tires: Kenda K879 26*1.95, Size: 26" 16"`,
    price: 28000,
    img: "https://i.ibb.co/10tDWpG/bike-10.jpg"
}
]

export default Purchase;