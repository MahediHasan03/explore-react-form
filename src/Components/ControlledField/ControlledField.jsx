import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')

    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 5) {
            setError('Password must be 6 Character or more.')
        }
        else{
            setError('')
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name'  />
                <br />
               <input type="password" name='password' onChange={handlePasswordOnChange}  defaultValue={password}  placeholder='Password' required/>
                <br />
                <input type="submit" />
            </form>
            <p style={{color: 'red'}}>
                <small> {error} </small>
            </p>
        </div>
    );
};

export default ControlledField;