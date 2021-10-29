import React,{useState,useEffect} from 'react';

import axios from 'axios';

import Posts from './Posts';

import Pagination from './Pagination';

function App(props) {

    // State variable & function
    const[posts,setPosts] = useState([]);

    const[isLoading,setIsLoading] = useState(false);

    const[currentPage,setCurrentPage] = useState(1);

    const[postsPerPage] = useState(10);

    // Pagination Logic
    const indexOfLastPost = currentPage * postsPerPage; 
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    // Divide posts per page
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

    const handlePagination = function(ele){
        // Invoke state function
        setCurrentPage(ele);
    }

    const baseUrl = 'http://jsonplaceholder.typicode.com/posts';

    // Asynchronous Nature
    const fetchPosts = function(){
        setIsLoading(true);

        // consuming code
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
    useEffect(fetchPosts,[]);

    return (
        <>

            <h2 className='text-primary mt-2 text-center'>
                About Pagination | React 
            </h2>

            {/* Child Component Instances */}
            <Posts
                postsData = {currentPosts}
                isLoading={isLoading}
            />

            <Pagination
                postsPerPage = {postsPerPage}
                totalPosts = {posts.length}
                handlePagination = {handlePagination}
            />
            
        </>
    )
}

export default App;