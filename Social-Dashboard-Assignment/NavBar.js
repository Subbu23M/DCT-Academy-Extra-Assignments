import React from 'react';

import {Link,Route,withRouter} from 'react-router-dom';

import Home from './Home';

import Login from './Login';

import Dashboard from './Dashboard';

function NavBar(props) {
    // Object Destructuring - ES6
    const{logInStatus,confirmUser} = props;

    return (
        <>

            <nav>

                <ul>

                    <li>

                        <Link to='/'>
                            Home 
                        </Link>

                    </li>

                    {/* Conditional Rendering - Ternary Operator */}
                    {
                        (logInStatus) 
                                    ? 
                                    (
                                        <>
                                            <li>

                                                <Link to='/dashboard'>
                                                    Dashboard 
                                                </Link>

                                            </li>

                                            <li>

                                                <Link to='/logout' onClick={function(e){
                                                    
                                                    // Toggle State variable which is in parent component
                                                    confirmUser();

                                                    // remove user from localStorage
                                                    localStorage.removeItem('userProfile')

                                                    // When user clicks logout he should re-direct to home page
                                                    props.history.push('/');
                                                }}>
                                                    Logout 
                                                </Link>

                                            </li>
                                        </>
                                    ) : <li>
                                            <Link to='/login'>
                                                Login 
                                            </Link>

                                        </li>
                    }
                    
                </ul>

            </nav>

            <Route
                path='/'
                component={Home}
                exact
            />

            <Route
                path='/login'
                component={Login}
                exact
                render = {
                    function(props){
                        return(
                            <Login
                                {...props}
                                confirmUser = {confirmUser}
                            />
                        )
                    }
                }
            />

            <Route
                path='/dashboard'
                component={Dashboard}
                exact
            />
            
        </>
    )
}

export default withRouter(NavBar);