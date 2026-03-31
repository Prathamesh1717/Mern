 import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
 import { useAuth } from "../LocalStorage/auth";
 import { toast } from "react-toastify";
 
 const Login = () => {
 const navigate = useNavigate();
 const { storeTokenInLs}  = useAuth(); // Access the storeTokenInLs function from the AuthContext
const[user , setUser] = useState({
    email:"",
    password:""
})

const handleInput = (e) => {
    const {name , value} = e.target;

    setUser((prev) => ({
        ...prev,
        [name]:value,
    }))
};

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);

    try{
    const response = await fetch(`http://localhost:5001/api/auth/login` ,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        });
        const res_data = await response.json();
       
        if(response.ok){
       
       storeTokenInLs(res_data.token);

            toast.success("Login successful");
            setUser({
                email:"",
                password:"",
                
            })
            navigate("/");
        }else{
         toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message ? res_data.message : "Something went wrong");
           console.log("Invalid credentials");
        }
    }catch(error){
        console.log(error);
    }
}


    return (
        <>

        <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                  <img src="/images/login.png" alt="trying to fill login form" />
                    </div>

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">login form</h1>
                     <br />
                    <form onSubmit={handleSubmit}> 
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            required
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInput}
                            />
                        </div>

                        <div>
                   <label htmlFor="password">Password</label>
                   <input type = "password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            required
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInput}
                            />

                        </div>
                        <button className="btn btn-primary" type="submit">
                            Login
                        </button>
                    </form>
                    
                     </div>
                </div>
            </div>
       </main>
        </section>
        
        </>
    )
};

export default Login;