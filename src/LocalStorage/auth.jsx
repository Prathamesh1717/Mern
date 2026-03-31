import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token") || null); // State to store the authentication token
    const authorizationToken = token ? `Bearer ${token}` : null;
    const [service, setService] = useState([]); // State to store services data

    // Function to store the token in local storage and update the state
  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
    
  };

  const isLoggedIn = !!token; // Convert token to a boolean value
  // Function to log out the user by clearing the token from state and local storage
 const LogoutUser = () =>{
setToken(null);
return localStorage.removeItem("token");
  }

// State to store user data
  const[user , setUser] = useState("");
// Function to check user authorization by making a request to the server with the token
  const userAuthorization = async() => {
    try{
      const response = await fetch(`http://localhost:5001/api/auth/user`,{
        method : "GET",
        headers:{
          "Authorization" : authorizationToken,
        }
      });
      if(response.ok){
        const data = await response.json();
        setUser(data.userData);
      }
    }catch(error){
        console.log(error);
    }
  }

  // Function to fetch services data from the server
const getServices = async() => {
  try {
    const response = await fetch(`http://localhost:5001/api/data/services`, {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // API returns { msg, data: [...] }
      setService(Array.isArray(data.data) ? data.data : []);
    } else {
      setService([]);
    }
  } catch (error) {
    console.log(error);
    setService([]);
  }
};


// useEffect to fetch services data and check user authorization when the component mounts or when the token changes
  useEffect(() => {
    getServices();
    if (token) {

      userAuthorization();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ storeTokenInLs, isLoggedIn, LogoutUser, user, service, authorizationToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};