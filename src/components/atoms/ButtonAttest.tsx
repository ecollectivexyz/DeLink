import * as React from 'react';
import Button from '@mui/material/Button';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useNavigate } from 'react-router';


function ButtonAttest(){
    const navigate = useNavigate();

    return (
            <Button variant="contained" color="primary" startIcon={<HistoryEduIcon/> }   onClick={() => {
                navigate("/review")
            }}  >
                    Attest
            </Button> 
    );
};

export default ButtonAttest;