// Задание 1. Создать массив "Список покупок". Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let shoppingList = [
	{title: 'bread', count: 2, bought: true},
	{title: 'milk', count: 3, bought: false},
	{title: 'meat', count: 2, bought: true},
	{title: 'cheese', count: 4, bought: true},
];

// 1. Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом - купленные.
let list = '';
let listTrue = '';
function shop(object) {
	for (let i = 0; i < object.length; i++) {
		if (object[i].bought !== true) {
			list += object[i].title + ' ';			
		}
	}
	for (let i = 0; i < object.length; i++) {
		if (object[i].bought == true) {
			listTrue += object[i].title + ', ';
		}
	}
}
shop(shoppingList);
console.log(`Этот товар не куплен - ${list}`);
console.log(`Купленный товар - ${listTrue}`);

// 2. Добавление покупки в список.
function addProduct(product) {
    let productOfList = shoppingList.find((item) => item.title === product);
    if (productOfList) {
        productOfList.count++;
    } else {
        shoppingList.push({ title: product, count: 1, bought: false });
    }
}
 addProduct('banana');
 console.log(shoppingList);

// 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function markProduct(product) {
    shoppingList.forEach((element) => {
        if (element.title === product) {
            element.bought = true;
        }
    });
}
markProduct('milk');
console.log(shoppingList);


// Задание 1. В массиве, состоящем из n элементов, вычислить:
// 1.1 Номер минимального элемента массива.

let element = [17, 46, 8, 34, 5];
let minElement = element[0];

element.forEach(item => {
	if (item < minElement) {
		minElement = item
	}	
});

let minIndex = element.findIndex(a => a === minElement);

console.log(minIndex, minElement);

// 1.2 Сумму модулей элементов массива, расположенных после первого
// отрицательного элемента.

let elementTwo = [17, 46, -8, 34, 5];
let negElement = 0;
let a;
for (let i = 0; i < elementTwo.length; i++) {
	if (a) {
		negElement += Math.abs(elementTwo[i]);
	}
	if (elementTwo[i] < 0) {
		a = true;
	}
};

console.log(negElement);


// Задание 2. В массиве, состоящем из n элементов, вычислить:
// 1.1 номер максимального элемента массива;
let element = [17, 46, 8, 34, 5];
let maxElement = element[0];

element.forEach(item => {
	if (item > maxElement) {
		maxElement = item
	}	
});

let minIndex = element.findIndex(a => a === maxElement);
console.log(minIndex, maxElement);

// 1.2 Сумму элементов массива, расположенных после первого отрицательногоы элемента.

let element = [17, 46, -8, 34, -5];
let minIndex = element.findIndex(a => a < 0);

let sum = element.reduce(function(previousValue, currentValue, index, array) {
	if (index > minIndex) {
	return previousValue + Math.abs(currentValue);
	} 
	return previousValue;
}, 0);

console.log(sum);


// Задание 3. В массиве, состоящем из n элементов, вычислить:
// 1.1 количество элементов массива, лежащих в диапазоне от А до В; 

let element = [18, 520, 8, 68, 6, 177];
let a = element.reduce(function(previousValue, item) {
	if (item > 5 && item < 150) {
		return previousValue + 1;
	}
	return previousValue;
}, 0);

console.log(a);
 
// 1.2 сумму элементов массива, расположенных после максимального элемента.

let element = [18, 520, 8, 68, 6, 177];
let b = element[0];
	
element.forEach(item  => {
	if (item > b) {
		b = item;
	}
});

let c = element.findIndex(item => {
	return item === b;
})

let d = element.reduce(function (previousValue, item, index) {
	if (index  > c) {
		return previousValue + item;
	}
	return previousValue;
}, 0)

console.log(d);


// Задание 4. В массиве, состоящем из n элементов, вычислить:
// 1.1 количество элементов массива, равных 0;

let element = [17, 0, 23, 34, 5, 51];
function countZero(arr) {
    let count = 0;
    arr.forEach((item) => {
        if (item === 0) {
            count++;
        }
    });
    return count;
}

 console.log(countZero(element));

// 1.2 сумму элементов массива, расположенных после минимального элемента.

