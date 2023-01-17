import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import {signup_gql}  from '.././schemas/mutations/signup';
import styles from '../styles/signup.module.css'
import ExternalLoginCard from 'components/ExternalLoginCard';
import { useSession,signIn,signOut} from 'next-auth/react'
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { CloseFullscreen } from '@mui/icons-material';



const theme = createTheme();

export default function SignUp() {
  const { data : session }=useSession()

    const [registerUserInitial,{error}]=useMutation(signup_gql)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signupData={
        firstName:data.get('firstName'),
        lastName:data.get('lastName'),
        title:data.get('title'),
        email:data.get('email'),
      phoneNumber:data.get('phone'),
      password:data.get('password')
    }
    registerUserInitial({
        variables:signupData
    }).then((res)=>{
          console.log("Success")
        }).catch((error)=>{
          console.log(error)

        });
      }
          const handleSetNewPassword=(event)=>{
            event.preventDefault();
            const myArray=session.user.name.split(" ")
            const data = new FormData(event.currentTarget);
            const ExternalLoginData={
             firstName:myArray[0],
             lastName:myArray[1],
             title:"",
              email:session.user.email,
              phoneNumber:"",
              password:data.get('password'),    
          }
          console.log(ExternalLoginData)
          registerUserInitial({
            variables:ExternalLoginData
        }).then((res)=>{
              console.log("Success")
            }).catch((error)=>{
              console.log(error)
    
            });
           
          }

      
      if(!session){

        return (
          <div className={styles.loginContainer}>
            <div className={styles.nativeLoginContainer}>
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="off"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="title"
                          label="Title"
                          name="title"
                          autoComplete="off"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="off"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="phone"
                          label="Phone Number"
                          name="phone"
                          autoComplete="off"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="off"
                        />
                      </Grid>
                      
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link href="./" variant="body2">
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                    
                  </Box>
                </Box>
               
        
        <div>
        
              
        </div>
        
              </Container>
            </ThemeProvider>
            </div>
           <ExternalLoginCard />
        
            
            </div>
          );

      }
     
        else{

          
        return (

<div><Card sx={{ maxWidth: 345,height:"450px",margin:"auto",marginTop:"15vh",backgroundColor:"#f2ebd3"}}>
    <Box
     component="form"
     onSubmit={handleSetNewPassword}
     sx={{
       '& > :not(style)': { width: '25ch'},
     }}
     noValidate
     autoComplete="off"
   >
     <TextField id="standard-basic" label="Set New Password" variant="standard" sx={{marginLeft:"5vw",marginTop:"20vh"}} 
     name="password"
     autoComplete="off"/>
     <TextField id="standard-basic" label="Confirm Password" variant="standard" sx={{marginLeft:"5vw",marginTop:"2vh"}}
      name="confirmPassword"
      autoComplete="off"
     />
     <Stack direction="row" spacing={2} sx={{marginTop:"3vh",marginLeft:"8vw"}}>
     <Button variant="contained" color="success" type="submit">
       Submit
     </Button>

   </Stack>
   <Stack direction="row" spacing={2} sx={{marginTop:"3vh",marginLeft:"8vw"}}>
     <Button variant="outlined" color="secondary" onClick={signOut}>
       Logout
     </Button>

   </Stack>
   
   </Box>
   </Card></div>

        )
      
    }
  
}