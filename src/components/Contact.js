import React, { useContext } from 'react';


import GlobalContext from '../context/GlobalContext';
import Title from './Title';

const Contact = () => {
    const { contactRef } = useContext(GlobalContext);
    const email = "ramyaragu407@gmail.com";

    return (
        <section className='px-5 lg:px-10 py-4 bg-gray-50' id='contact' ref={contactRef}>
            <h2 className='text-3xl text-center'>Contact</h2>
            <Title name="Connect with me" />
            <p className='text-xl py-2'>If you want to contact me, please send an email to <span className="text-blue-600 underline">{email}</span></p>
        </section>
    )
}

export default Contact;
