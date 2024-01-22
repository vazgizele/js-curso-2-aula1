let drawnNumberList = [];
let numberlimit = 10;
let randomNumber =  generateRandomNumber();
let attempts = 1;

function showTextOnScreen(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsivevoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function showInitialMessage() {
    showTextOnScreen('h1', 'Jogo do número secreto');
    showTextOnScreen('p','Escolha um número entre 1 e 10');
}
showInitialMessage();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == randomNumber) {
        showTextOnScreen('h1', 'Acertou!');
        let wordAttempts = attempts > 1 ? 'tentaivas' : 'tentativa';
        let attemptsMessage = `Você descobriu o número secreto com ${attempts} ${wordAttempts}!`;
        showTextOnScreen('p', attemptsMessage);
        document.getElementById('reiniciar').removeAttribute('disabled')
        } else {
                if (chute > randomNumber) {
                    showTextOnScreen('p', `O número secreto é menor que ${chute}`);
                } else {
                    showTextOnScreen('p', `O número secreto é maior que ${chute}`);
                }
                attempts++;
                clearField();
        }
}

function generateRandomNumber() {
    drawnNumer = parseInt(Math.random() * numberlimit + 1);
    quantityElementsList = drawnNumberList.length;

    if (quantityElementsList == 3) {
        quantityElementsList = [];
    }
    if (drawnNumberList.includes(drawnNumer)) {
        return generateRandomNumber();
    } else {
        drawnNumberList.push(drawnNumer);
        console.log(drawnNumberList)
        return drawnNumer;
    }
}

function clearField() {
    chute = document.querySelector('input');
    chute.value = '';
}

function newGame() {
    randomNumber = generateRandomNumber();
    clearField();
    attempts = 1;
    showInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
