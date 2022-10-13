import React from 'react'
export function CardVideo(){
    const titulo = "Título do vídeo"

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
      }
    return(
                <div className="box-pagina-principal" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""></img>
                    <h4>{titulo}</h4>
                    </div>
    )
    
}
export default CardVideo;
/*  COMPONENTES
Exercício 1
Primeiro, vamos criar um componente para representar o Card de Vídeo. Chame-o de CardVideo. 
Para facilitar nosso trabalho, crie este Componente em um arquivo chamado CardVideo.js. 
Agora, os cards de vídeo serão chamados por meio deste componente. Portanto, altere os elementos HTML 
que foram criados no nosso App.js, para que ao invés de serem HTML, serem o componente CardVideo. 
Todos os vídeos terão a mesma aparência, 
mas enquanto não conhecemos props (matéria da próxima aula), podemos deixar assim.

Lembre-se de tornar a função exportável, e importá-la no App.js.

Exercício 2
Depois de criar o CardVideo, crie um componente InfosUsuario, que guarde uma imagem e um nome de usuário. 
Vamos criar este componente, pois estas informações são passíveis de reutilização em outros contextos. 
Crie um arquivo InfosUsuario.js para guardar este componente. 
Todos os vídeos terão o mesmo autor, por ora.

Exercício 3
Após criar ambos os componentes, adicione InfosUsuario ao corpo do componente que guarda os 
cards do video. Agora, seu App.js deve exibir cards de vídeo iguais, que contenham também 
informações sobre o usuário que fez o vídeo.*/