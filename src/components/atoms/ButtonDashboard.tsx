import * as React from 'react';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router';



function ButtonDashboard(){
  const navigate = useNavigate();

    return (
      <Button variant="contained" color="primary" startIcon={<DashboardIcon/> }   onClick={() => {
        navigate("/dashboard")
      }}  >
            DASHBOARD
      </Button>
    );
};

export default ButtonDashboard;