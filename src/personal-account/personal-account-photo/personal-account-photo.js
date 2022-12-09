import React from "react";
import './personal-account-photo.css';
import Cat from '../../img/pictures-slide/cat.jpg';

export const ProfilPhotoBlock = () => {
    return (
        <>
             <div id="openModal" class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <a href="#close" title="Close" class="close">×</a>
            </div>
            <div class="modal-body">    
                <img src={Cat} alt=""/>
            </div>
            </div>
        </div>
        </div>
        <form class="container-card">
        <div class="gelereya-kartinok">
            <a href="#openModal"><img src={Cat} alt="" /></a>
            <a href="#openModal"><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} lt="а"/></a>
            <a href=""><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} alt="" /></a>
            <a href=""><img src={Cat} alt="" /></a>
        </div>
    </form>
        </>
    )
}