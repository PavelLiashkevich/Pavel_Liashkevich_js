// - Задание 1. 
// 1.1 - Счетчик - сделать кнопку которая будет увеличивать значение счетчика на +1:
let counter = 0;
function clickButton(el) {
	counter++;
	el.innerHTML = 'Вы нажали на меня:' + counter;
}

// 1.2 - Счетчик - сделать две кнопки которые будут увеличивть и уменьшать счетчик на +1 и -1:
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let count = document.getElementById("buttonCountNumber");
let count2 = document.getElementById("num");
let number = 0;
let price = 500;

plus.onclick = function() {
    if (true) {
        number++;
        count.innerHTML = number;
        count2.value = number * price;
    }
};

minus.onclick = function() {
   if (true) {
       number--;
       count.innerHTML = number;
       count2.value = number * price;
    }
};


// - Задание 2. todo list - написать туду лист состоящий из инпута(куда пользователь будет вводить свой туду) и кнопки(по нажатию на которую туду будет добавляться в список с остальными туду); список туду сделать используя ul и li
let input = document.getElementById('input');
let button = document.getElementById('button');
let ul = document.createElement('ul');

function clickOnButton() {
    let li = document.createElement('li');
    let valueInput = input.value;
    li.innerHTML = valueInput;
    document.body.appendChild(ul);
    ul.appendChild(li);
    input.value = '';
}

//3. написать приложение сумматор - состоящий из 2ух инпутов куда пользователь будет вводить слагаемые и кнопку "посчитать" по нажатию на которую пользователю в диве ниже будет выведен результат вычисления
