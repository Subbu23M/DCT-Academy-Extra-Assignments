import React,{useState,useEffect} from 'react';

import axios from 'axios';

function Posts(props) {

    // State variable & function
    const[user,setUser] = useState({});

    const[posts,setPosts] = useState([]);

    // set localStorage data to state variable
    const useEffectFunc = function(){
        const result = localStorage.getItem('userProfile');

        // Invoke state function
        setUser(JSON.parse(result));
    }

    // Invoke useEffect Hook
    useEffect(useEffectFunc,[]);

    // To collect posts
    const useFunc = function(){
        
        const baseUrl = `http://jsonplaceholder.typicode.com/posts/?userId=${user.id}`;

        if(user.id){
            // consuming code
            axios
                .get(baseUrl)

                .then(function(response){
                    const result = response.data;
                    // console.log(result);

                    // Invoke state function
                    setPosts(result);
                })

                .catch(function(error){
                    alert(error.message);
                })
        }        
    }

    // Invoke useEffect hook
    useEffect(useFunc,[user]);

    return (
        <>

            <h3>
                Post Title
            </h3>

            {
                posts.map(function(ele){
                    // Object Destructuring - ES6
                    const{title,body,id} = ele;

                    return(
                        <article key={id} className='border text-center p-2 mt-2 mx-auto'>
                            <p className='lead'>
                                Title - {title}
                            </p>

                            <p className='lead'>
                                Body - {body}
                            </p>
                        </article>
                        
                    )
                })
            }
            
        </>
    )
}

export default Posts;