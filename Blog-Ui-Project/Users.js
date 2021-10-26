import React,{useState,useEffect} from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import Loader from '../Loader';

function Users(props) {

    // State variable & function
    const[usersData,setUsersData] = useState([]);

    const[isLoading,setIsLoading] = useState(true);

    const baseUrl = 'https://jsonplaceholder.typicode.com/users';

    // Main Logic - Asynchronous nature
    const useEffectFunc = function(){
        axios
            .get(baseUrl)

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // Invoke State function
                setUsersData(result);

                setIsLoading(false);
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(useEffectFunc,[]);

    return (
        <>

            <h3 className='text-success ml-2 text-capitalize'>
                users list - { (isLoading) ? <Loader/> : <span className='text-danger'> {usersData.length} </span> }
            </h3>

            <ul>

                {
                    usersData.map(function(user){
                        // Object Destructuring - ES6
                        const{id,name} = user;

                        return(
                            <li key={id}>

                                <Link to={`users/${id}`}>
                                    {name}
                                </Link>

                            </li>
                        )

                    })
                }

            </ul>

        </>
    )
}

export default Users;