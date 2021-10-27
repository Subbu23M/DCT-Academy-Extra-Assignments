import React from 'react';

import { Link,Route } from 'react-router-dom';

import Home from './Home';

import AddItem from './AddItem';

import JobContainer from './JobContainer';

function NavBar(props) {

    return (
        <>

            <nav className='linav'>

                <ul>

                    <li>

                        <Link to='/' className='text-secondary'>
                            Home Page 
                        </Link>

                    </li>

                    <li>

                        <Link to='/form' className='text-warning'>
                            Application Form 
                        </Link>

                    </li>

                    <li>

                        <Link to='/dashboard' className='text-dark'>
                            Admin Dashboard 
                        </Link>

                    </li>

                </ul>

            </nav>

            <Route
                path='/'
                component={Home}
                exact={true}
            />

            <Route
                path='/form'
                component={AddItem}
                exact={true}
            />

            <Route
                path='/dashboard'
                component={JobContainer}
                exact={true}
            />

        </>
    )
}

export default NavBar;