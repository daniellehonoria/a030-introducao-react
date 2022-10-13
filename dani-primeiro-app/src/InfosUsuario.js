/*Exercício 2
Depois de criar o CardVideo, crie um componente InfosUsuario, que guarde uma imagem e um nome de usuário. Vamos criar este componente, 
pois estas informações são passíveis de reutilização em outros contextos. 
Crie um arquivo InfosUsuario.js para guardar este componente. 
Todos os vídeos terão o mesmo autor, por ora.

Exercício 3
Após criar ambos os componentes, adicione InfosUsuario ao corpo do componente que 
guarda os cards do video. Agora, seu App.js deve exibir cards de vídeo iguais, 
que contenham também informações sobre o usuário que fez o vídeo.*/

import React from "react";

export function InfosUsuario(){
    const nomeUsuario= "Danielle"

    return(
        <div class="img-usuario">
            <img src= "https://thumbs.dreamstime.com/b/%C3%ADcone-do-homem-do-usu%C3%A1rio-nenhuma-cara-43652345.jpg" alt="Imagem usuario"/>
            <h4>{nomeUsuario}</h4>
        </div>

    )
}