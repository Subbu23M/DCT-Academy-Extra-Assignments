import React from 'react';

import NavBar from './NavBar';

import './Main.scss';

function App(props) {
    
    return (
        <>

            <h2 className='text-capitalize text-center text-info mt-2 mb-0'>
                user job application app 
            </h2>

            <div className="underline-four mx-auto bg-danger"></div>

            {/* Child Component Instance */}
            <NavBar/>
            
        </>
    )
}

export default App;