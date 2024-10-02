import React, { useEffect } from "react";
import { auth, provider } from "../utility/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LocalLoginButton() {

    const navigate = useNavigate();
              
                const handleLogin = () => {
                  navigate('/home');
                };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <button onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', border: 'none', alignItems: "center" }}>
          Login
        </button>
      );
}

export default LocalLoginButton;