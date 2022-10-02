import { useState,useContext } from "react";
import {Navigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Input } from "@chakra-ui/react";
import "./Login.css"



export default function Login(){

    const { state } = useContext(AuthContext) ;
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");
    const navigate= useNavigate();
    function login(){
            if(state.name===name && state.password===password){
            alert("Login successfully");
            navigate(`/`) ;
           }
           else{
            alert("Incorrect name and password")
           }
       }
    console.log(state)

    return(
        <div className="sigup_main" >
           <Heading>Login</Heading>
            <br />
            <Input  onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder="Enter your email"/> <br />
        <br />
            <Input  onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password"/>
         <br/>
            <Button onClick={login}>Login </Button>
        </div>
    )
}