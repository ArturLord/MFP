import React from 'react';
import { Shelf } from '../hf-shelf/hf-shelf';
import { Footer } from '../footer/footer';
import { HeaderBlock } from '../header/header';
import { ProfilBlock } from '../personal-account/personal-account-profil';

export function PersonalAccount() {
    return(
        <div className='app'>
            <HeaderBlock/>
            <ProfilBlock/>
            <Shelf/>
            <Footer/>`
        </div>
    )
}