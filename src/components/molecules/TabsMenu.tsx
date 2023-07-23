import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import LanIcon from '@mui/icons-material/Lan';
import { Link, useNavigate } from 'react-router-dom';

function LinkTab(props:any) {
  const navigate = useNavigate();

  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
        console.log(event.currentTarget.getAttribute("href"))
        let to = event.currentTarget.getAttribute("href")
        navigate(to || "");


      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" centered>
        <LinkTab icon={<TwitterIcon />} label="IDENTITY" href="/identity" /> 
        <LinkTab icon={<StarIcon />} label="SKILL(S)" href="skills" />
        <LinkTab icon={<LanIcon />} label="RELATION" href="/relations" />
      </Tabs>
    </Box>
  );
}