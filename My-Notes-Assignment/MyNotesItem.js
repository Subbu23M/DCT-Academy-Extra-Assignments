import React from 'react';

import axios from 'axios';

function MyNotesItem(props) {

    // Object Destructuring - ES6
    const { _id, title, body, removeItem } = props;

    // To delete particular record
    const baseUrlTwo = `http://dct-user-auth.herokuapp.com/api/notes/${_id}`;

    // Event Handler as callback function
    const handleRemove = function(e){

        const confirm = window.confirm('are you sure to remove');

        if(confirm){

            axios
                .delete(baseUrlTwo,{
                    headers:{
                        "x-auth":localStorage.getItem('JWT_Token')
                    }
                })

                .then(function(response){
                    const result = response.data;
                    // console.log(result);

                    // Invoke function
                    removeItem(result._id);
                })

                .catch(function(error){
                    alert(error.message);
                })
        }
    }

    // To Show Single note
    const baseUrlOne = `http://dct-user-auth.herokuapp.com/api/notes/${_id}`;

    // Event Handler as callback function to display.
    const handleShow = function(e){

        // consuming code
        axios
            .get(baseUrlOne,{
                headers:{
                    'x-auth':localStorage.getItem('JWT_Token')
                }
            })

            .then(function(response){
                const result = response.data;
                console.log(result);

                if(Object.keys(result).includes('erros')){
                    alert(result.errors);
                }else{
                    alert(result.title,result.body);
                }
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    return (
        <>

            <article className='mt-3 border border-info p-3'>

                <a href="#" onClick={handleShow}>

                    <h2>
                        {title} 
                    </h2>

                    <p>
                        {body}
                    </p>

                </a>

                <div className="remove d-flex justify-content-end align-items-center">

                    <a href="#">
                        <i className="far fa-edit mr-5 text-success"></i>
                    </a>

                    <a href="#" onClick={handleRemove}>
                        <i className="far fa-trash-alt text-danger"></i>
                    </a>

                </div>
                            
            </article>
            
        </>
    )
}

export default MyNotesItem;