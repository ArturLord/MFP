import React from 'react';
import {SettingsBlock} from '../settings-page/settings-page';
import { Shelf } from '../hf-shelf/hf-shelf';
import { Footer } from '../footer/footer';

export function SettingsPage() {
    return (
        <>
        <SettingsBlock/>
        <Shelf/>
        <Footer/>
        </>
    )
}
