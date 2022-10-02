import { useState,useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "./Login.css"

export default function SignUp(){

    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const { handleSignUp } = useContext(AuthContext) ;
    const navigate= useNavigate();
    function signup(){
    alert("Please Login ")
    handleSignUp(name,password) ;
    navigate(`/login`) ;
           
        
    }

    return(
        <div className="sigup_main" >
             <Heading style={{marginBottom:"20px"}} >SignUp</Heading>
          <HStack>
         
          <br />
  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
   Sign in with Facebook
  </Button>

  <br />
  <Button colorScheme='twitter' leftIcon={<FaGoogle />}>
  Sign in with Google
  </Button>
  <br />
</HStack>
            <Input style={{marginTop:"20px"}}  onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your email"/> <br />
            <br />
            <Input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password"/>
           <br />
            <Button onClick={signup}>SignUp</Button>
        </div>
    )
}