import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

import Loader from '../Loader';

function Posts(props) {

    // State variable & function
    const[posts,setPosts] = useState([]);

    const[isLoading,setIsLoading] = useState(true);

    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

    // Main Logic - Asynchronous Nature
    const useEffectFunc = function(){
        axios
            .get(baseUrl)

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // Invoke State function
                setPosts(result);
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

            <h3 className='text-capitalize text-success ml-2'>
                total posts - {(isLoading) ? <Loader/> : <span className='text-danger'> {posts.length} </span> }
            </h3>

            <ul>

                {
                    posts.map(function(post){
                        // Object Destructuring - ES6
                        const{id,title} = post;

                        return(
                            <li key={title}>

                                <Link to={`/comments/${id}`}>
                                    {title}
                                </Link>

                            </li>
                        )
                    })
                }

            </ul>
            
        </>
    )
}

export default Posts;