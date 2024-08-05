import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../data/functions";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
/*
    const [user, setUser]= useState(null)
    const [token, setToken] = useState(localStorage.getItem('site') || "")
    const navigate = useNavigate();
    
    const loginAction = () => {
        try{
            setToken(generateToken(user.email))
            navigate("/dashboard")
            return
        }
        catch (err){
            console.error("Incorrect login information")
        }
    }
    
    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removItem("site")
        navigate("/login")
    }
    */
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () =>{
    return useContext(AuthContext);
}