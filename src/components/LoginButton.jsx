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
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <button className="bg-black px-3 py-1 rounded-xl text-white" onClick={handleClick}>Login</button>
    );
}

export default LoginButton;