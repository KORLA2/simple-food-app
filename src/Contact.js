import React ,{useRef}from 'react'
import {Paper,TextField,Box,Button} from '@mui/material'
import emailjs from '@emailjs/browser';

export default function Body(){

let form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0q661u9', 'template_3141m2i', form.current, 'cTOjjkFuf2DlEUxss')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    console.log(e)
    e.target.reset();
  };
    return (
      <Box sx={{height:"100vh",width:"100vw",display:'flex',justifyContent:'center',flexDirection:'column',background: 'radial-gradient(circle, rgba(129,6,29,1) 56%, rgba(209,11,49,1) 75%)',alignItems:'center'}}>
        <h3 style={{fontSize:'4rem',fontFamily:'Hanalei Fill, cursive',textAlign:'center'}}>Contact Us</h3>
        <Paper  elevation={5}  >
          <form ref ={form} style={{padding:'1.2rem',display:'grid',placeItems:'center'}} onSubmit={sendEmail}>
        <TextField sx={{m:3}} id="outlined-basic" label="Name"  name ='from_name' variant="outlined" />
        <TextField sx={{m:3}}  id="outlined-basic" label="Email" name='my_mail' variant="outlined" />
        <TextField sx={{m:3}} id="outlined-basic" label="Message" name='message'  variant="outlined" />
           <Button variant='contained' color='primary' type='submit' size='large'>
            Send
           </Button>
           </form>
            </Paper>
        </Box>
    )
}


