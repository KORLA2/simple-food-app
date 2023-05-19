import React from 'react'
import {Paper} from  '@mui/material'
import './Head.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import {Typography} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';

export default function Head(){

    const [state, setState] = React.useState({
        top: false,

      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: 1,background:'radial-gradient(circle, rgba(0,131,162,1) 52%, rgba(14,230,148,1) 100%)'}}
           role="presentation"
           
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List sx={{display:'flex',justifyContent:'space-around'}}>
            {['About Us' , "Contact US"].map((text, index) => (
              <ListItem key={text}  disablePadding sx={{textAlign:'center'}}>
                <ListItemButton >
              <a href={text} className='font-link' style={{color:'black',textDecoration:'none'}}>

                  <ListItemText  primary={text} />

              </a>

                </ListItemButton>
              </ListItem>
            ))}
          </List>
   
        </Box>
      );
    

    return (
        <div>
<Paper  elevation={4} sx={{background: 'radial-gradient(circle, rgba(0,131,162,1) 52%, rgba(14,230,148,1) 100%)', p:2,display:'flex',justifyContent:"space-between", alignItems:'center'}}>
<Typography className='font-link' sx={{ textAlign:'center',fontSize: { xs: '2rem', md: '3rem' ,lg:'4rem'}}} >

   Welcome to food festival

</Typography>
   {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton 
          sx={{p:1,fontSize: { xs: '2rem', md: '3rem' ,lg:'4rem'}}}
          onClick={toggleDrawer(anchor, true)}><MenuIcon style={{transform: 'scale(1.2)'}}/></IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

</Paper>

        </div>
    )
}
