import React from 'react';

import {Link,Route} from 'react-router-dom';

import Home from './Home';

import Users from './Users';

import Posts from './Posts';

import ShowPosts from './ShowPosts';

import ShowComments from './ShowComments';

function App(props) {
    return (
        <>

            <nav className='mt-2'>

                <ul>

                    <li>

                        <Link to='/'>
                            Home 
                        </Link>
                        
                    </li>

                    <li>

                        <Link to='/users'>
                            Users 
                        </Link>

                    </li>

                    <li>

                        <Link to='/posts'>
                            Posts 
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
                path='/users'
                component={Users}
                exact={true}
            />

            <Route
                path='/users/:id'
                component={ShowPosts}
                exact={true}
            />

            <Route
                path='/posts'
                component={Posts}
                exact={true}
            />

            <Route
                path='/comments/:id'
                component={ShowComments}
                exact={true}
            />

        </>
    )
}

export default App;