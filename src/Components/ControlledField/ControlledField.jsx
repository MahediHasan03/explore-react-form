import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    const handlePasswordOnChange = e => {
        console.log(e.target.value)
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
        </div>
    );
};

export default ControlledField;