import React,{useState,useEffect} from 'react';

import './Main.scss';

import NavBar from './NavBar';

function App(props) {

    // State variable & function to check whether user is logged in or not.
    const[isUserLogIn,setIsUserLogIn] = useState(false);

    // To update state which is in parent component from child.
    const handleLogIn = function(){
        // Invoke state function
        setIsUserLogIn(!isUserLogIn);
    }

    // We did LocalStorage in useEffect Hook
    const useEffectFunc = function(){
        if(localStorage.getItem('userProfile')){
            // Invoke function
            handleLogIn();
        }
    }

    // Invoke useEffect Hook
    useEffect(useEffectFunc,[]);

    return (
        <>

            <h2 className='text-capitalize text-center text-info mt-2 mb-0'>
                social dashboard 
            </h2>

            <div className="underline-four mx-auto bg-danger"></div>

            {/* Child Component Instance */}
            <NavBar
                logInStatus = {isUserLogIn}
                confirmUser = {handleLogIn}
            />
            
        </>
    )
}

export default App;