import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SelectSocials from '../components/atoms/SelectSocials';
import TextField from '@mui/material/TextField';

function Identity(){
    return (
        <div style={{display : 'flex',flexDirection: "column"}}>
            <SelectSocials></SelectSocials>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
        </div>
  
    );
};

export default Identity;