// Задание 1

let a = +prompt('Введите первое число', '');
let b = +prompt('Введите второе число', '');
let sum = 0;
	while (a <= b) {
		sum+=a;
		a++;
	}
console.log(sum);
	
// Задание 2

let min;
let firstNum = prompt('Enter first number');
if (firstNum === null) alert('Canceled');
else if (firstNum.trim() === '') alert('Empty string');
else if (isNaN(+firstNum)) alert('You entered not a number');
else {
    let secondNum = prompt('Enter second number');
    if (secondNum === null) alert('Canceled');
    else if (secondNum.trim() === '') alert('Empty string');
    else if (isNaN(+secondNum)) alert('You entered not a number');
    else {
        min = firstNum > secondNum ? firstNum : secondNum;
        while (min > 1) {
            if (firstNum % min === 0 && secondNum % min === 0) {
                break;
            }
            min--;
        }
    }
}
alert.log(`This number is ${min}`);

// Задание 3

let a = +prompt('Число?');
for(let c = 1; c <= a; c++) {
   if (a % c == 0) {
      console.log(c);
   }
}

// Задание 4 

let a = prompt('Введите число:')
let b = 0;
while (a >= 1) {
	a /= 10;
	b++;
}
alert(b);

// Задание 5

 let a;
 let b = 1, c = 0, d = 0, f = 0; 
 do  {
     a = +prompt(`Введите число №${b}`);
     b++;
     if (a === 0) {
         c +=1
     } else if (a < 0){
         d +=1
     } else if (a > 0){
         f +=1
     }
 } while (b <= 10);
     alert(`Вы ввели:\n` + `нолей-${c}\n` + `отрицательных-${d}\n` + `положительных-${f}`);

// Задание 6

 let d;
 do{
     let a = +prompt("Введите число 1");
     let b = +prompt("Введите число 2");
     let c = prompt("Введите знак");
     switch (c) {
         case "-":alert(`результат ${a - b}`)
             break;
         case "+":alert(`результат ${a + b}`)
             break;
         case "*":alert(`результат ${a * b}`)
             break;
         case "/":alert(`результат ${a / b}`)
             break;
         default:
             break;
     }
     d = confirm("еще пример?");
 } while (d);
    
// Задание 7

 let a = prompt("Введите число ");
 let b = +prompt("на сколько символов его сдвинуть?");
 let c, d, f;
 while (b > 0) {
    b--; 
    c = a.substr(0, 1)
    d = a.slice(1)
    f = d + c;
    a = f;
 }
 alert(f);

// Задание 8

 let a;
 do {
     a = +confirm("Понедельник. Хотите увидеть следующий день?");
     if (a == false) break;
     a = +confirm("Вторник. Хотите увидеть следующий день?");
     if (a == false) break;
     a = +confirm("Среда. Хотите увидеть следующий день?");
     if (a == false) break;
     a = +confirm("Четверг. Хотите увидеть следующий день?");
     if (a == false) break;
     a = +confirm("Пятница. Хотите увидеть следующий день?");
     if (a == false) break;
     a = +confirm("Суббота. Хотите увидеть следующий день?");
     if (a == false) break;
     a = +confirm("Воскресенье. Хотите увидеть следующий день?"); 
     if (a == false) break; 
 } while (a == true);

// Задание 9 

for (let firstNum = 2; firstNum <= 9; firstNum++) {
	for (let secondNum = 1; secondNum <= 10; secondNum++) {
		 console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`)
	}
}

//Задание 11

let number = +prompt('Введите число:');
let F=1;
if (number<0){
   console.log('Число не может быть отрицательным');
}
 if (number>0) {
	for(let i=1; i<=number; ++i ){
   F=F*i;
}
console.log(number + '! = ' + F);
}