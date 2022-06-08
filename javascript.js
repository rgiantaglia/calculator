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
        divRow.setAttribute('value',`${a}`);
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
btnZero.setAttribute('value', '0')
zero.appendChild(btnZero);

const btnPeriod = document.createElement('button');
btnPeriod.classList.add('btnPeriod');
btnPeriod.textContent = '.';
btnPeriod.setAttribute('value', '.')
zero.appendChild(btnPeriod);

//Calculator

//The separate functions aren't necessary as the equations are calculated 
//a constructor Formula after the values are taken from the array arr.

let arr = [];
let newArr = [];

const calculus = document.querySelectorAll('.calculator button').forEach(btn => btn.addEventListener('click', () => {

    a = btn.value;
    console.log(a);
   
    arr.push(a);

    function adjustArr (arr) {
        x = arr.join('');
        return x;
    }

    function result(){
        t = adjustArr(arr);
        return t;
    }
    result();

    //const input = document.querySelector('input');
    //input.value = t;
   return t;
}));

//Function to display correct symbols instead of * for multiplication and / for division
const display = document.querySelectorAll('.calculator button').forEach(btn => btn.addEventListener('click', () => {

    b = btn.innerText;
    console.log(b);
   
    newArr.push(b);

    function adjustArr (newArr) {
        x = newArr.join('');
        return x;
    }

    function result(){ 
        r = adjustArr(newArr);
        return r;
    }
    result();

    const input = document.querySelector('input');
    input.value = r;
   return r;
}));

let result = document.querySelector('.equalBtn');
result.addEventListener('click', () => {
    function calculate (fn) {
        return new Function('return ' + fn)();
    }
    calculate(t);
    if (calculate(t) == 'Infinity' || calculate(t) == '-Infinity') {
        alert ('You cannot dived a number by 0')
        return 'Error';
    }else {
    console.log(calculate(t));

    const inputResult = document.querySelector('.result');
    inputResult.value = Math.round(calculate(t)*100)/100;
    arr = [inputResult.value]; //resets arr to use result in new calculation
    newArr = [inputResult.value]; //resets newArr to display result
  
    }
});

let clear = document.querySelector('.clearBtn');
clear.addEventListener('click', () => {
    document.querySelector('.math').value = '';
    document.querySelector('.result').value = '';
    return newArr = [];
});
