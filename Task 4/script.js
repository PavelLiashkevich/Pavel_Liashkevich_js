// Задание 1 
//Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.

var object = {
	leftHeight: {
		x: 2,
		y: 6,
	},
	rightBottom: {
		x: 9,
		y: 2,
	}
}


// 1. Функция принимает объект-прямоугольник и выводит информацию о нем (где какая точка расположена).

function printPoints(square) {
	console.log(`Точка А = x-${square.leftHeight.x}, y-${square.leftHeight.y}!`);
	console.log(`Точка B = x-${square.rightBottom.x}, y-${square.leftHeight.y}!`);
	console.log(`Точка C = x-${square.rightBottom.x}, y-${square.rightBottom.y}!`);
	console.log(`Точка D = x-${square.leftHeight.x}, y-${square.rightBottom.y}!`);
};

printPoints(object);


// 2. Функция принимает объект-прямоугольник и возвращает его ширину.

function getWidth(square) {
	let widthBC = Math.abs(square.rightBottom.y - square.leftHeight.y);
	let lengthAB = Math.abs(square.rightBottom.x - square.leftHeight.x);
		if (widthBC < lengthAB){
			console.log(`Ширина ${widthBC} см!`);
		} else if (widthBC>lengthAB) {
			console.log(`Ширина ${lengthAB} см!`);
		} else {
			console.log('Это квадрат!')
		};
}
getWidth(object)


// 3. Функция принимает объект-прямоугольник и возвращает его высоту.

function getHeight(square) {
	let hieghtSquare = Math.abs(square.leftHeight.y - square.rightBottom.y)
		console.log(`Высота ${hieghtSquare} см!`);
}
getHeight(object);


// 4. Функция принимает объект-прямоугольник и возвращает его площадь.

function getArea(square) {
	let area = Math.abs(square.rightBottom.y - square.leftHeight.y) *
		(square.rightBottom.x - square.leftHeight.x)
		console.log(`Площадь - ${area} см.кв.!`);
}
getArea(object);


// 5. Функция принимает объект-прямоугольник и возвращает его периметр.

function getPerimeter(square) {
	let perimeter = (Math.abs(square.rightBottom.x - square.leftHeight.x) +
	Math.abs(square.rightBottom.y - square.leftHeight.y)) * 2;
	console.log(`Периметр - ${perimeter} см!`);
}
getPerimeter(object);


// 6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину.

let changeW = +prompt('На сколько Вы хотите изменить ширину прямоугольника?');
function changeWidth(square) {
	widthBC = (changeW + Math.abs(square.rightBottom.y - square.leftHeight.y));
	console.log(`Новая ширина - ${widthBC} см!`);
}
changeWidth(object);


// 7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту

let changeH = +prompt('На сколько Вы хотите изменить высоту?');
function changeHeight(square) {
	height = (changeH + Math.abs(square.rightBottom.y - square.leftHeight.y));
	console.log(`Новая высота - ${height} см!`);
}
changeHeight(object);


// Задание 2
//Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом.

// 1. Функция для вывода на экран информации об автомобиле.

let myCar = {
	brand: 'Mercedes',
	model: 'GLS',
	year: 2020,
	averageSpeed: 100,
 };
 
 alert(Object.values(myCar));
 
 //2. Функция для подсчета необходимого времени
 
 function time (car, distance) {
	let speed = car.averageSpeed;
	let result = 0;
	let relax = 0;
 
	result = Math.trunc(distance / speed);
	result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)
	for (let hour = 1; hour <= result; hour++) {
	if (hour % 5 == 0) {
	  relax++;
	  result++;
	}
 }
	if(relax == 0) {
	  console.log(`Вы проедете эту дистанцию за ${result} часов, отдых Вам не понадобится`);
	} else {
	  console.log(`Вы проедете эту дистанцию за ${result} часов, отдых Вам понадобится в количестве ${relax} часов`);
	};
 }
 time(myCar, 450);  


// Задание 3 
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.

let firstNumber = {
	numerator: 6,
	denominator: 13,
}

let secondNumber = {
	numerator: 7,
	denominator: 12,
}


// 1. Функция сложения 2-х объектов-дробей.
function plus (firstNumber, secondNumber) {
	let resultUpNumber = (firstNumber.numerator * secondNumber.denominator) + 
	(secondNumber.numerator * firstNumber.denominator);
	let resultDownNumber = firstNumber.denominator * secondNumber.denominator;
	if (resultUpNumber % resultDownNumber === 0) console.log(`${resultUpNumber / resultDownNumber}`);
	else if (resultUpNumber > resultDownNumber) {
		let integerNum = Math.trunc(resultUpNumber / resultDownNumber);
		let remainder = resultUpNumber % resultDownNumber;
		console.log(`${integerNum} and ${remainder} / ${resultDownNumber}`);	
	}
}

plus (firstNumber, secondNumber);


// 2. Функция вычитания 2-х объектов-дробей.
function minus (firstNumber, secondNumber) {
	let resultUpNumber = (firstNumber.numerator * secondNumber.denominator) - 
	(secondNumber.numerator * firstNumber.denominator);
	let resultDownNumber = firstNumber.denominator * secondNumber.denominator;
	if (resultUpNumber % resultDownNumber === 0) console.log(`${resultUpNumber / resultDownNumber}`);
	else if (resultUpNumber > resultDownNumber) {
		let integerNum = Math.trunc(resultUpNumber / resultDownNumber);
		let remainder = resultUpNumber % resultDownNumber;
		console.log(`${integerNum} and ${remainder} / ${resultDownNumber}`);	
	} else { 
		console.log(`${resultUpNumber} / ${resultDownNumber}`);
	}	
}

minus(firstNumber, secondNumber);


// 3. Функция умножения 2-х объектов-дробей.
function multi (firstNumber, secondNumber) {
	let resultUpNumber = firstNumber.numerator * secondNumber.numerator;
	let resultDownNumber = firstNumber.denominator * secondNumber.denominator;
	console.log(`${resultUpNumber} / ${resultDownNumber}`);
}

multi(firstNumber, secondNumber);


// 4. Функция деления 2-х объектов-дробей.
function division(firstNumber, secondNumber) {
	let multiOne = firstNumber.numerator * secondNumber.denominator;
	let multiTwo = firstNumber.denominator * secondNumber.numerator;
	if (multiOne % multiTwo === 0) console.log(`${multiOne / multiTwo}`);
		else if (multiOne > multiTwo) {
			let integer = Math.trunc(multiOne / multiTwo);
			let remainder = multiOne % multiTwo
			console.log(`${integer} and ${remainder} / ${multiTwo}`);
		} 
		else { 
		console.log(`${multiOne} / ${multiTwo}`);
		}
}

division(firstNumber, secondNumber);



