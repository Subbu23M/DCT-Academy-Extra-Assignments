import React from 'react';

import axios from 'axios';

import MyNotesForm from './MyNotesForm';

function AddNotes(props) {

    // Object Destructuring - ES6 to insert record in state variable
    const{addNotes} = props;

    // To create new record in DB
    const baseUrl = 'http://dct-user-auth.herokuapp.com/api/notes';

    // callback function
    const formSubmit = function(task){

        // consuming code to interact with server
        axios

            .post(baseUrl,task,{
                headers:{
                    'x-auth':localStorage.getItem('JWT_Token')
                }
            })

            .then(function(response){
                const result = response.data;

                if(Object.keys(result).includes('errors')){
                    alert(result.errors);
                }else{
                    // console.log(result);

                    // Invoke function to update State variable
                    addNotes(result);
                }
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    return (
        <>

            {/* Child component Instance */}
            <MyNotesForm
                formSubmitFunc = {formSubmit}
            />
            
        </>
    )
}

export default AddNotes;