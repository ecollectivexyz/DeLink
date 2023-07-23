import * as React from 'react';
import Button from '@mui/material/Button';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';

function Dashboard(){
    const navigate = useNavigate();

    return (
        <>
            <Button variant="contained" color="primary" startIcon={<ArrowBackIcon/> }   onClick={() => {
                navigate("/")
            }}  >
                    Back
            </Button> 
            <p>Dashboard</p>
        </>
    );
};

export default Dashboard;