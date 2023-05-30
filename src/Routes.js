import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';

import Login from './login';
import PaginaPrincipal from './pg';
import Perfil from './perfil';
import Recomendacoes from './recom';
import Registro from './registro';
import Registro_crianca from './ecriança';
import Registro_escolhas from './escolhas';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Login/>}/>
                <Route path='/pagina-principal' element = {<PaginaPrincipal/>}/>
                <Route path='/perfil' element = {<Perfil/>}/>
                <Route path='/recomendacoes' element = {<Recomendacoes/>}/>
                <Route path='/registro' element = {<Registro/>}/>
                <Route path='/registro-crinca' element = {<Registro_crianca/>}/>
                <Route path='/registro-escolhas' element = {<Registro_escolhas/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;