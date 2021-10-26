import React,{useState,useEffect} from 'react';

import axios from 'axios';

import Loader from '../Loader';

import { Link } from 'react-router-dom';

function ShowComments(props) {

    // State variable & function
    const[users,setUsers] = useState([]);

    const[posts,setPosts] = useState({});

    const[comments,setComments] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const{id} = props.match.params;

    const baseUrlOne = `https://jsonplaceholder.typicode.com/users/${id}`;

    const baseUrlTwo = `https://jsonplaceholder.typicode.com/posts/${id}`;

    const baseurlThree = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

    // Main Logic for User Name - Asynchronous nature
    const useFuncOne = function(){
        axios
            .get(baseUrlOne)

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
    useEffect(useFuncOne,[]);

    // Main Logic for Posts - Asynchronous nature
    const useFuncTwo = function(){
        axios
            .get(baseUrlTwo)

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
    useEffect(useFuncTwo,[]);

    // Main Logic for Comments - Asynchronous nature
    const useFuncThree = function(){
        axios
            .get(baseurlThree)

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // Invoke State function
                setComments(result);
                setIsLoading(false);
            })

            .catch(function(error){
                alert(error.message)
            })
    }

    // Invoke useEffect Hook
    useEffect(useFuncThree,[]);

    return (
        <>

            <h1 className='text-capitalize'>
                user name - {(isLoading) ? <Loader/> : <span className='text-dark'> {users.name} </span> }
            </h1>

            <p className='text-capitalize lead'>
                title - {(isLoading) ? <Loader/> : <span className='text-danger'> {posts.title} </span> }
            </p>

            <p className='text-capitalize lead'>
                body - {(isLoading) ? <Loader/> : <span className='text-secondary'> {posts.body} </span> }
            </p>

            <hr />

            <h3 className='text-capitalize'>
                comments 
            </h3>

            {
                (isLoading) ? <Loader/> : <ol>

                                                {
                                                    comments.map(function(comment){
                                                        // Object Destructuring - ES6
                                                        const{id,body} = comment;

                                                        return <li key={id}> <p className='lead'> {body} </p>  </li>
                                                    })
                                                }

                                        </ol>

            }
            
            <hr />

            <Link to={`/users/${users.id}`}>
                More posts from 
            </Link> <span className='text-success'> {users.name} </span>

        </>
    )
}

export default ShowComments;