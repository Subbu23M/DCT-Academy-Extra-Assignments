import React,{useState,useEffect} from 'react';

import axios from 'axios';

import MyNotesDisplay from './MyNotesDisplay';

import AddNotes from './AddNotes';

function MyNotesContainer(props) {

    // State variable & function
    const[notes,setNotes] = useState([]);

    // To List all notes
    const baseUrl = 'http://dct-user-auth.herokuapp.com/api/notes';

    // Main Logic Asynchronous nature
    const useFunc = function(){
        
        // Consuming Code
        axios
            .get(baseUrl,{
                headers:{
                    'x-auth':localStorage.getItem('JWT_Token')
                }})

            .then(function(response){
                const result = response.data;
                // console.log(result);

                // Invoke State function
                setNotes(result);
            })

            .catch(function(error){
                alert(error.message);
            })
    }

    // Invoke useEffect Hook
    useEffect(useFunc,[]);

    // callback function passed to child via props to update State variable
    const addNotes = function(note){
        // Invoke State function
        setNotes([...notes,note]);
    }

    // To remove record from db and also from state variable
    const removeItem = function(_id){
        const result = notes.filter(function(_id){
            return notes._id !== _id;
        })
        // Invoke state functiom
        setNotes(result);
    }
    
    return (

        <div className='container'>

            {/* row */}
            <div className="row">

                {/* col-1 */}
                <div className="col-lg-6">

                    {/* Child component Instance passed state variable to child through props */}
                    <MyNotesDisplay
                        notesData = {notes}
                        removeItem={removeItem}
                    />
                    
                </div>
                {/* end of col-1 */}

                {/* col-2 */}
                <div className="col-lg-6">

                    {/* Child component Instance */}
                    <AddNotes
                        addNotes={addNotes}
                    />

                </div>
                {/* end of col-2 */}

            </div>
            {/* end of row */}

        </div>
    )
}

export default MyNotesContainer;