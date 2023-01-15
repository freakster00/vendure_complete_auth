import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import {BsGoogle} from 'react-icons/bs'
import {SiMicrosoftoutlook} from 'react-icons/si'
import {FaGithub} from 'react-icons/fa'
import {BsMicrosoft} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import GoogleIcon from '@mui/icons-material/Google';
import { useSession,signIn,signOut} from 'next-auth/react'
 

// const ExpandMore = styled((props) => {
    

//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const { data : session }=useSession()
  const handleSubmit=(provider)=>()=>signIn(provider)
 
    
  
  return (
    <Card sx={{ width: "400px",height:"450px",marginTop:"80px" }}>
     <Stack direction="column" spacing={2} sx={{marginTop:"30px"}}>
      <Button variant="outlined" sx={{margin:"auto",width:"250px",height:"45px"}} onClick={handleSubmit("google")}>
        <BsGoogle size={30}/> Sign In With Google</Button>
    </Stack>
    <Stack direction="column" spacing={3} sx={{marginTop:"20px"}}>
      <Button variant="outlined" sx={{margin:"auto",width:"250px",height:"45px"}} onClick={handleSubmit("facebook")}>
        <BsFacebook size={30} /> Sign In With Facebook</Button>
    </Stack>
    <Stack direction="column" spacing={3} sx={{marginTop:"20px"}}>
      <Button variant="outlined" sx={{margin:"auto",width:"250px",height:"45px"}} onClick={handleSubmit("twitter")}>
        <BsTwitter size={30}/> Sign In With Twitter</Button>
    </Stack>
    <Stack direction="column" spacing={3} sx={{marginTop:"20px"}}>
      <Button variant="outlined" sx={{margin:"auto",width:"250px",height:"45px"}} onClick={handleSubmit("microsoft")}>
        <BsMicrosoft size={25} /> Sign In With Microsoft</Button>
    </Stack>
    <Stack direction="column" spacing={3} sx={{marginTop:"20px"}}>
      <Button variant="outlined" sx={{margin:"auto",width:"250px",height:"45px"}} onClick={handleSubmit("outlook")}>
        <SiMicrosoftoutlook size={30}/> Sign In With Outlook</Button>
    </Stack>
    <Stack direction="column" spacing={3} sx={{marginTop:"20px"}}>
      <Button variant="outlined" sx={{margin:"auto",width:"250px",height:"45px"}} onClick={handleSubmit("github")}>
        <FaGithub size={30} /> Sign In With Github</Button>
    </Stack>
    </Card>
  );
}
