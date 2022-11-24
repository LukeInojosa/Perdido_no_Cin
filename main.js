//armazenando em caracter a referência para a tag img que apresenta um gif do homem andando
const character = document.getElementsByClassName("character")[0];
//armazenando em containerCaracter o container que comporta o gif do andarilho
const containerCharacter = document.getElementsByClassName("container-character")[0];
//determinado uma velocidade para o andarilho e
//armazenando na constante VELOCITY
const VELOCITY = 10;
//contantes que possiem largura e altura da tela, respectivamente
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;
//posição inicial do andarilho em relação ao body determinada no codigo css
let xPosition = 500;
let yPosition = 300;

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];
//coloca  ajanela para ficar esperando um evento de pressionar tecla
//se este evento acontecer, a função com o argumento event é realizada
//event é um objeto qu armazena informações mais específicas sobre o evento
window.addEventListener("keydown", (event) => {
    // atribui a key a tecla que foi pressionada
    const key  = event.key;
    //verifica se a tecla que foi pressionada é alguma das teclas que 
    //estamos querendo monitorar
    //se sim, keyPressed Avaliable é true, caso contrario, é false
    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })
    //se a tecla pressionda não foi uma seta, então nós saímos da função
    if(!keyPressedAvaiable) return;
    // verifica se a classe do personagem é alguma das directions.css
    // se sim, retira esta classe da div para determinar outra baseado no imput do teclado
    // isso é necessário, caso contrário a div que contém o personagem poderia 
    // ter duas classes apontando para direcçoes distintas
    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })

    //aqui erá a lógica do deslocamento e mudança do frame do personagem baseada no input do teclado 
    //cada 'if' verifica se uma tecla das setas foi pressionada e 
    //caso tenha sido , adiciona uma classe à div do personagem, fazendo com que
    //o frame do personagem tenha outra estilização(o que nos dá a impressão que ele mudou de lugar).
    //Depois disso , é modificada a variável posição do personagem
    if(key === "ArrowUp" && yPosition > 0){
        character.classList.add("turnUp");
        yPosition -= VELOCITY;
    }

    if(key === "ArrowDown" && yPosition < screen.height - 200){
        character.classList.add("turnDown");
        yPosition += VELOCITY;
    }

    if(key === "ArrowLeft" && xPosition > 0){
        character.classList.add("turnLeft");
        xPosition -= VELOCITY;
    }

    if(key === "ArrowRight" && xPosition < screen.width - 150){
        character.classList.add("turnRight");
        xPosition += VELOCITY;
    }
    //aqui a tag com o personagem tem sua posição absoluta modificada para as novas coordenadas
    //que determinamos basada no imput do teclado. E assim termina o código 
    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
