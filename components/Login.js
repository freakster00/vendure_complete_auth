import {GoogleLogin} from "react-google-login"
const client_id="662630754104-6ch1m0euk4khqgloco3qbe7mosfd0mpt.apps.googleusercontent.com"



const Login = () => {

    const onSuccess=(res)=>{
        console.log("Login Success :",res);
    }
    const onFailure=(res)=>{
        console.log("Login Failure :",res);
    }
  return (
    <div><GoogleLogin  
    clientId={client_id}
    buttonText="login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}

    
    
    
    />
        
        
       </div>
  )
}

export default Login