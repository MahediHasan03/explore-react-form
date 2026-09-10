import React from 'react';

const ControlledField = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.password.value)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name'  />
                <br />
                <input type="password" name='password'  placeholder='Password' required/>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default ControlledField;