import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import {useForm} from "react-hook-form"
import { LoginData } from '../../helpers/interfaces'
import {auth} from "../../firebaseConfig"
import { Button, TextField } from '@mui/material';

const LoginForm = () => {
    const {register,handleSubmit}=useForm<LoginData>();
    const logUserIn=({email,password}:LoginData)=>{
        signInWithEmailAndPassword(auth,email,password).then(()=>{console.log("Logged in")}).catch((err)=>console.error(err.message))
    }
  return (
    <form 
    style={{display:"flex", flexDirection:"column"}} 
    onSubmit={handleSubmit(logUserIn)}>
        <TextField 
        variant="outlined" 
        type="email" 
        placeholder="email" 
        sx={{display: "block", mx:"auto", my: "0.5rem"}} 
        {...register("email",{required:true})}/>
        <TextField 
        variant="outlined" 
        type="password" 
        placeholder="password" 
        sx={{display: "block", mx:"auto", my: "0.5rem"}}
        {...register("password", {required:true})} />
        <Button 
        type="submit" 
        variant="contained" size="large" color="secondary"
        sx={{mb:"1rem",display:"block",mx:"auto"}}>
            Log in</Button>
    </form>
  )
}

export default LoginForm