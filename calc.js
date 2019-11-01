const buttons = document.querySelectorAll('.button');
let numDisplayed = '';
let newNum = false;
let operator = '';
let firstNum = 0;

let add = function(x,y) {
    return x + y;
}

let subtract = function(x,y) {
    return x - y;
}

let multiply = function(x,y) {
    return x * y;
}

let divide = function(x,y) {
    return x / y;
}

let newNumSwitch = function() {
    switch(newNum) {
        case true:
            newNum = false;
        case false:
            newNum = true;
    }
}

let operate = function(x, y) {
    switch (operator) {
        case add:
            return add(x,y);
            break;
        case subtract:
            return subtract(x,y);
            break;
        case multiply:
            return multiply(x,y);
            break;
        case divide:
            return divide(x,y);
            break;
    }
}

let display = function(display) {
    //let viewport = document.getElementById(view);
    document.getElementById('view').innerHTML = display;
}

let numberConcat = function(thisChar) {
    numDisplayed = numDisplayed.concat(thisChar);
    display(numDisplayed);

}



let buttonCheck = function(button) {
    if(newNum == true) {
        newNumSwitch();
        firstNum = numDisplayed;
        numDisplayed = '';
    }
    console.log(button + ' ' + newNum);
    switch (button) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            numberConcat(button);
            break;
        case '.':
            if (numDisplayed.includes('.') == false) {
                numberConcat(button);
            }
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            newNumSwitch();
            operator = button;
        case 'plusMinus':
            numDisplayed = numDisplayed * -1;
            display(numDisplayed);
        default:
            break;
    }
}


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonPress = button.getAttribute('data-key');
        buttonCheck(buttonPress);
        
    });
});