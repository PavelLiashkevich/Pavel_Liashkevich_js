// Задание 1. В массиве, состоящем из n элементов, вычислить:
let array = [23, -9, 17, 0, 56, 87, -22, 340, 4];

// 1.1 – номер минимального элемента массива:
let numberMinElem = array.reduce((acc, item, index) => {
	if (item < acc[1]) {
		return [index, item]
	} else {
		return acc;
	}
}, [0, array[0]]);
console.log(numberMinElem);

// 1.2 - минимальный элемент массива:
let min = array.reduce(function(acc, item) {
	if (acc < item) {
		return acc;
	} else {
		return item;
	}
}, 0);
console.log(min);

// 2.1 - сумму элементов массива:
let sum = 0;
for (let i = 0; i < array.length; i++) {
	sum = sum + array[i];
}
console.log(sum);

// 2.2 - сумму элементов массива методом - Reduce:
let sum2 = array.reduce((acc, item) => {
	return acc + item;
}, 0);
console.log(sum2);

// 2.3 – сумму модулей элементов массива, расположенных после первого отрицательного элемента:
function sumElemArray(arr) {
	let minNumber = arr.find((item) => item < 0);
	let indexMinElem = arr.findIndex((item) => item === minNumber);
	let sum = arr.reduce((acc, elem, index) => {
		if (index > indexMinElem) {
			return (acc += Math.abs(elem));
		}
		return acc;
	}, 0);
	console.log(sum);
};
sumElemArray(array);
	

// Задание 2. В массиве, состоящем из n элементов, вычислить:
// 1.1 – индекс максимального элемента массива:
elemArray = array[0];
let index = 0;
for (let i = 0; i < array.length; i++) {
	if (array[i] > elemArray) {
		elemArray = array[i];
		index = i;
	}
}
console.log(index);

// 1.2 - индекс максимального элемента массива методом - Reduce: 
let indexMaxElem = array.reduce((acc, item, index) => {
	if (item > acc[1]) {
		return [index, item]
	} else {
		return acc;
	}
}, [0, array[0]])
console.log(indexMaxElem);

// 1.3 - максимальный элемент массива:
let max = array.reduce((acc, item) => {
	if (acc < item) {
		return item;
	} else {
		return acc;
	}
}, 0);
console.log(max);

// 2.1 – сумму элементов массива, расположенных после первого положительного элемента:
function sumElemArrayPos(arr) {
	let posNumber = arr.find((item) => item > 0);
	let indexPosElem = arr.findIndex((item) => item === posNumber);
	let sum = arr.reduce((acc, elem, index) => {
		if (index > indexPosElem) {
			return (acc += elem);
		}
		return acc;
	}, 0);
	console.log(sum);
};
sumElemArrayPos(array);


// Задание 3. В массиве, состоящем из n элементов, вычислить:
// 1.1 – количество элементов массива, лежащих в диапазоне от А до В: 
let a = 10;
let b = 100;
let numberElemArray = array.reduce((acc, item) => {
	if (item > a && item < b) {
		return (acc += 1);
	}
	return acc;
}, 0)
console.log(numberElemArray);

// 1.2 – сумму элементов массива, расположенных после максимального элемента:
function sumElemAfterMax(arr) {
	let posNumber = arr.find((item) => item > 0);
	let indexPosElem = arr.findIndex((item) => item === posNumber);
	let sum = arr.reduce((acc, elem, index) => {
		if (index > indexPosElem) {
			return (acc += elem);
		}
		return acc;
	}, 0);
	console.log(sum);
};
sumElemArrayPos(array);

// Задание 4. В массиве, состоящем из n элементов, вычислить:
// 1.1 – количество элементов массива, равных 0:
function numberZero(arr) {
	let count = arr.reduce((acc, item) => {
		if (item === 0) {
			return (acc += 1);
		}
		return acc;
	}, 0);
	console.log(count);
}
numberZero(array);

// 1.2 – сумму элементов массива, расположенных после минимального элемента:
let indexMinElem = array.findIndex(index => index === min);
function sumElemAfterMin(arr) {
	let amountElemAfterMin = arr.reduce((acc, item, index) => {
		if (index > indexMinElem) {
			return acc + item
		}
		return acc;
	}, 0);
	console.log(amountElemAfterMin);
}
sumElemAfterMin(array);


// Задание 5. В массиве, состоящем из n элементов, вычислить:
// 1.1 – количество элементов массива, больших С;
let c = 25;
function numberElemGreaterC(arr) {
	let numberElem = arr.reduce((acc, item) => {
		if (item > c) {
			return (acc += 1)
		}
		return acc;
	}, 0)
	console.log(numberElem);
}
numberElemGreaterC(array);

