import React,{useState} from 'react';

import axios from 'axios';

import validator from 'validator';

function Login(props) {

    // Object Destructuring - ES6
    const{confirmUser} = props;

    // State variable & function to make form inputs as controlled components
    const[email,setEmail] = useState('');

    const [formErrors, setFormErrors] = useState({});

    // Event Handler as callback function
    const handleEmail = function(e){
        const inputvalue = e.target.value;

        // Invoke State function
        setEmail(inputvalue);
    }

    // local scope variable 
    const findErrors = {};
    // console.log(findErrors);

    const runValidation = function(){
        // For Email
        if(email.trim().length === 0){
            // Object operations
            findErrors['email'] = 'email cannot be empty';
            }else if(!validator.isEmail(email)){
            findErrors['email'] = 'invalid email format';
        }
    }

    // Event Handler as callback function
    const handleSubmit = function(e){
        // To stop browser to refresh
        e.preventDefault();

        // Invoke the function
        runValidation();

        if(Object.keys(findErrors).length === 0){
            // Invoke the state function
            setFormErrors({});

            const baseUrl = 'http://jsonplaceholder.typicode.com/users';

            // Asynchronous nature - consuming code
            axios
                .get(baseUrl)

                .then(function(response){
                    const userResponse = response.data;
                    // console.log(userResponse);

                    // To find unique user data
                    const singleUserData = userResponse.find(function(user){
                        // Object Destructuring - ES6
                        const{email} = user;

                        if(email === email){
                            return true;
                        }
                    })
                    // console.log(singleUserData);

                    /* Conditional Rendering - Simple...if */
                    {
                        Object.keys(singleUserData).length > 0 && localStorage.setItem('userProfile',JSON.stringify(singleUserData))
                    }

                    // To reset form
                    setEmail('');

                    props.history.push('/dashboard');

                    // Invoke function
                    confirmUser();
                })

                .catch(function(error){
                    alert(error.message);
                })

        }else{
            console.log(findErrors);

            // Invoke State function
            setFormErrors(findErrors);
        }
    }

    return (
        <>

            <form>

                <label>
                    LOGIN 
                </label>

                {/* 1 */}
                <div className="form-group">

                    <input 
                        type="email" 
                        className='form-control'
                        value={email}
                        onChange={handleEmail}
                    />
                    
                    {/* Conditional Rendering - Simple...if */}
                    {
                        formErrors.email && <span className='text-danger'> {formErrors.email} </span>
                    }

                </div>

                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Login</button>

            </form>
            
        </>
    )
}

export default Login;