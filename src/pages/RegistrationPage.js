import React from 'react';
import { Shelf } from '../hf-shelf/hf-shelf';
import { Footer } from '../footer/footer';
import RegistrationBlock from '../registration-page/registration-page';

export function RegistrationPage() {
    return (
        <div className='app'>
                <RegistrationBlock/>
                <Shelf/>
                <Footer/>
        </div>
    )
}