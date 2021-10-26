import React from 'react';

import CsvContainer from './CsvContainer';

function App(props) {
    return (
        <>

            <h2 className='text-capitalize ml-2 mt-2 text-info'>
                file upload + <span className='text-uppercase'> csv </span> parser
            </h2>

            {/* Child Component Instance */}
            <CsvContainer/>

        </>
    )
}

export default App;