import React from 'react';

function Report(props) {

    // Object Destructuring - ES6
    const{passData} = props;

    // To find who is Host 
    const findHost = passData.filter(function(person){
        // Object Destructuring - ES6
        if(person['Guest'] === 'No'){
            return true;
        }
    })
    // console.log(findHost);

    // To find who are the participants 
    const findParticipants = passData.filter(function(person){
        // Object Destructuring - ES6
        if(person['Guest'] !== 'No'){
            return true;
        }
    })
    // console.log(findParticipants);

    // Find Total Duration of Host interacted with participants
    const timeDuration = findHost[0]['Total Duration (Minutes)'];

    // Convert Minutes to Hours
    const text = `${Math.floor(timeDuration/60)} hour ${timeDuration % 60} minutes`;

    return (
        <>

            <h3 className='text-capitalize'>
                report 
            </h3>

            <h4>
                Host - {findHost[0]['Name (Original Name)']}
            </h4>

            <p className='lead'>
                Total Participants - {findParticipants.length}
            </p>

            <p className='lead'>
                Duration - {timeDuration} minutes ({text})
            </p>
            
        </>
    )
}

export default Report;