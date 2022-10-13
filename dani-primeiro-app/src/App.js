import logo from './logo.svg';
import './App.css';
import { CardVideo } from './CardVideo'
import {InfosUsuario} from './InfosUsuario'

export default function App() {

    return (
        <div>
            <div className="tela-inteira">
                <header>
                    <h1>LabeTube</h1>
                    <input type="text" placeholder="Busca" id="campoDeBusca" />
                </header>

                <main>
                    <nav className="menu-vertical">
                        <ul>
                            <li className="botoes-meunu-vertical">Início</li>
                            <li className="botoes-meunu-vertical">Em alta</li>
                            <li className="botoes-meunu-vertical">Inscrições</li>
                            <hr>
                            </hr>
                            <li className="botoes-meunu-vertical">Originais</li>
                            <li className="botoes-meunu-vertical">Histórico</li>
                        </ul>
                    </nav>

                    <section className="painel-de-videos">
                        <CardVideo />
                        <CardVideo />
                        <CardVideo />
                        <CardVideo />
                        <CardVideo />
                        <CardVideo />
                        <CardVideo />
                        <CardVideo />
                    </section>
                    <section className='infos-usuario'>
                    <InfosUsuario/>
                    </section>
                </main>

                <footer>
                    <h4>Oi! Eu moro no footer!</h4>
                </footer>
            </div>
        </div>
    );
}


/*  COMPONENTES
Exercício 1
Primeiro, vamos criar um componente para representar o Card de Vídeo. Chame-o de CardVideo. 
Para facilitar nosso trabalho, crie este Componente em um arquivo chamado CardVideo.js. 
Agora, os cards de vídeo serão chamados por meio deste componente. Portanto, altere os elementos HTML que foram criados no nosso App.js, 
para que ao invés de serem HTML, serem o componente CardVideo. Todos os vídeos terão a mesma aparência, 
mas enquanto não conhecemos props (matéria da próxima aula), podemos deixar assim.

Lembre-se de tornar a função exportável, e importá-la no App.js.

Exercício 2
Depois de criar o CardVideo, crie um componente InfosUsuario, que guarde uma imagem e um nome de usuário. Vamos criar este componente, 
pois estas informações são passíveis de reutilização em outros contextos. Crie um arquivo InfosUsuario.js para guardar este componente. 
Todos os vídeos terão o mesmo autor, por ora.

Exercício 3
Após criar ambos os componentes, adicione InfosUsuario ao corpo do componente que guarda os cards do video. 
Agora, seu App.js deve exibir cards de vídeo iguais, que contenham também informações sobre o usuário que fez o vídeo.*/

/*PROPS
Exercício 1
No App.js, crie um objeto com as informações do seu vídeo que são
 mostradas na tela (imagem e título). Passe essas informações 
por props para o seu componente CardVideo, criado na aula passada.

Exercício 2
Agora, no componente pai de InfosUsuario, componente também 
criado na aula passada. Passe as informações do usuário por props.*/