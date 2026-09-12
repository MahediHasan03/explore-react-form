import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name,email)
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={nameOnChange} placeholder='Name' />
                <br />
                <input type="email" onChange={emailOnChange} name='email' placeholder='Email...@' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm;