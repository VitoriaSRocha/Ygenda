/*import app from './firebase';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Layout/estilo.css'
import { db, auth } from './firebase';
import { Routes, Route, } from 'react-router-dom';
import assets from './assets';

function Recomendacoes() {
    return (
        <>
            <body>
                <header id="rec">
                    <h1>RECOMENDAÇÕES</h1>
                </header>

                <div id="cont">
                    <h1> JOGOS </h1>
                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/BombIt.jpg" alt="Bomb It">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Bomb It</legend>

                                <p>Bomb It é um jogo gratuito de ação no estilo arcade que funciona diretamente do browser. Nele o jogador precisará eliminar os adversários para avançar por fases cada vez mais desafiantes e aumentar sua posição no ranking de pontuação.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/Roblox.jpg" alt="Roblox">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Roblox</legend>

                                <p>Roblox é uma plataforma de jogos MMOSG e Sandbox baseados normalmente em mundo aberto, multiplataforma e simulação que permite criar do zero seu próprio mundo virtual chamado de 'experiência' ou 'place' onde os milhares de jogadores da plataforma podem interagir sobre.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/fireboy-watergirl.jpg" alt="fireboy-watergirl">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Fireboy and Watergirl</legend>

                                <p> a série Fireboy and Watergirl é um sucesso entre os jogos de plataforma. Em destaque, os games trazem um divertido modo multiplayer em que os jogadores precisam trabalhar juntos para resolverem quebra-cabeças....
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>
                    <div id="linkcont">
                        <a href="">Ver Mais +</a>
                    </div>
                </div>

                <div id="cont">
                    <h1> FILMES </h1>
                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/coraline jpg-q_x-xxyxx.jpg" alt="Coraline">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Coraline e o Mundo Secreto</legend>

                                <p>Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/harry potter.jpg" alt="Harry Potter">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Harry Potter</legend>

                                <p>Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/jurasic park.jpg" alt="Jurassic park">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Jurassic Park - Parque dos Dinossauros</legend>

                                <p>Os paleontólogos Alan Grant, Ellie Sattler e o matemático Ian Malcolm fazem parte de um seleto grupo escolhido para visitar uma ilha habitada por dinossauros criados a partir de DNA pré-histórico. O idealizador do projeto e bilionário John Hammond garante a todos que a instalação é completamente segura. Mas após uma queda de energia, os visitantes descobrem, aos poucos, que vários predadores ferozes estão soltos e à caça.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>
                    <div id="linkcont">
                        <a href="">Ver Mais +</a>
                    </div>
                </div>

                <div id="cont">
                    <h1> LIVROS </h1>
                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/O-ultimo-desejo.jpg" alt="O-ultimo-desejo">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>O Último Desejo - The Witcher</legend>

                                <p>Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/senhor dos aneis.jpg" alt="Senhor dos aneis">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>O Senhor dos Anéis</legend>

                                <p>A história narra o conflito contra o mal que se alastra pela Terra-média, através da luta de várias raças - Humanos, Anãos, Elfos, Ents e Hobbits - contra Orques, para evitar que o "Anel do Poder" volte às mãos de seu criador Sauron, o Senhor Sombrio.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/narnia_jpg-q_x-xxyxx.jpg" alt="Narnia">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>As Crônicas de Nárnia - O Leão, a Feiticeira e o Guarda-Roupa</legend>

                                <p>Durante os bombardeios da Segunda Guerra Mundial de Londres, quatro irmãos ingleses são enviados para uma casa de campo onde eles estarão seguros. Um dia, Lucy encontra um guarda-roupa que a transporta para um mundo mágico chamado Nárnia. Depois de voltar, ela logo volta a Nárnia com seus irmãos, Peter e Edmund, e sua irmã, Susan. Lá eles se juntam ao leão mágico, Aslan, na luta contra a Feiticeira Branca.
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>
                    <div id="linkcont">
                        <a href="">Ver Mais +</a>
                    </div>
                </div>

                <div id="cont">
                    <h1> ATIVIDADES </h1>
                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/desenho.jpg" alt="desenho">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Desenho</legend>

                                <p>Melhore seus desenhos
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/linguagem-de-programação.jpg" alt="progamacao">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>Programação</legend>

                                <p>
                                    Pratique progamação
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>

                    <div id="parte">
                        <div id="blocoRec">
                            <img src="assets/bessa_exercicio_net.jpg" alt="exercicios fiscos">
                        </div>
                        <div id="texto">
                            <fieldset>
                                <legend>exercicios fisico</legend>

                                <p>Melhore sua saúde  com exercicios fisico
                                </p>
                            </fieldset>
                        </div>
                        <div id="olhar">
                            <button id="olharBotao">Dê uma olhada</button>
                        </div>
                    </div>
                    <div id="linkcont">
                        <a href="">Ver Mais +</a>
                    </div>
                </div>

                <div>
                    <footer>
                        <p>Powered by Yggdrastar &reg;</p>
                    </footer>
                </div>

            </body>
        </>
    )
}*/