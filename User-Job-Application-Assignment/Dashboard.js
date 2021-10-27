import React,{useState} from 'react';

import JobRoles from './JobRoles';

function Dashboard(props) {

    // Object Destructuring - ES6
    const{data} = props;

    // State variable & function
    const[job,setJob] = useState([]);

    // 1)
    const filterFrontEnd = data.filter(function(ele){
        if(ele.jobTitle === 'Front-End Developer'){
            return true;
        }
    }) 
    
    // 2)
    const filterNodeJsDeveloper = data.filter(function(ele){
        if(ele.jobTitle === 'Node.js Developer'){
            return true;
        }
    }) 
    
    // 3)
    const filterMeanStack = data.filter(function(ele){
        if(ele.jobTitle === 'MEAN Stack Developer'){
            return true;
        }
    }) 
    
    // 4)
    const filterFullStack = data.filter(function(ele){
        if(ele.jobTitle === 'FULL Stack Developer'){
            return true;
        }
    }) 
    
    // Event Handler as callback function
    const handleJob = function(e){
        // Target Value
        const target = e.target.value;

        if(target === 'Front-End Developer'){
            // Invoke State function
            setJob(filterFrontEnd);
        }else if(target === 'Node.js Developer'){
            // Invoke State function
            setJob(filterNodeJsDeveloper);
        }else if(target === 'MEAN Stack Developer'){
            // Invoke State function
            setJob(filterMeanStack);
        }else{
            // Invoke State function
            setJob(filterFullStack);
        }
    }

    return (

        <>
            <section className='d-flex justify-content-around align-items-center mt-2'>

                <button className='btn btn-outline-info text-dark' value="Front-End Developer" onClick={handleJob}>
                    Front-End Developer
                </button>
                
                <button className='btn btn-outline-info text-dark' value="Node.js Developer" onClick={handleJob}>
                    Node.js Developer
                </button>
                
                <button className='btn btn-outline-info text-dark' value="MEAN Stack Developer" onClick={handleJob}>
                    MEAN Stack Developer
                </button>
                
                <button className='btn btn-outline-info text-dark' value="Full Stack Developer" onClick={handleJob}>
                    Full Stack Developer
                </button>

            </section>  

            {/* Pass Data To JobRoles Component */}
            <JobRoles
                jobData = {job}
            />

        </>
        
    )
}

export default Dashboard;