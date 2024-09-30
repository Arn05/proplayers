import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCartShopping, faMagnifyingGlass, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        
    }

    const googleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            console.log("User signed out successfully.");
        } catch (error) {
            console.error("Error signing out: ", error);
        }
        navigate("/login");
    }

  return (
    <div className='bg-[#ffb46f] rounded-3xl w-full px-10 py-5 gap-5 flex items-start'>
        <div className="nav-left flex gap-3 items-center">
            <img className='w-10 h-10 rounded-full' src="/images/nav-left.jpeg" alt="" />
            <h3>Pro-Players Rentals</h3>
        </div>
        <div className="nav-mid flex flex-col gap-3 items-center w-2/3">
            <div className="nav-mid-top w-full flex items-center">
                <FontAwesomeIcon className='bg-[#ece6f0] py-4 px-3 rounded-l-full' icon={faBars} />
                <input type="text" placeholder='Hinted search text' className='w-full bg-[#ece6f0] px-5 py-3' />
                <FontAwesomeIcon className='bg-[#ece6f0] py-4 px-3 rounded-r-full' icon={faMagnifyingGlass} />
            </div>
            <div className="nav-mid-bottom flex gap-3">
                <div className="bg-[#a2845e] px-3 py-2 rounded-3xl">
                    <h3 className='text-white'>Cricket</h3>
                </div>
                <div className="bg-[#a2845e] px-3 py-2 rounded-3xl">
                    <h3 className='text-white'>Cricket</h3>
                </div>
                <div className="bg-[#a2845e] px-3 py-2 rounded-3xl">
                    <h3 className='text-white'>Cricket</h3>
                </div>
                <div className="bg-[#a2845e] px-3 py-2 rounded-3xl">
                    <h3 className='text-white'>Cricket</h3>
                </div>
                <div className="bg-[#a2845e] px-3 py-2 rounded-3xl">
                    <h3 className='text-white'>Cricket</h3>
                </div>
                <div className="bg-[#a2845e] px-3 py-2 rounded-3xl">
                    <h3 className='text-white'>Cricket</h3>
                </div>
            </div>
        </div>
        <div className="nav-right flex gap-5">
        <FontAwesomeIcon onClick={() => navigate("/cart")}  className='cursor-pointer text-4xl' icon={faCartShopping} />
        <FontAwesomeIcon className='text-4xl' icon={faUser} />
        <FontAwesomeIcon onClick={() => googleLogout()} className='cursor-pointer text-4xl' icon={faRightFromBracket} />
        </div>
    </div>
  )
}

export default Navbar