// Задание 1
let number = +prompt('Введите любое число:');

if (number > 0) alert('Ваше число положительное!');
if (number < 0) alert('Ваше число отрицательное!');
if (number === 0) alert('Ваше число равно нулю!');


// Задание 2
let a = +prompt('Введите сколько Вам лет:');

if (a <= 0 ) {
    alert('Вы еще не родились!')
} else if (a >= 120) {
    alert('Это очень много!')
} else {
    alert(`Вам ${a} лет!`)
};


// Задание 3
let number = +prompt('Введите любое число:');

alert(`Модуль Вашего числа ${Math.abs(number)}!`);


// Задание 4
let hours = +prompt('Который сейчас час?');
if (hours <= 0 || hours > 24) {
  alert('Введите корректные данные!');
};
let minutes = +prompt('Сколько минут?');
if (minutes <= 0 || minutes > 60) {
  alert('Введите корректные данные!');
};
let second = +prompt('Сколько секунд?');
if (second <= 0 || second > 60) {
  alert('Введите корректные данные!');
};
  alert('Сейчас ' + hours + ' часов ' + minutes + ' минут ' + second + ' секунд');


// Задание 5
let x = +prompt("Введите координату х:");
let y = +prompt("Введите координату y:");

if (y === 0 && x === 0) {
   alert("Это начало координат!");
} else if (x > 0 && y > 0) {
   alert("Ваша координата находится в 1-ой четверти!");
} else if (x < 0 && y > 0) {
   alert("Ваша координата находится во 2-ой четверти!");
} else if (x < 0 && y < 0) {
   alert("Ваша координата находится в 3-ей четверти!");
} else if (x > 0 && y < 0) {
   alert("Ваша координата находится в 4-ой четверти!");
} else if (x === 0 ) {
   alert("Точка находится на оси X!");
} else if (y === 0 ) {
   alert("Точка находится на оси Y!");
};


// Задание 6
let year = +prompt('Введите год Вашего рождения:');
let newYear = year % 12;

if (newYear === 0) {
   alert('Вы родились в год обезьяны!');
};
if (newYear === 1) {
   alert('Вы родились в год петуха!');
};
if (newYear === 2) {
   alert('Вы родились в год собаки!');
};
if (newYear === 3) {
   alert('Вы родились в год свиньи!');
};
if (newYear === 4) {
   alert('Вы родились в год крысы!');
};
if (newYear === 5) {
   alert('Вы родились в год быка!');
};
if (newYear === 6) {
   alert('Вы родились в год тигра!');
};
if (newYear === 7) {
   alert('Вы родились в год кролика!');
};
if (newYear === 8) {
	alert('Вы родились в год дракона!');
};
if (newYear === 9) {
   alert('Вы родились в год змеи!');
};
if (newYear === 10) {
	alert('Вы родились в год лошади!');
  };
if (newYear === 11) {
	alert('Вы родились в год козы!');
};