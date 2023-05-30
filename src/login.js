
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  applyActionCode } from "firebase/auth";
import app from './firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout/estilo.css'
import ic_log from './assets/ic_log.png';
import RoutesApp from './Routes';
import { Routes, Route } from 'react-router-dom';


import { auth } from './firebase'


import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (email !== '' && password !== '') {

      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        
          navigate('./pagina-principal', { replace: true })
        })
        .catch(() => {
          alert("ERRO AO FAZER O LOGIN")
        })

    } else {
      alert("Preencha todos os campos!")
    }


  }
 
    return (
        <div>
            <section id="logo">
                <img src={ic_log} />
                <h1>Ygenda</h1>
            </section>

            <section id="login">
                <div>
                <form className="form" onSubmit={handleLogin}>
                    <input type="email" id="entrada_email" onChange={(e) => setEmail(e.target.value)} />
                    <input style={{ marginBottom: '5px' }} id="entrada_senha" type="password" onChange={(e) => setPassword(e.target.value)} />

                    <input type="checkbox" class="mostrar_senha" id="mostrarsenha" name="mostrarsenha" onClick={mostrarSenha} />
                    <label for="mostrarsenha" style={{}}>Mostar senha</label>
                    <legend style={{ textIndent: '15px' }}><a href>Esqueceu a senha?</a></legend><br />

                    <a href="questA.html" />

                    <button className='' type="submit" >Acessar</button>
                    <Link to={'/registro-escolhas'}><button >Registrar</button></Link>
</form>
                </div>
            </section>

            <footer>
                <p>Powered by Yggdrastar &reg;</p>
            </footer>

        </div>
    );

    function mostrarSenha() {
        var senha = document.getElementById('entrada_senha');

        if (senha.type == 'password') {
            senha.type = 'text';
        } else {
            senha.type = 'password';
        }
    }

    function play() {
        var audio = new Audio('De4.mp3');
        audio.play();
        window.location.href = 'paginaprincipal.html'

    }
}

