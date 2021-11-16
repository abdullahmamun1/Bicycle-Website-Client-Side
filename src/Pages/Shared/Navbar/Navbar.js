import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Divider, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

export default function Navbar() {
    const { user, logOut } = useAuth()
    const [state, setState] = React.useState(false);
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem: {
            textDecoration: 'none',
            margin: '0 10px'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        }

    })
    const { navItem, navIcon, navItemContainer, navLogo } = useStyle()
    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <List>

                <ListItem button >
                    <ListItemText ><NavLink className={navItem} to="/home">Home</NavLink></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText ><NavLink className={navItem} to="/products">Products</NavLink></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText ><NavLink className={navItem} to="/reviews">Reviews</NavLink></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText > <NavLink className={navItem} to="/contact">Contact Us</NavLink></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button >
                    <ListItemText > <NavLink className={navItem} to="/login">Login</NavLink></ListItemText>
                </ListItem>

            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: 'white' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, color: '#5964b4' }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, color: '#5964b4', fontWeight: 700 }}>
                            <HashLink to="/home#home" style={{ textDecoration: 'none' }}>Bicycler's Shop</HashLink>
                        </Typography>
                        <Box className={navItemContainer}>
                            <HashLink smooth className={navItem} to="/home#home">Home</HashLink>
                            <NavLink className={navItem} to="/explore">Explore</NavLink>
                            <HashLink smooth className={navItem} to="/home#products">Products</HashLink>
                            <HashLink smooth className={navItem} to="/home#reviews">Reviews</HashLink>
                            <HashLink smooth className={navItem} to="/home#contact">Contact Us</HashLink>

                            {user?.email ? <Button onClick={logOut} style={{ backgroundColor: '#5964b4', color: 'white' }} sx={{ ml: 5 }}>Log Out</Button> : <NavLink style={{ textDecoration: 'none' }} to="/login"><Button style={{ backgroundColor: '#5964b4', color: 'white' }} sx={{ ml: 5 }}>Login</Button></NavLink>}
                            {user.email && <Typography style={{ color: 'gray' }} sx={{ ml: 2 }} variant="caption">{user.displayName}</Typography>}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
}
