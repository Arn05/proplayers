import React, { useEffect } from "react";
import { auth, provider } from "../utility/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.error("Error signing in: ", error);
            });

            const LocalLoginButton = () => {
                const navigate = useNavigate();
              
                const handleLogin = () => {
                  navigate('/home');
                };
              
                return (
                  <button onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', borderRadius: '5px', border: 'none', alignItems: "center" }}>
                    Login
                  </button>
                );
              };
              
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <button className="bg-black px-3 py-1 rounded-xl text-white" onClick={handleClick}>Login with Google</button>
    );
}

export default LoginButton;