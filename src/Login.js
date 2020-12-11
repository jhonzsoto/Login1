import React from 'react';
const Login =(props)=>{
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } =props;
       
    
    return(
        <section className="login">
<div className="loginContainer">
    <label>UserName</label>
    <input type="text"
     autoFocus 
     required 
     value={email} 
     onChange={(e)=>setEmail(e.target.value)}/>
     <p className ="errorMsg">{emailError}</p>
     <label>password</label>
     <input type="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
     <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                            <>
                            <button onClick={handleLogin}> sign in</button>
                            <p> dont.t have acount<span onClick={()=>setHasAccount(!hasAccount)}>sign up</span></p>
                            </>
                ):(
                    <>

                    <button onClick={handleSignUp}>sign up</button>
                            <p>hace a acount <span onClick={()=>setHasAccount(!hasAccount)}>sign in</span></p>
                    </>

                            
                )}

            </div>
</div>
        </section>
    )
};
 export default Login;