import React from 'react';

import Users from './Users';

import Posts from './Posts';

function Dashboard(props) {
    return (
        <>
            <h2>
                Dashboard
            </h2>

            {/* Child Component Instances */}
            <Users/>
            <Posts/>
            
        </>
    )
}

export default Dashboard;