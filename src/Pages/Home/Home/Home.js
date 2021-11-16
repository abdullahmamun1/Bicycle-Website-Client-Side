import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Navbar from '../../Shared/Navbar/Navbar';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../../Shared/Footer/Footer';
import useAuth from '../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {
    const { isLoading } = useAuth()
    if (isLoading) {
        return (
            <div style={{ position: 'relative', top: 100, display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="secondary" />
            </div>
        )
    }
    return (
        <div id="home">
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};



export default Home;