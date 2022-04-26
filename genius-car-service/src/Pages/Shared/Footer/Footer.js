import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark p-4 mt-auto text-center mt-5 text-muted'>
            <p><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;