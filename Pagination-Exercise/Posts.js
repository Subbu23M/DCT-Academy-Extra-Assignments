import React from 'react';

import Loader from '../Loader';

function Posts(props) {
    // Object Destructuring - ES6
    const{postsData,isLoading} = props;

    return (
        <>

            <h3 className='ml-2'>
                Posts - {(isLoading) ? <Loader/> : <span className='text-danger'> {postsData.length} </span> }
            </h3>

            {
                postsData.map(function(post){
                    // Object Destructuring - Es6
                    const{id,title,body} = post;
                        
                    return(
                        <article key={id} className='ml-2'>

                            <p className='lead'>
                                Title - {title}
                            </p>

                            <p className='lead'>
                                Body - {body}
                            </p>

                            <hr />

                        </article>
                    )
                })
            }

        </>
    )
}

export default Posts;