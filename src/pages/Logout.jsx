
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../LocalStorage/auth";
const Logout = () => {
    const navigate = useNavigate();
    const { LogoutUser } = useAuth();

    useEffect(() => {
      LogoutUser();
    },[LogoutUser]);
    
navigate("/login");
};

export default Logout;