import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

import Loader from '../Loader';

function ShowPosts(props) {

    // State variable & function
    const[posts,setPosts] = useState([]);

    const[users,setUsers] = useState([]);

    const[isLoading,setIsLoading] = useState(true);

    const { id } = props.match.params;

    const baseUrl = `https://jsonplaceholder.typicode.com/users/${id}/posts`;

    const baseUrlTwo = `https://jsonplaceholder.typicode.com/users/${id}`;

    // Main Logic for posts - Asynchronous nature
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
                alert(error.message)
            })
    }

    // Invoke useEffect Hook
    useEffect(useEffectFunc,[]);

    // Main Logic for User Name - Asynchronous nature
    const useFuncTwo = function(){
        axios
            .get(baseUrlTwo)

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // Invoke State function
                setUsers(result);
                setIsLoading(false);
            })

            .catch(function(error){
                alert(error.message)
            })
    }

    // Invoke useEffect Hook
    useEffect(useFuncTwo,[]);

    return (
        <article>

            <h2 className='text-capitalize'>
                user name - {(isLoading) ? <Loader/> : <span className='text-danger'> {users.name} </span> } 
            </h2>

            <p className='lead text-capitalize'>
                posts written by {users.name}
            </p>

            <ol>
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
            </ol>

            <Link to='/users'>
                Back to Users 
            </Link>
            
        </article>
    )
}

export default ShowPosts;