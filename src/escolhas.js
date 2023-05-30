import app from './firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout/estilo.css'
import { db, auth } from './firebase';
import { Routes, Route, } from 'react-router-dom';

function Escolha() {
    return (
        <>
            <body>
                <div class="externoBlocoQuest">
                    <h1>Escolha o tipo de Conta</h1>
                </div>
                <div id="apresenta">
                    <div id="escolha">
                        <div class="BlocoQuest" id="bloco1">
                            <a href="registro.html">
                                <Link to={'/registro'}><button type="button" id="Escolha1" >ADULTO</button></Link></a>
                        </div>

                        <div class="BlocoQuest" id="bloco2">
                            <a href="criançaRegistro.html">
                            
                                <Link to={'/registro-crinca'}><button type="button" id="Escolha2" >CRIANÇA</button></Link></a>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Escolha;