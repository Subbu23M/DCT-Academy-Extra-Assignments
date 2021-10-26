import React,{useState} from 'react';

import Papa from 'papaparse';

function UploadFile(props) {

    // Object Destructuring - ES6
    const{addCsvData} = props;

    // Two State variables to hold success object and error message.
    const[success,setSuccess] = useState({});
    const[error,setError] = useState(false);

    // Event Handler as callback function - 1 
    const handleFile = function(e){

        const userInputFile = e.target.files[0];

        if(userInputFile === undefined){
            // Invoke state function
            setSuccess({})
        }else{
            // Invoke state functions
            setSuccess(userInputFile);

            // To reset the screen when result is achieved
            setError(false);
        }
    }

    // Event Handler as callback function - 2  
    const handleSubmit = function(e){
        // To stop browser to reload
        e.preventDefault();

        if(success.name === undefined){
            // Invoke State function
            setError(true);
        }else{
            Papa.parse(success,{
                header : true,
                dynamicTyping:true,
                complete: function(res) {
                    console.log("Parsing complete:", res);

                    // Invoke function - send data to parent
                    addCsvData(res.data);

                    // Invoke state function
                    setError(false);
                }
            })
        }
    }

    return (
        <>
            <form>

                {/* 1 */}
                <div className="form-group ml-2 mt-5">

                    <input 
                        type="file" 
                        className='form-control-file'
                        accept='.csv,.xlsx,.xls'
                        onChange={handleFile}
                    />

                </div>

                <button type='submit' className='btn btn-primary text-capitalize' onClick={handleSubmit}>
                    upload file 
                </button>

                {error && <h4 className='text-danger text-capitalize'> please upload your file</h4>}

            </form>
        </>
    )
}

export default UploadFile;