import * as React from 'react';
import Button from '@mui/material/Button';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

function ButtonAttest(){
    return (
      <Button variant="contained" color="secondary" endIcon={<HistoryEduIcon/>}>ATTEST</Button>
    );
};

export default ButtonAttest;