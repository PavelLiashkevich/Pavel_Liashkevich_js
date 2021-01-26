// Задание 1
let number = +prompt('Введите число:');

alert('Ваше число во 2-ой степени - ' + number ** 2);


// Задание 2
let oneNumber = +prompt('Введите первое число:');
let twoNumber2 = +prompt('Введите второе число:');

alert(`Среднее арифметическое этих чисел - ${(oneNumber + twoNumber) / 2}`);


// Задание 3
let squareSide = +prompt('Укажите длину стороны квадрата:');

alert('Площадь данного квадрата составляет - ' + `${squareSide ** 2} см.кв.`);


// Задание 4 
const mile = '0.621371';
let km = +prompt('Введите длину в километрах:');

alert('Ваша длина в милях равна - ' + km * mile);


// Задание 5
//			(Вариант 1)
let oneNumber = +prompt('Введите первое число:');
let twoNumber = +prompt('Введите второе число:');

alert('Сумма данных чисел - ' + `${oneNumber + twoNumber}`);
alert('Разность данных чисел - ' + `${oneNumber - twoNumber}`);
alert('Умножение данных чисел - ' + `${oneNumber * twoNumber}`);
alert('Деление первого числа на второе - ' + `${oneNumber / twoNumber}`);

//			(Вариант 2)
let oneNumber = +prompt('Введите первое число:');
let twoNumber = +prompt('Введите второе число:');

alert(
		'Сумма данных чисел - ' + `${oneNumber + twoNumber}` + 
		'\nРазность данных чисел - ' + `${oneNumber - twoNumber}` + 
		'\nУмножение данных чисел - ' + `${oneNumber * twoNumber}` + 
		'\nДеление первого числа на второе - ' + `${oneNumber / twoNumber}`
		);


// Задание 6
let valueA = +prompt('Введите значение "a":');
let valueB = +prompt('Введите значение "b":');

alert('Значение "x" для формулы a * x + b = 0 будет равным = ' + `${-(valueB / valueA)}`);


// Задание 7 
let hours = +prompt('Введите сколько сейчас часов:');
let minutes = +prompt('Введите сколько сейчас минут:');

alert('До следующего дня осталось: ' + 
		  `${24 - hours} часов ` + `${60 - minutes} минут`);


// Задание 8
let threeNumber = +prompt('Введите трехзначное число:');

alert('Ваше число - ' + `${Math.trunc(threeNumber / 10) % 10}`);


// Задание 9
let valueNumber = +prompt('Введите пятизначное число:');
let numberFive = valueNumber % 10;
let allNumber = Math.trunc(valueNumber / 10);

alert('Последняя цифра теперь в начале - ' + `${numberFive}` + `${allNumber}`);


// Задание 10 
let cash = +prompt('Введите общую сумму продаж за месяц:');

alert('Ваша зарплата за этот месяц составляет - ' + `${(cash * 0.1) + 250} $`);


/* ================== Часть №2 =================== */


// Задание 1 
let currentUserName = prompt('Введите свое имя:');

alert('Привет, ' + `${currentUserName}!`);


// Задание 2 
const yearToday = '2021';
let dateBirth = +prompt('Введите год своего рождения:');

alert('На данный момент Ваш возраст - ' + `${yearToday - dateBirth} лет,`
		+ ' либо же Вам - ' + `${yearToday - dateBirth - 1}!`);


// Задание 3
const sideFour = '4';
let squareSide = +prompt('Введите длину стороны квадрата');

alert('Периметр данного квадрата составляет - ' + `${sideFour * squareSide} см.`);


// Задание 4
const circlePi = '3.14';
let circleRadius = +prompt('Введите длину радиуса окружности:');

alert('Площадь данной окружности составляет - ' + `${circlePi * circleRadius ** 2} см.кв.`);


// Задание 5
let distanceCity = +prompt('Укажите расстояние в километрах между двумя городами:');
let realizationTime = +prompt('За какое время (в часах) Вы хотите добраться из одного города в другой:');

alert('Вам необходимо двигаться со скоростью - '
		+ `${distanceCity / realizationTime} км/ч, чтобы успеть вовремя!`);


// Задание 6 
const valueCurrency = '0.824';
let dollars = +prompt('Введите нужную сумму долларов для конвертации в евро:');

alert('Перевод данной суммы - ' + `${dollars * valueCurrency} евро`);


// Задание 7 
const oneGb = '1000';
const oneFile = '820';
let memoryUsb = +prompt('Укажите объем Вашего USB-накопителя:');

alert('Такое количество файлов поместится на данный USB-накопитель: ' 
		+ `${Math.trunc(memoryUsb * oneGb / oneFile)}`);


// Задание 8 
let yourCash = +prompt('Введите сумму лежащую в Вашем кошельке:');
let priseChocolate = +prompt('Укажите цену одной шоколадки:');

alert('Количество шоколадок, которое вы можете купить: ' + `${Math.trunc(yourCash / priseChocolate)}` 
		+ '\nВаша сдача: ' + `${yourCash - (Math.trunc(yourCash / priseChocolate)) * priseChocolate}`
		);


// Задание 9 
let threeNumber = +prompt('Введите трехзначное число:');
let numberThree = threeNumber % 10;
let numberTwo = ((threeNumber % 100) - numberThree) / 10;
let numberOne = Math.trunc((threeNumber / 1000) * 10);

alert('Число цифрами наоборот - ' + `${numberThree}` + `${numberTwo}` + `${numberOne}`);
