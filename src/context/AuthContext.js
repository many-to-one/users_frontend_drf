import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export default AuthContext;


export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(() => localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) :null);
    const [tokens, setTokens] = useState(() => localStorage.getItem('tokens') ? jwt_decode(localStorage.getItem('tokens')) :null);

    const navigate = useNavigate()

    const loginUser = async(e) => {
        e.preventDefault()

        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.username.value, 'password':e.target.password.value})
        })
        const data = await response.json()
        console.log('data:', data)
        console.log('response:', response.user)
        
        if (response.status === 200){
            setTokens(data)
            setUser(jwt_decode(data.access)) // npm install jwt-decode
            localStorage.setItem('tokens', JSON.stringify(data))
            navigate('/')
        }else{
            alert('Something went wrong..')
        }
    }

    const contextData = {
        user: user,
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}