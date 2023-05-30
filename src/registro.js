import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Layout/estilo.css'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import './Layout/estilo.css'
export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
  
    async function handleRegister(e) {
      e.preventDefault();
  
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate('/pagina-principal', { replace: true })
          })
          .catch(() => {
            console.log("ERRO AO FAZER O CADASTRO")
          })
  
  
      } else {
        alert("Preencha todos os campos!")
      }
  
  
    }
  
    return (
        <div>
            <section id="cadastro">
                
            <form className="form" onSubmit={handleRegister}>
                <h1>Cadastro</h1>
             

                <label for="email">
                    <input type="email" placeholder="Email" id='Colores' onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label for="senha">
                    <input type="password" placeholder="Senha" id='Colores' onChange={(e) => setPassword(e.target.value)} />
                </label>

             
                <br />
                <button type="submit" >Cadastrar</button>


</form>
              
<Link  id='Colores3' to="/">
          Já possui uma conta? Faça login!
        </Link>
            </section>
            
            <footer>
                <p>Powered by Yggdrastar &reg;</p>
            </footer>

        </div>
    )



}

