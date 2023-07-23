import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ListItemIcon from '@mui/material/ListItemIcon';



export default function SelectSocial() {
  const [social, setSocial] = React.useState('');

  const handleChange = (event:any) => {
    setSocial(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">SELECT SOCIAL</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={social}
          label="Social"
          onChange={handleChange}
        >
            <MenuItem value={10}>
                <ListItemIcon>
                    <TwitterIcon />
                </ListItemIcon>
                TWITTER
            </MenuItem>

            <MenuItem value={10}>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                DISCORD
            </MenuItem>

            <MenuItem value={10}>
                <ListItemIcon>
                    <GitHubIcon />
                </ListItemIcon>
                GITHUB
            </MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}