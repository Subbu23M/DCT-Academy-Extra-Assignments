import React,{useEffect,useState} from 'react';

function Users(props) {

    // State variable & function
    const[user,setUser] = useState({});

    // set localStorage data to state variable
    const useEffectFunc = function(){
        const result = localStorage.getItem('userProfile');

        // Invoke state function
        setUser(JSON.parse(result));
    }

    // Invoke useEffect Hook
    useEffect(useEffectFunc,[]);

    return (
        <div className="container border p-2 border-secondary">

            <section>

                {/* row */}
                <div className="row">

                    {/* col-1 */}
                    <div className="col-lg-6 col-sm-6">

                        <h3>
                            {user.name}
                        </h3>
                        
                        <h3>
                            {user.email}
                        </h3>
                        
                        <h3>
                            {user.phone}
                        </h3>
                        
                    </div>
                    {/* end of col-1 */}

                    {/* col-2 */}
                    <div className="col-lg-6 col-sm-6">

                        <h4>
                            Company Name
                        </h4>

                        <h4>
                            {Object.keys(user).length > 0 && user.company.name}
                        </h4>

                        <h4>
                            {Object.keys(user).length > 0 && user.company.catchPhrase}
                        </h4>

                    </div>
                    {/* end of col-2 */}

                </div>
                {/* end of row */}

            </section>

        </div>
    )
}

export default Users;