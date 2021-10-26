import React from 'react';

import MyNotesItem from './MyNotesItem';

function MyNotesDisplay(props) {
    // Object Destructuring - ES6 state variable from parent component
    const { notesData, removeItem } = props;

    return (
        <>

            <h3 className='text-capitalize text-info'>
                my notes - <span className='text-dark'> {notesData.length} </span>
            </h3>

            {/* Conditional Rendering - Ternary Operator */}

            {
                (notesData.length === 0) ? 
                                            <p className='text-capitalize text-warning lead'> no notes found add your first note </p> 
                                        : 

                                        <>
                                            {
                                                notesData.map(function(ele){
                                                    return(
                                                        <MyNotesItem
                                                            key={ele._id}
                                                            {...ele}
                                                            removeItem={removeItem}
                                                        />
                                                    )
                                                })
                                            }
                                        </>
            }
            
        </>
    )
}

export default MyNotesDisplay;