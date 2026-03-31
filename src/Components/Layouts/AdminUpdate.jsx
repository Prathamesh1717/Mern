import { useParams } from "react-router-dom";
import { useAuth } from "../../LocalStorage/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminUpdate = () => {
    const[data,setData] = useState({
        username : "",
        email:"",
        phone:"",
    });

    const params = useParams();
    const {authorizationToken} = useAuth();
   
    const getSingleUserData = async() => {
        try{
            const response = await fetch(`http://localhost:5001/api/admin/users/${params.id}` , {
                method: "GET",
                headers:{
                    Authorization : authorizationToken,
                }
            });
           const data = await response.json();
           console.log(data);
           setData(data);

        }catch(error){
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    },[]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
      e.preventDefault();

      try{
        const response = await fetch(`http://localhost:5001/api/admin/users/update/${params.id}`, {
          method: "PATCH",
          headers:{
            Authorization: authorizationToken,
            "Content-Type": "application/json", // Ensure the server knows we're sending JSON
          },
          body: JSON.stringify(data), // Convert the data object to a JSON string
        });
        if(response.ok){
        toast.success("User data updated successfully!");
        }else{
          toast.error("Failed to update user data.");
        }
      }catch(error){
        console.error("Error updating user data:", error);
      }
    }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              
            
              {/* Form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Update User Data</h1>
                <br />
                <form onSubmit={handleSubmit}>
                
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    value={data.username}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={data.email}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={data.phone}
                    onChange={handleInput}
                    required
                  />
                </div>

            
                <button type="submit">Submit</button>

              </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};


export default AdminUpdate;