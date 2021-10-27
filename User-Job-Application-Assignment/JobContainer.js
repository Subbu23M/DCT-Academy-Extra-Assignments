import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Dashboard from './Dashboard';

import Loader from '../Loader';

function JobContainer(props) {

    // State variable & function to store user information from job application form
    const[data,setData] = useState([]);

    const[isLoading,setIsLoading] = useState(true);

    // Display profiles
    const baseUrl = 'http://dct-application-form.herokuapp.com/users/application-forms';

    // Main Logic - Asynchronous nature
    const useEffectFunc = function(){

        // Consuming code
        axios
            .get(baseUrl)

            .then(function(response){
                const result = response.data;

                if(Object.keys(result).includes('errors')){
                    alert(result.erros);
                }else{
                    // Invoke state function
                    setData(result);

                    setIsLoading(false);
                    // console.log(result);
                }
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(useEffectFunc,[]);

    return (
        <>

            {/* Conditional Rendering - Ternary Operator */}
            <h3>
                Admin Dashboard - {(isLoading) ? <Loader/> : <span className='text-danger'> {data.length} </span>}    
            </h3>
            
            <Dashboard 
                data={data}
            />
            
        </>
    )
}

export default JobContainer;