import React from 'react';

import Table from './Table';

import BarChartt from './BarChartt';

function DisplayContainer(props) {
    // Object Destructuring - ES6
    const{passData} = props;

    return (
        <div className='container'>

            <section>

                {/* row */}
                <div className="row">

                    {/* col-1 */}
                    <div className="col-lg-6 col-sm-6">

                        <Table
                            moveData = {passData}
                        />    
                        
                    </div>
                    {/* end of col-1 */}

                    {/* col-2 */}
                    <div className="col-lg-6 col-sm-6 my-2">

                        <BarChartt
                            moveData = {passData}
                        />

                    </div>
                    {/* end of col-2 */}

                </div>
                {/* end of row */}

            </section>
            
        </div>
    )
}

export default DisplayContainer;