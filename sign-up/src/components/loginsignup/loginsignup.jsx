import{ React, useState} from 'react';
import "./loginsignup.css";

const Loginsignup = () => {
    const[action , setAction]=useState("Sign Up");
        
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        <div/>
            <div className="inputs">
            {action==="Login"?<div></div>:
                <div className="input">
                   
                    <img src="" alt="" className="" />
                    <input type="text" className="" placeholder='Name' />
                </div>}
                <div className="input">
                    <img src="" alt="" className="" />
                    <input type="email" className="" placeholder='Email Id' />
                </div>
                <div className="input">
                    <img src="" alt="" className="" />
                    <input type="password" className=""  placeholder='Password'/>
                </div>
                { action==="Login"?<div></div>:
                <div className="input">
                    <img src="" alt="" className="" />
                    <input type="password" className=""  placeholder='Confirm Password'/>
                </div>}
            </div>
    </div>{action==="Sign Up"?<div></div>:
    <div className="fogotPassword">
        Forgot password? <span>Click here</span>
    </div>}
    <div className="submitContainer">
        <div className={action==="Sign Up"?"purple":"gray"}
        onClick={()=>{setAction("Sign Up")}}>Sign-Up</div>
        <div className={action==="Login"?"purple":"gray"}
        onClick={()=>{setAction("Login")}}>Login</div>
    </div>
</div>
  )
}

export default Loginsignup