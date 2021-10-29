import React from 'react';

function Pagination(props) {
    // Object Destructuring - ES6
    const{postsPerPage,totalPosts,handlePagination} = props;

    // Declared & Assigned
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination-md'>

                {
                    pageNumbers.map(function(ele){
                        return(
                            <li className='page-item' key={ele}>
                                <a href="#" onClick={function(){handlePagination(ele)}} className='page-link'> {ele} </a>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    )
}

export default Pagination;