import React,{useState} from 'react';

import {Modal} from 'react-bootstrap';

import axios from 'axios';

function Table(props) {
    // Object Destructuring - ES6
    const{tableData} = props;

    // State variable & function to hold data from API to collect single user data
    const[viewData,setViewData] = useState({});

    // To toggle modal
    const [show, setShow] = useState(false);

    // Event Handler as callback function to toggle
    const handleClose = function(){
        // Invoke State function
        setShow(false);
    }

    // Event Handler as callback function
    const handleView = function(_id){
        
        const baseUrl = `http://dct-application-form.herokuapp.com/users/application-form/${_id}`;

        // consuming code
        axios
            .get(baseUrl)

            .then(function(response){
                const result = response.data;

                // Invoke State function
                setViewData(result);
                
                // To display data
                setShow(true);
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    return (
        <>

            {
                (tableData.length > 0) &&
            
                <table className='table-sm table text-center text-capitalize'>

                    <thead>

                        <tr>
                            <th scope='col'>
                                Name
                            </th>

                            <th scope='col'>
                                Technical Skills
                            </th>

                            <th scope='col'>
                                Experience
                            </th>

                            <th scope='col'>
                                Applied Date
                            </th>

                            <th scope='col'>
                                View Details
                            </th>

                            <th scope='col'>
                                Update Application Status 
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            tableData.map(function(person){
                                // console.log(person);

                                // Object Destructuting - ES6
                                const{name,skills,experience,createdAt,_id} = person;

                                return(
                                    <tr key={_id}>

                                        <td>
                                            {name}
                                        </td>
                                        
                                        <td>
                                            {skills}
                                        </td>

                                        <td>
                                            {experience}
                                        </td>

                                        <td>
                                            {createdAt}
                                        </td>

                                        <td>
                                            <button 
                                                className='btn btn-primary btn-sm text-light' 
                                                onClick={
                                                            function(e){
                                                                handleView(_id)
                                                            }
                                                        }
                                            >
                                                View Details
                                            </button>
                                        </td>

                                        <td>

                                            <div className="buttons d-flex justify-content-around align-items-center">

                                                <button className='btn btn-success btn-md text-light mr-2'>
                                                    Shortlist
                                                </button>

                                                <button className='btn btn-danger btn-md text-light'>
                                                    Reject
                                                </button>

                                            </div>

                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>   
            }

            {/* Modal To display */}
            <Modal show={show} onHide={handleClose} className='text-capitalize'>

                <Modal.Header>
                    <Modal.Title> {viewData.name} Profile </Modal.Title>
                </Modal.Header>

                <Modal.Body> 

                    <>
                        <h4>
                            Contact number - {viewData.phone}
                        </h4>

                        <h4>
                            Email - {viewData.email}
                        </h4>

                        <h4>
                            Skills - {viewData.skills}
                        </h4>

                        <h4>
                            Experience - {viewData.experience}
                        </h4>
                    </>

                </Modal.Body>

                <Modal.Footer>

                    <button className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>

                </Modal.Footer>

            </Modal>
        </>
    )
}

export default Table;