// 1.2 – произведение элементов массива, расположенных после максимального по модулю элемента:
let firstElemArray = Math.abs(array[0]);
let result = array.forEach((item) => {
	if (Math.abs(item) > firstElemArray) {
		firstElemArray = Math.abs(item);
	}
});
let indexMaxElemArray = array.findIndex((item) => item === firstElemArray);
function multiElemArray(arr) {
	let miltiElem = arr.reduce((acc, item, index) => {
		if (index > indexMaxElemArray) {
			return (acc *= item);
		}
		return acc;
	}, 1);
	console.log(miltiElem);
}
multiElemArray(array);


// Задание 6. В массиве, состоящем из n элементов, вычислить:
// 1.1 – количество отрицательных элементов массива:
function negElem(arr) {
	let elemNeg = arr.reduce((acc, item) => {
		if (item < 0) {
			return (acc += 1);
		}
		return acc
	}, 0);
	console.log(elemNeg);
}
negElem(array);

// 1.2 – сумму модулей элементов массива, расположенных после минимального по модулю элемента:
function sumElemAfterMin(arr) {
	let minElemAbs = Math.abs(arr[0]);
	arr.forEach((item) => {
		if (Math.abs(item) < minElemAbs) {
			minElemAbs = Math.abs(item);
		}
	});
	let indexMinElemArray = arr.findIndex((item) => {
		Math.abs(item) === minElemAbs
	})
	let sumElemArrayAbs = arr.reduce((acc, item, index) => {
		if (index > indexMinElemArray) {
			return (acc += Math.abs(item))
		}
		return acc;
	}, 0);
	console.log(sumElemArrayAbs);
}
sumElemAfterMin(array);


// Задание 7. В массиве, состоящем из n элементов, вычислить:
// 1.1 – количество положительных элементов массива:
function numberElemPos(arr) {
	let numberPosElem = arr.reduce((acc, item) => {
		if (item > 0) {
			return acc += 1;
		}
		return acc;
	}, 0)
	console.log(numberPosElem);
}
numberElemPos(array);

// 1.2 – сумму элементов массива, расположенных после последнего элемента, равного нулю:
let zeroIndex = array.findIndex((item) => item === 0);
function amountElemAfterZero (arr) {
	let amountElem = arr.reduce((acc, item, index) => {
		if (index > zeroIndex) {
			return (acc += item);
		}
		return acc
	}, 0);
	console.log(amountElem);
}
amountElemAfterZero(array);


// Задание 8. В массиве, состоящем из n элементов, вычислить:
// 1.1 – количество элементов массива, меньших С:
let numberC = 25;
function numberElemGreater(arr) {
	let numberElem = arr.reduce((acc, item) => {
		if (item < numberC) {
			return (acc += 1)
		}
		return acc;
	}, 0)
	console.log(numberElem);
}
numberElemGreater(array);


// Задание 9. В массиве, состоящем из n элементов, вычислить:
// 1.1 – произведение отрицательных элементов массива:
function multiElemGreater (arr) {
	let multiElem = arr.reduce((acc, item) => {
		if (item < 0) {
			return (acc *= item)
		}
		return acc;
	}, 1)
	console.log(multiElem);
}
multiElemGreater(array);

// 1.2 – сумму положительных элементов массива, расположенных до максимального элемента:
let maxElemArray = (array[0]);
	array.forEach((item) => {
		if (item > maxElemArray) {
			maxElemArray = item;
		}
});
let indexMax = array.findIndex(item => item === maxElemArray);
let sumPosElemBeforeMax = array.reduce((acc, item, index) => {
	if (index < indexMax && item > 0) {
		return (acc += item)
	}
	return acc;
}, 0);
console.log(sumPosElemBeforeMax);


// Задание 10. В массиве, состоящем из n элементов, вычислить:
// 1.1 – номер максимального элемента:
let maxElemArr = (array[0]);
	array.forEach((item) => {
		if (item > maxElemArr) {
			maxElemArr = item;
		}
});
let indexIndex = array.findIndex(item => item === maxElemArr);
let numberMaxElemArray = indexIndex + 1;
console.log(numberMaxElemArray);

// 1.2 – сумму элементов массива, расположенных до минимального элемента:
let minElemArray = (array[0]);
	array.forEach((item) => {
		if (item < minElemArray) {
			minElemArray = item;
		}
});
let indexMin = array.findIndex(item => item === minElemArray);
let sumElemBeforeMin = array.reduce((acc, item, index) => {
	if (index < indexMin) {
		return (acc += item)
	}
	return acc;
}, 0);
console.log(sumElemBeforeMin);


// Преобразование в одномерный массив:
let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = data.reduce((acc, item) => {
	return acc.concat(item);
}, []);
console.log(flat);
