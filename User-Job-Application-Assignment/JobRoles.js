import React from 'react';

import Table from './Table';

function JobRoles(props) {
    // Object Destructuring - ES6
    const{jobData} = props;

    return (
        <>

            <h2 className='text-secondary ml-2'>
                {
                    jobData.length > 0 &&  jobData[0]['jobTitle']
                }
            </h2>

            {
                jobData.length > 0 && <p className='lead text-capitalize ml-2'> list of candidates applied for <span className='text-success'> { jobData[0]['jobTitle']} </span> </p>
            }

            {/* Child Component */}
            <Table
                tableData = {jobData}
            />

        </>
    )
}

export default JobRoles;