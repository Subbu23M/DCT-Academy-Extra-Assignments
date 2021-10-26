import React,{useState} from 'react';

import UploadFile from './UploadFile';

import Report from './Report';

import DisplayContainer from './DisplayContainer';

function CsvContainer(props) {

    // state variable & function
    const[csvData,setCsvData] = useState([]);

    // callback function to get data from child component
    const addCsvData = function(data){
        // Invoke state function
        setCsvData(data);
    }

    return (
        <>

            {/* Child Component Instance */}
            <UploadFile
                addCsvData = {addCsvData}
                />

            {/* Conditional Rendering - Simple...if */}
            {
                csvData.length > 0 && <hr/>
            }

            {/* Child Component Instance */}

            {/* Conditional Rendering - Simple...if */}
            {
                csvData.length > 0 && <Report passData = {csvData}/>
            }

            {/* Child Component Instance */}

            {/* Conditional Rendering - Simple...if */}
            {
                csvData.length > 0 && <DisplayContainer passData = {csvData}/>
            }

        </>
    )
}

export default CsvContainer;