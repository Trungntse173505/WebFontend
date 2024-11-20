import  React   from 'react';
import {Button, AppBar, Toolbar } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Navbar  = () => {
    const navigate  = useNavigate();

    return (
            <AppBar position="fixed">
                <Toolbar>
                    <Button color="" onClick={() => navigate('/')}>Home</Button>
                    <Button color="" onClick={() => navigate('/dashboard')}>DashBoard</Button>
                    <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
                </Toolbar>
            </AppBar>
    );
}
export default Navbar;