import React from 'react';
import { Shelf } from '../hf-shelf/hf-shelf';
import { Footer } from '../footer/footer';
import { HeaderBlock } from '../header/header';
import { ProfilBlock } from '../personal-account/personal-account-profil/personal-account-profil';
import { ProfilPhotoBlock } from '../personal-account/personal-account-photo/personal-account-photo';

export function PersonalAccount() {
    return(
        <div className='app'>
            <HeaderBlock/>
            <ProfilBlock/>
            <ProfilPhotoBlock/>
            <Shelf/>
            <Footer/>`
        </div>
    )
}