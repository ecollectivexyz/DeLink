import * as React from 'react';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';


function ButtonDashboard(){
    return (
      <Button variant="contained" color="primary" startIcon={<DashboardIcon/>}>DASHBOARD</Button>
    );
};

export default ButtonDashboard;