import React,{useState} from 'react';

import validator from 'validator';

function Form(props) {

    const{submitData} = props;

    // State variable & function to make form as controlled inputs
    const[name,setName] = useState('');

    // Event Handler as callback function - 1
    const handleName = function(e){
        const inputValue = e.target.value;

        // Invoke state function
        setName(inputValue);
    }

    // State variable & function to make form as controlled inputs
    const[email,setEmail] = useState('');
    
    // Event Handler as callback function - 2 
    const handleEmail = function(e){
        const inputValue = e.target.value;
        
        // Invoke State function
        setEmail(inputValue);
    }
    
    // State variable & function to make form as controlled inputs
    const[phone,setNumber] = useState('');
    
    // Event Handler as callback function - 3 
    const handleNumber = function(e){
        const inputValue = e.target.value;
        
        // Invoke state function
        setNumber(inputValue);
    }
    
    // State variable & function to make form as controlled inputs
    const[jobTitle,setJobRole] = useState('');
    
    const jobRoles = ['Front-End Developer','Node.js Developer','MEAN Stack Developer','FULL Stack Developer'];
    
    // Event Handler as callback function - 4  
    const handleJobRole = function(e){
        const inputValue = e.target.value;
        
        // Invoke state function
        setJobRole(inputValue);
    }
    
    // State variable & function to make form as controlled inputs
    const[experience,setExp] = useState('');
    
    // Event Handler as callback function - 5   
    const handleExp = function(e){
        const inputValue = e.target.value;
        
        // Invoke state function
        setExp(inputValue);
    }
    
    // State variable & function to make form as controlled inputs
    const[skills,setSkills] = useState('');
    
    // Event Handler as callback function - 6   
    const handleSkills = function(e){
        const inputValue = e.target.value;

        // Invoke State function
        setSkills(inputValue);
    }

    const[formErrors,setFormErrors] = useState({});

    // local scope variable 
    const findErrors = {};
    // console.log(findErrors);

    // Form Validation
    const runValidation = function(){
        // For name
        if(name.trim().length === 0){
            // Object operations
            findErrors['name'] = 'name cannot be blank'
        }

        // For Email
        if(email.trim().length === 0){
            // Object operations
            findErrors['email'] = 'email cannot be empty';
        }else if(!validator.isEmail(email)){
            findErrors['email'] = 'invalid email format'
        }

        // For number
        if(phone.trim().length === 0){
            // Object operations
            findErrors['phone'] = 'phone number cannot be blank';
        }

        // For jobTitle
        if(jobTitle.trim().length === 0){
            // Object operations
            findErrors['jobTitle'] = 'jobTitle cannot be blank';
        }

        // For experience
        if(experience.trim().length === 0){
            // Object operations
            findErrors['experience'] = 'experience cannot be blank';
        }

        // For skills
        if(skills.trim().length === 0){
            // Object operations
            findErrors['skills'] = 'skills cannot be blank';
        }
    }

    // Send Application
    const handleSubmit = function(e){
        // To stop browser to refresh
        e.preventDefault();

        // Invoke the function
        runValidation();

        if(Object.keys(findErrors).length === 0){
            // Invoke the state function
            setFormErrors({})

            // User Inputs
            const formData = {
                name: name,
                email: email,
                phone: phone,
                skills:skills,
                jobTitle: jobTitle,
                experience: experience
            };

            // Invoke function
            submitData(formData);

            // To reset form
            setName('');
            setEmail('');
            setNumber('');
            setJobRole('');
            setExp('');
            setSkills('');

        }else{
            console.log(findErrors);

            // Invoke State function
            setFormErrors(findErrors);
        }
    }

    return (
        <>

            <section className='mt-2'>

                <div className="container">

                    {/* row */}
                    <div className="row">

                        {/* col */}
                        <div className="col-lg-10 col-sm-6 mx-auto bg-warning p-2">

                            <h3 className='text-capitalize font-weight-bold text-secondary'>
                                apply for job 
                            </h3>

                            <form className='bg-light text-dark mt-4 tria' autoComplete="off">

                                {/* 1 */}
                                <div className="form-group d-flex justify-content-around pt-3 align-items-center">

                                    <label>

                                        <h4>
                                            Full name
                                        </h4>

                                    </label>

                                    <input 
                                        type="text"
                                        className='form-control-lg'
                                        value={name}
                                        onChange={handleName}
                                    />

                                    {/* Conditional rendering */}
                                    {
                                        formErrors.name && <span className='text-danger'> {formErrors.name} </span>
                                    }

                                </div>
                                <hr />

                                {/* 2 */}
                                <div className="form-group d-flex justify-content-around pt-1 align-items-center">

                                    <label>

                                        <h4>
                                            Email address
                                        </h4>

                                    </label>

                                    <input 
                                        type="email"
                                        className='form-control-lg'
                                        placeholder='example@email.com'
                                        value={email}
                                        onChange={handleEmail}
                                    />

                                    {/* Conditional rendering */}
                                    {
                                        formErrors.email && <span className='text-danger'> {formErrors.email} </span>
                                    }

                                </div>
                                <hr />

                                {/* 3 */}
                                <div className="form-group d-flex justify-content-around pt-1 align-items-center">

                                    <label>

                                        <h4>
                                            Contact Number
                                        </h4>

                                    </label>

                                    <input 
                                        type="text"
                                        className='form-control-lg'
                                        placeholder='+91 9988554344'
                                        value={phone}
                                        onChange={handleNumber}
                                    />

                                    {/* Conditional rendering */}
                                    {
                                        formErrors.phone && <span className='text-danger'> {formErrors.phone} </span>
                                    }

                                </div>
                                <hr />

                                {/* 4 */}
                                <div className="form-group d-flex justify-content-around pt-1 align-items-center">

                                    <label>

                                        <h4>
                                            Applying for Job
                                        </h4>

                                    </label>

                                    <select className='form-control-lg' value={jobTitle} onChange={handleJobRole}>

                                        <option>
                                            --Select--
                                        </option>

                                        {
                                            jobRoles.sort().map(function(job,index){
                                                return <option value={job} key={index}>
                                                    {job}
                                                </option>
                                            })
                                        }

                                    </select>

                                    {/* Conditional rendering */}
                                    {
                                        formErrors.jobTitle && <span className='text-danger'> {formErrors.jobTitle} </span>
                                    }

                                </div>
                                <hr />

                                {/* 5 */}
                                <div className="form-group d-flex justify-content-around pt-3 align-items-center">

                                    <label>

                                        <h4>
                                            Experience
                                        </h4>

                                    </label>

                                    <input 
                                        type="text"
                                        placeholder='Experience(2 years,3months)'
                                        className='form-control-lg'
                                        value={experience}
                                        onChange={handleExp}
                                    />

                                    {/* Conditional rendering */}
                                    {
                                        formErrors.experience && <span className='text-danger'> {formErrors.experience} </span>
                                    }

                                </div>
                                <hr />

                                {/* 6 */}
                                <div className="form-group d-flex justify-content-around pt-3 align-items-center">

                                    <label>

                                        <h4>
                                            Technical Skills
                                        </h4>

                                    </label>

                                    <textarea className='form-control-lg' value={skills} onChange={handleSkills} >

                                    </textarea>

                                    {/* Conditional rendering */}
                                    {
                                        formErrors.skills && <span className='text-danger'> {formErrors.skills} </span>
                                    }

                                </div>
                                <hr />

                                <button className='btn btn-primary text-light btn-md ml-5 mb-2' onClick={handleSubmit}>
                                    Send Application 
                                </button>

                            </form>

                        </div>
                        {/* end of col */}

                    </div>
                    {/* end of row */}

                </div>

            </section>
            
        </>
    )
}

export default Form;