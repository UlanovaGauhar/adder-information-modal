import React from 'react';

const Input = ({type,titleholder,onChange}) => {
    return (
        <React.Fragment>
            <input type={type}  placeholder={titleholder} onChange={onChange}/>
        </React.Fragment>
    );
};

export default Input;