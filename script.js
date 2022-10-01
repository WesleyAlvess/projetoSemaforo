const img = document.querySelector('#img');
const buttons = document.querySelector('#buttons');
let colorIndex = 0;

// Pegando alvo pelo id.
const trafficLight = (event) => {
    turnOn[event.target.id]();
}


const nextIndex = () => {
    
    // Usando ternario = codigo menor.
    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    
    // if (colorIndex < 2) {
    //     colorIndex++
    // } else {
    //     colorIndex = 0;
    // }
   
}

const changeColor = () => {
    const colors = ['vermelho', 'amarelo', 'verde']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

// Armazenando cores dentro do objeto.
const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => setInterval(changeColor, 1000 )
}

// Add um evento ao elelmento pai.
buttons.addEventListener('click', trafficLight);





