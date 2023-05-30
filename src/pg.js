import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, applyActionCode, PhoneAuthProvider } from "firebase/auth";
import app from './firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout/estilo.css'
import { db, auth } from './firebase';
import React from 'react';
import { Routes, Route, } from 'react-router-dom';


import {
    doc,
    setDoc,
    collection,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    onSnapshot
} from 'firebase/firestore'

import engrenagem from './assets/engrenagem.png'
import agario from './assets/agario.png'
import x from './assets/x.png'
import Roblox from './assets/Roblox.jpg'
import fireboywatergirl from './assets/fireboy-watergirl.jpg'
import Bomb from './assets/BombIt.jpg'
import photo from './assets/photo.png'
import Popup from "./Popup";


function Pagprincipal() {
    <style>
        body{{
            padding: 25,
            backgroundColor: 'white',
            color: 'black',
            fontSize: 25,
        }}

        .dark_mode {{
            background: 'white',
            color: 'black',

        }}

        .letraspretas {{
            color: 'black',
        }}
    </style>


    const divStyle = {
        color: 'blue',

    };

    function darkMode() {
        var element = document.body;

        element.classList.toggle('dark_mode');

    }

    function tocarMusica() {


        if (musica.checked == true) {
            audio.volume = 0.01;
            audio.play();
            alert('Musica ativada')
        } else {
            audio.pause();
            alert('Musica Desativada')
        }

    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    var dropdown = document.getElementsByClassName('dropdown-btn');
    var i;
    var musica = document.getElementById('musica')
    var audio = new Audio('musica/De4.mp3');


    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
    const [titulo, setTitulo] = useState('');
    const [atede, setAtede] = useState('');
    const [idTarefa, setIdTarefa] = useState('');
    const [posts, setPosts] = useState([]);
    const [datade, setDatade] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        async function loadPost() {
            const dados = onSnapshot(collection(db, "posts"), (snapshot) => {
                let listaPost = [];


                snapshot.forEach((doc) => {
                    listaPost.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        atede: doc.data().atede,
                        datade: doc.data().datade,

                    })
                })
                setPosts(listaPost);
            })
        }
        loadPost();
    }, []);

    async function adicionarCom() {
        await addDoc(collection(db, "posts"), {
            titulo: titulo,
            datade: datade,
            atede: atede,

        }).then(() => {
            alert("Comprisso adicionado com sucesso");
            setAtede('');
            setTitulo('');
            setDatade('');
        })
            .catch((error) => {

                const errorCode = error.code;

                alert(errorCode)

            })
    }
    async function deletarCom(id) {
        const docRef = doc(db, "posts", id);

        await deleteDoc(docRef)
            .then(() => {
                alert(" compromisso deletado");
            })
            .catch((error) => {
                const errorCode = error.code;

                alert(errorCode)
            })
    }
    function selecao() {
        let select = document.querySelectorAll('#select');
        let buttonSe = document.querySelectorAll('#button');
        console.log(buttonSe);
        buttonSe.addEventListener('click', () => {
            console.log(select.value);
        })
    }
    return (
        <>





            {isOpen && <Popup

                handleClose={togglePopup}
                content={<div>
                    <div className='container'>
                        <h2>Adicione seus compromisos</h2>
                        <label><strong>Id da tarefa:</strong></label>
                        <input className="colorin"
                            type="text"

                            placeholder='Digite o ID do compromisso'
                            value={idTarefa}
                            onChange={(id) => setIdTarefa(id.target.value)}
                            style={{ width: '120px', height: '30px' }} />
                        <br />


                        <label> <strong>Nome:</strong></label>

                        <input className="colorin"
                            type="text"
                            placeholder='Digite o titulo'
                            value={titulo}
                            onChange={(titulo) => setTitulo(titulo.target.value)}
                            style={{ width: '120px', height: '30px' }}

                        />
                        <br />



                        <label><strong>Prioridades:</strong></label>
                        <br />
                        <br />
                        <div className="blocoP">
                        </div>

                        <h5><strong>Alta prioridade</strong></h5>
                        <h5 className="letraPop"><strong>Media prioridade</strong></h5>
                        <h5 className="letraPop2"><strong>Baixa prioridade</strong></h5>
                        <br />
                        <input className="checkboxPop"
                            type="checkbox"


                            style={{ width: '20px', height: '30px' }} />

                        <br />


                        <div className="blocoP2">
                        </div>


                        <input className="checkboxPop2"
                            type="checkbox"


                            style={{ width: '20px', height: '30px' }} />

                        <br />

                        <div className="blocoP3">
                        </div>


                        <input className="checkboxPop3"
                            type="checkbox"


                            style={{ width: '20px', height: '30px' }} />





                        <label><strong>Data:</strong> </label>
                        <input className="colorin"
                            type="text"
                            placeholder=' Data de:'
                            value={datade}
                            onChange={(datade) => setDatade(datade.target.value)}

                            style={{ width: '120px', height: '30px' }}
                        />
                        <br />




                        <input className="ladinho"
                            type="text"
                            placeholder='Até de:'
                            value={atede}
                            onChange={(atede) => setAtede(atede.target.value)}
                            style={{ width: '120px', height: '30px' }}

                        />
                        <br />

                        <labe><strong>Alarme:</strong></labe>
                        <select className="select">
                            <option value="KICK BACK">KICK BACK</option>
                            <option value="Kamatachi 6 balas">Kamatachu-6 balas</option>
                            <option value="Outros">Outros</option>


                        </select>
                        <br />

                        <labe><strong>Frquencia:</strong></labe>
                        <select className="select">
                            <option value="Apenas uma vez">Apenas uma vez</option>
                            <option value="Varias veses">Varias veses</option>



                        </select>



                        <button className="btn-pop" onClick={adicionarCom}>Adicionar na  agenda</button>
                        <ul>
                            {posts.map((post) => {
                                return (
                                    <li>
                                        <strong>ID: {post.id}</strong><br />
                                        <span>Titulo: {post.titulo}</span><br />
                                        <span>Até de: {post.atede}</span><br />
                                        <span> Data de: {post.datade}</span><br />
                                        <button className="btn-pop" onClick={() => deletarCom(post.id)}>Excluir</button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>}
            />}

            <body>
                <Link to={'/perfil'}><img id="levaperfil" src={photo} alt=""/></Link>
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}><img src={engrenagem} style={{ width: '50px' }} /></span>
                <div id="mySidenav" class="sidenav">

                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}><img src={x} style={{ width: '30px' }}
                        class="engrenagem" />
                    </a>

                    <a href="#">Segurança e Privacidade</a>
                    <a href="#">Suporte</a>
                    <a href="#">Compartilhamento</a>
                    <a href="#">Notificações</a>
                    <button className="dropdown-btn">Alterar Layout
                        <i className="fa fa-caret-down" />
                    </button>
                    <div classname='dropdown-container'>

                        <input type="checkbox" onClick={darkMode} className='btnc' />
                        <strong><p class="letralado">Tema claro</p></strong>
                        <br />
                        <input type="checkbox" onClick={tocarMusica} name="musica" id="musica" class="btnc" />
                        <strong><p class="letralado">Tocar Musica</p> </strong>

                    </div>
                </div>

                <div id="scrollview"></div>
                <div class="container">
                    <div id="Titulos">
                        <h1>Rotina Diaria</h1>
                    </div>
                    <div id="recomendar">
                        <a href="recomendacoes.html">
                            <h2>Recomendações</h2>
                        </a>
                    </div>

                    <div class="scrollmenu">
                        <section><a onClick={togglePopup}>00HRS</a></section>
                        <section><a onClick={togglePopup}>01HRS</a></section>
                        <section><a onClick={togglePopup}>02HRS</a></section>
                        <section><a onClick={togglePopup}>03HRS</a></section>
                        <section><a onClick={togglePopup}>04HRS</a></section>
                        <section><a onClick={togglePopup}>05HRS</a></section>
                        <section><a onClick={togglePopup}>06HRS</a></section>
                        <section><a onClick={togglePopup}>07HRS</a></section>
                        <section><a onClick={togglePopup}>08HRS</a></section>
                        <section><a onClick={togglePopup}>09HRS</a></section>
                        <section><a onClick={togglePopup}>10HRS</a></section>
                        <section><a onClick={togglePopup}>11HRS</a></section>
                        <section><a onClick={togglePopup}>12HRS</a></section>
                        <section><a onClick={togglePopup}>13HRS</a></section>
                        <section><a onClick={togglePopup}>14HRS</a></section>
                        <section><a onClick={togglePopup}>15HRS</a></section>
                        <section><a onClick={togglePopup}>16HRS</a></section>
                        <section><a onClick={togglePopup}>17HRS</a></section>
                        <section><a onClick={togglePopup}>18HRS</a></section>
                        <section><a onClick={togglePopup}>19HRS</a></section>
                        <section><a onClick={togglePopup}>20HRS</a></section>
                        <section><a onClick={togglePopup}>21HRS</a></section>
                        <section><a onClick={togglePopup}>22HRS</a></section>
                        <section><a onClick={togglePopup}>23HRS</a></section>
                    </div>

                    <div id="ProxAtv">


                        <div id="horaAtv">
                            <p>Próxima Atividade</p>
                        </div>

                        <div id="descAtv">
                            <h1>22:00</h1>
                            <p><strong> Jogar Valorant de Yoru</strong></p>
                        </div>

                        <div class="clear"></div>
                    </div>

                    <hr />

                    <div id="ProxAtv1">

                        <div id="horaAtv">
                            <p>Próxima Atividade</p>
                        </div>

                        <div id="descAtv">
                            <h1>23:00</h1>
                            <p><strong> Procurar terapia mental</strong></p>
                        </div>

                        <div class="clear"></div>
                    </div>
                </div>

                <section id="Conteudo">
                    <h1>Agenda</h1>
                    <iframe
                        src="https://calendar.google.com/calendar/embed?src=c_rkusmajmoallrehl9g84k8spk8%40group.calendar.google.com&ctz=America%2FSao_Paulo"
                        style={{ border: '0' }} width='800' height='600' frameborder="0" scrolling="no"></iframe>
                </section>
                <section id="Conteudo">
                    <h1>jogos</h1>

                    <article id="blocos">
                        <a href="" title="BombIt"><img src={Bomb} />
                            <legend>Bomb-it</legend>
                        </a>

                    </article>
                    <article id="blocos">

                        <a href="" title="Roblox"><img src={Roblox} />
                            <legend>Roblox</legend>
                        </a>
                    </article>
                    <article id="blocos">

                        <a href="" title="fireboy-watergirl"><img src={fireboywatergirl} />
                            <legend>fireboy-watergirl</legend>
                        </a>

                    </article>
                    <article id="blocos">

                        <a href="" title="Agar.io"><img src={agario} />
                            <legend>Agar.io</legend>
                        </a>

                    </article>

                </section>
                <footer>
                    <p>Powered by Yggdrastar &reg;</p>
                </footer>
            </body>
        </>
    )
}

export default Pagprincipal