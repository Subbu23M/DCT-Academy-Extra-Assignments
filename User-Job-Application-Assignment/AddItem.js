import React from 'react';

import axios from 'axios';

import Form from './Form';

function AddItem(props) {

    const baseUrl = 'http://dct-application-form.herokuapp.com/users/application-form';

    // To communicate with server
    const submitData = function(profile){

        // consuming code
        axios
                .post(baseUrl,profile)

                .then(function(response){
                    const result = response.data;
                    // console.log(result);

                    if(Object.keys(result).includes('errors')){
                        alert(result.errors)
                    }else{                    
                        console.log(result);
                    }
                })

                .catch(function(error){
                    alert(error.message);
                })
    }

    return (
        <>

            <Form
                submitData={submitData}
            />
            
        </>
    )
}

export default AddItem;