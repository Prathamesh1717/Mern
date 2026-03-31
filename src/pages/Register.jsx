import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../LocalStorage/auth.jsx";
import { toast } from "react-toastify";
 const Register = () => {

    const navigate = useNavigate();
     const { storeTokenInLs } = useAuth(); // Access the storeTokenInLs function from the AuthContext
const[user , setUser] = useState({
    username : "",
    email : "",
    phone : "",
    password : ""
});

const handleInput = (e) => {
   const { name, value } = e.target;

   setUser((prev) => ({
    ...prev,
    [name] : value,
   }))
};

const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(user);

    try{
        const response = await fetch(`http://localhost:5001/api/auth/register`,
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(user)
            } );

            const res_data = await response.json();
             console.log(res_data.extraDetails);
           
            if(response.ok){

             storeTokenInLs(res_data.token);
           
                toast.success("Registration successful");
                setUser({
                    username : "",
                    email : "",
                    phone : "",
                    password : ""
                });
                navigate("/login");
            }else{
                toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message ? res_data.message : "Something went wrong");
            }
            }catch(error){
        console.log(error);
    }
};

    return (
        <>
        <section>
        <main>
            <div className="section-registration">
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                  <img src="/images/register.png" alt="trying to fill registration form" />
                    </div>

                    <div className="registration-form">
                        <h1 className="main-heading mb-3">Registration form</h1>
                    
                     <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" >username</label>
                            <input type = "text" 
                            name="username" 
                            id="username" 
                            placeholder="Enter Username" 
                            required  
                            autoComplete="off" 
                            value = {user.username}
                            onChange = {handleInput}
                            />
                            
                        </div>
                      
                       <div>
                            <label htmlFor="email" >email</label>
                            <input type = "email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter Email" 
                            required  
                            autoComplete="off"
                            value = {user.email}
                            onChange = {handleInput}
                            />
                            
                        </div>

                         <div>
                            <label htmlFor="phone" >phone</label>
                            <input type = "text" 
                            name="phone" 
                            id="phone" 
                            placeholder="Enter Phone" 
                            required  
                            autoComplete="off"
                            value = {user.phone}
                            onChange = {handleInput}
                            />
                            
                        </div>

                         <div>
                            <label htmlFor="password" >password</label>
                            <input type = "password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter Password" 
                            required  
                            autoComplete="off" 
                            value = {user.password}
                            onChange = {handleInput}
                            />
                            
                        </div>
                        <br/>
                        <button type="submit" className="btn">register</button>


                     </form>
                    </div>
                </div>
            </div>
       </main>
        </section>
        
        </>
    )
};
export default Register;