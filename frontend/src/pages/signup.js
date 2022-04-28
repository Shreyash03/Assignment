import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { signup } from "../services/user.service"

export const SignupPage=(props)=>{

    const[username , setusername]= useState('')
    const[password , setPassword]= useState('')

    const navigate = useNavigate()
     
    const onSignup= async ()=>{
        if(username.length===0){
            alert('Enter Username')
        } else 
        if(password.length===0){
            alert('Enter password')
        } 
        else{
            const result= await signup(username ,password)
            if(result){
                navigate('/signin')
            }
        }
    }

return(
    <div>
    <h3 className="header">signup</h3>
        <div className="form">
                <div className="mb-3">
                    <label  className="form-label">Username</label>
                    <input  onChange={(e)=>{ setusername(e.target.value)}} type="email" className="form-control"  aria-describedby="emailHelp"/>
                        
                </div>
                <div class="mb-3">
                    <label  className="form-label">Password</label>
                    <input  onChange={(e)=>{ setPassword(e.target.value)}}type="password" className="form-control"  aria-describedby="emailHelp"/>
                        
                </div>

                <div className="mb3">
                <button onClick={onSignup} className="btn btn-success"> SignUp</button> 
                 <div><Link to="/">SignIn </Link> </div>  
                </div>
            </div>
        </div>
    )
}

