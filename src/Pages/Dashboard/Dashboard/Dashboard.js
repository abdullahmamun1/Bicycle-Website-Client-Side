import * as React from 'react';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logOut, user, admin } = useAuth()
    let { path, url } = useRouteMatch();
    const useStyle = makeStyles({
        navItem: {
            textDecoration: 'none',
            margin: '0 10px'
        }
    })
    const { navItem } = useStyle()


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />


            <List>
                <ListItem button >
                    <ListItemText > <NavLink className={navItem} to="/home" style={{ color: '#5964b4' }}>Back to Homepage</NavLink></ListItemText>
                </ListItem>
                {
                    !admin &&
                    <Box>

                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/pay`} style={{ color: '#5964b4' }}>Pay</NavLink></ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/orders/${user.email}`} style={{ color: '#5964b4' }}>My orders</NavLink></ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/addReview`} style={{ color: '#5964b4' }}>Add a Review</NavLink></ListItemText>
                        </ListItem>
                        <Divider />
                    </Box>
                }
                {
                    admin &&
                    <Box>
                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/manageOrders`} style={{ color: '#5964b4' }}>Manage All Orders</NavLink></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/addProduct`} style={{ color: '#5964b4' }}>Add a Product</NavLink></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/makeAdmin`} style={{ color: '#5964b4' }}>Make Admin</NavLink></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemText > <NavLink className={navItem} to={`${url}/manageProducts`} style={{ color: '#5964b4' }}>Manage Products</NavLink></ListItemText>
                        </ListItem>
                    </Box>
                }
                <Divider />
                <ListItem button onClick={logOut} >
                    <ListItemText > <Button style={{ color: '#5964b4' }} >Log Out</Button></ListItemText>
                </ListItem>

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#5964b4'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/orders/:email`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${url}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;