let arr = [17, 0, 23, 34, 5, 51];
let minIndex = arr.findIndex(a => a <= 0);

let sum = arr.reduce(function(previousValue, currentValue, index, array) {
	if (index > minIndex) {
	return previousValue + Math.abs(currentValue);
	} 
	return previousValue;
}, 0);

console.log(sum);


// Задание 5. В массиве, состоящем из n элементов, вычислить:
// 1. количество элементов массива, больших С;
let array = [17, 0, 23, 34, 5, 51];

function countElem(arr) {
	let c = 15; 
	let count = arr.forEach((acc, item) => {
		if (item > c) {
			return (acc += 1); 
		}
		return acc;
	}, 0);
	console.log(count);
}
countElem(array);



//Задание 6:
// - Создать массив из 10 случайных чисел:
let array = [23, 3, 67, -30, 8, 99, 12, -5, 50, 77];

//	1. Программа выводит его на экран.
console.log(array);

//	2. Программа выводит только четные элементы. 
let odd = [];
let even = [];
for (i = 0; i < array.length; i++) {
	if (array[i] % 2) {
		even.push(array[i])
	} else {
		odd.push(array[i])
		}
}
console.log(odd);
console.log(even);

//	3. Программа возвращает сумму всех элементов массива. 
let sum = 0;
for (i = 0; i < array.length; i++) {
		sum += array[i];
}
console.log(sum);

//	4. Программа возвращает его максимальный элемент. 
// - 1) 
function getMaxOfArray(array) {
	return Math.max.apply(null, array);
}
console.log(getMaxOfArray(array));

// - 2)
let num = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] > num) {
		num = array[i]
	}
}
console.log(num);

//	5. Программа добавляет новый элемент в массив по указанному индексу. 
array.splice(4, 1, 100);
console.log(array);

//	6. Программа удаляет элемент из массива по указанному индексу.
// - 1)
let index = 5;
if (index > -1) {
	array.splice(index, 1); 
}
console.log(array);

// - 2) Function 
let delteIndex = 2;
let removeNumber = ((arr, index) => { 
	arr.splice(index, 1)
})
removeNumber(array, delteIndex);
console.log(array);


// Задание: 
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
let arrayMusic = ['Jazz', 'Blues']
console.log(arrayMusic);

// 2. Добавьте «Рок-н-ролл» в конец.
arrayMusic.push('Rock-n-roll')
console.log(arrayMusic);

// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
let middleElem = Math.trunc(arrayMusic.length / 2);
arrayMusic.splice(middleElem, 1, 'Classic')
console.log(arrayMusic);

// 4. Удалите первый элемент массива и покажите его.
let showElem = arrayMusic.splice(0, 1);
console.log(showElem);

// 5. Вставьте «Рэп» и «Регги» в начало массива.
arrayMusic.unshift('Rap', 'Reggae');
console.log(arrayMusic);


// -Функция которая преобразует переменную student в переменную output используя reduce.
let student = [
    { name: "AAA", enrollment: 100 },
    { name: "BBB", enrollment: 50 },
    { name: "AAA", enrollment: 50 },
    { name: "ССС", enrollment: 100 },
    { name: "BBB", enrollment: 100 },
    { name: "CCC", enrollment: 50 },
    { name: "CCC", enrollment: 150 },
];

Output: {   
	'50'[     
	{ name: 'BBB', enrollment: 50 },     
	{ name: 'CCC', enrollment: 50 }	],   
	'100'[ 	
	{ name: 'AAA', enrollment: 100 } ]
}

function sortByEnrollment(arr) {
    arr.sort((a, b) => a.enrollment - b.enrollment);
}
sortByEnrollment(student);
console.log(student);


// Задание 1. С картинки: 
let array = [1, 6, 83, 52, 8, 32, 9, -66];

let a = 5;
let b = 2;
let c = 0;

function getValue(arr) {
	arr.forEach(x => {
		if ((x < 0 ) && b !== 0) {
			console.log(`${a * Math.pow(x, 2) + b}`);
		}
		else if ((x < 0) && (b === 0)) {
			console.log(`${(x - a) / (x - c)}`);
		}
		else {
			console.log(`${x / c}`);
		}
	});
}

getValue(array);
