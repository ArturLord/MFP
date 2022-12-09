import React from 'react';
import {PicturesSlide, UserLoginBlock} from '../home-page/home-page';
import { Shelf } from '../hf-shelf/hf-shelf';
import { Footer } from '../footer/footer';

export function HomePage() {
    return(
            <div className='app'>
                    <PicturesSlide/>
                    <UserLoginBlock/>
                    <Shelf/>
                    <Footer/>
            </div>
    )
}