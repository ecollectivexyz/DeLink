import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ButtonAdd(){
    return (
      <Button variant="contained" color="primary" startIcon={<AddCircleOutlineIcon/>}>ADD</Button>
    );
};

export default ButtonAdd;