import React from 'react';

function Table(props) {
    // Object Destructuring - ES6
    const{moveData} = props;

    return (
        <>
            <table className='table table-bordered text-center'>

                <thead>

                    <tr>
                        <th>
                            Name 
                        </th>

                        <th>
                            Email 
                        </th>

                        <th>
                            Duration
                        </th>
                    </tr>

                </thead>
        
                <tbody>
                    {
                        moveData.map(function(ele,index){
            
                            return(

                                <tr key={index}>

                                    <td>
                                        {ele['Name (Original Name)']}
                                    </td>

                                    <td>
                                        {ele['User Email']}
                                    </td>

                                    <td>
                                        {ele['Total Duration (Minutes)']}
                                    </td>

                                </tr>

                            )
                        })
                    }
                </tbody>   

            </table>
        </>
    )
}

export default Table;
