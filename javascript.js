//Create buttons with numbers and operators

    //Add number buttons
const numberContainer = document.querySelector('.numbers');

for (let i = 0; i <= 2 ; i++) {
    const column = document.createElement('div');

    column.classList.add(`numbersC${i+1}`);
    numberContainer.appendChild(column);

    for (let j=1; j <= 3 ; j++){
        const row = document.querySelector('.column')
        const divRow = document.createElement('button');
        divRow.classList.add('numbersR');
        a=0;
        a = 3*i + j;

        divRow.textContent = `${a}`;
        column.appendChild(divRow);
    }

};

    //Add buton zero and period
const lastRow = document.createElement('div');
lastRow.classList.add('lastRow');
numberContainer.appendChild(lastRow);

const zero = document.querySelector('.lastRow');
const btnZero = document.createElement('button');
btnZero.classList.add('btnZero');
btnZero.textContent = 0;
zero.appendChild(btnZero);

const btnPeriod = document.createElement('button');
btnPeriod.classList.add('btnPeriod');
btnPeriod.textContent = '.';
zero.appendChild(btnPeriod);

    //Add operators
const operatorsContainer = document.querySelector('.operators');

const operatorColumn = document.createElement('div');
operatorColumn.classList.add('operatorColumn')
operatorsContainer.appendChild(operatorColumn);

    //Addition
const operators = document.querySelector('.operatorColumn')
const btnAdd = document.createElement('button');
btnAdd.classList.add('addition');
btnAdd.textContent = '+';
operatorColumn.appendChild(btnAdd);

    //Subtraction
const btnSub = document.createElement('button');
btnSub.classList.add('subtraction');
btnSub.textContent = '-';
operatorColumn.appendChild(btnSub);

    //Multiplication
const btnMult = document.createElement('button');
btnMult.classList.add('multiplication');
btnMult.textContent = '*';
operatorColumn.appendChild(btnMult);

    //Division
const btnDiv = document.createElement('button');
btnDiv.classList.add('division');
btnDiv.textContent = '/';
operatorColumn.appendChild(btnDiv);

//Calculator

const sum = function(a,b) {
    return a + b;
}

const sub = function(a,b) {
    return a - b;
}

const mult = function(a,b) {
    return a * b;
}

const division = function(a,b) {
    return a / b;
}

