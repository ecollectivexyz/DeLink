import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TwitterIcon from '@mui/icons-material/Twitter';
import StarIcon from '@mui/icons-material/Star';
import LanIcon from '@mui/icons-material/Lan';

function LinkTab(props:any) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
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
        <LinkTab icon={<TwitterIcon />} label="IDENTITY" href="/drafts" />
        <LinkTab icon={<StarIcon />} label="SKILL(S)" href="/trash" />
        <LinkTab icon={<LanIcon />} label="RELATION" href="/spam" />
      </Tabs>
    </Box>
  );
}