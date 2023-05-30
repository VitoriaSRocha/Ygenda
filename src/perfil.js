import app from './firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout/estilo.css'
import { db, auth } from './firebase';
import { Routes, Route, } from 'react-router-dom';
import unnamed from './assets/unnamed.jpg'

function Perfil() {
    return (
        <>
            <body>
                <div id="base_perfil">
                    <h1>Perfil</h1>
                    <div class="lateral">
                      
                    </div>
                    <div class="perfil">

                        <img title="Perfil" src={unnamed} />
                        <h4>Marcio Herobrine</h4><br />
                        <h4>marcio@gmail.com</h4><br />
                        <h1>Conta</h1>

                    
                    </div>


                </div>
                <footer>
                    <p>Powered by Yggdrastar &reg;</p>
                </footer>


            </body>

        </>
    )
}
export default Perfil;