// - Массив с числами:
let array = [1, 4, 23, 7, 55, 0, -37, 0, 9, 15];

// ======================== 1) Найдите сумму элементов массива:
function sum(arr) {
	return sumElem = arr.reduce((acc, item) => {
		return acc + item;
	}, 0)
}	

sum(array);
console.log(sumElem);


// ======================== 2) Найдите сумму первых N элементов до первого нуля:
let zeroIndex = array.indexOf(0);

function sumElemUpZero(arr) {
	let sumElements = arr.reduce((acc, item, index) => {
		if (index < zeroIndex) {
			return acc + item;
		}
		return acc;
	}, 0)
	console.log(sumElements);
}

sumElemUpZero(array);


// ======================== 3) Найдите сумму элементов после нуля:
function sumElemAfterZero(arr) {
	let sumElemAfterZero = arr.reduce((acc, item, index) => {
		if (index > zeroIndex) {
			return acc + item;
		}
		return acc;
	}, 0)
	console.log(sumElemAfterZero);
}
sumElemAfterZero(array);


// ======================== 4) Найдите сумму последних N элементов до первого нуля с конца: 
// ---- Option 1:
let reverse = array.reverse();
let zeroIndexRev = array.indexOf(0);

function sumElemRevUpZero(arr) {
	let sumElemRevUpZero = arr.reduce((acc, item, index) => {
		if (index < zeroIndexRev) {
			return acc + item;
		}
		return acc;
	}, 0);
	console.log(sumElemRevUpZero);	
}

sumElemRevUpZero(array);

// ---- Option 2:
let sumElemAfter = array.splice(array.lastIndexOf(0)).reduce((acc, item) => acc + item, 0);
console.log(sumElemAfter);

// ---- Option 3:
let reverse2 = array.reverse();
let indexZero = array.findIndex((item) => item === 0);
let length = array.length;
let indexLastZero = length - indexZero - 1;
let reverseBack = array.reverse();

function sumElemFirstZero() {
	let sumElemFirstZero = array.reduceRight((acc, item, index) => {
		if(index > indexLastZero) {
			return acc + item;
		}
		return acc;
	}, 0)
	console.log(sumElemFirstZero);
}

sumElemFirstZero(array)

// ---- Oprion 4:
function sumElem3(arr) {
	let a = arr.lastIndexOf(0);
	let sumsumsum = arr.reduce((acc, item, index) => {
		if (index > a) {
		return acc + item;
	}
	return acc;
	}, 0)
	console.log(sumsumsum);
}
sumElem3(array)


// ======================== 5) Сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
let counter = 0;
let sumElemTen = array.reduce((acc, item) => {
	if (counter > 10) {
		return acc;
	}
	else {
		counter += item;
		return acc += 1;
	}
}, 0);

console.log(sumElemTen);


// ======================== 6) Сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
let counterTask6 = 0;
let sumElemTask6 = array.reduceRight((acc, item) => {
	if (counterTask6 > 10) {
		return acc;
	}
	else {
		counterTask6 += item;
		return acc += 1;
	}
}, 0);

console.log(sumElemTask6);
 

// ======================== Склеивание массивов, содержащихся в объектах массива:
let friends = [
	{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
	{ name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
	{ name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
	]

let allBooks = friends.reduce((acc, item) => {
	return[ ...acc, ...item.books]
}, []);

console.log(allBooks);