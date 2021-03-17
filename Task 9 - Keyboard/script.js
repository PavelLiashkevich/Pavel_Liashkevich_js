//let letters = 'qwertyuiopasdfghjklzxcvbnm';
//let capsLock = document.createElement('button');
//let caps = true;
//document.body.append(capsLock);
//capsLock.innerHTML = 'Caps Lock';
//let x = letters.split('');
//function addLetters() {
//	x.forEach(item => {
//	let button = document.createElement('button');
//	document.body.append(button);
//	button.innerHTML = item;
//	})
//}

//let textElement = document.querySelector('#textarea');
//document.querySelectorAll('button')
//document.addEventListener('click', handleClick);

//function handleClick(event) { 
	
//	console.log(event.target);
//	if (event.target.tagName == 'BUTTON') textarea.value += !caps ? event.target.innerHTML : event.target.innerHTML.toUpperCase();
//	if (event.target.innerHTML === 'Caps Lock') {
//		caps = !caps;
//		return caps;
//	}
//	console.log(caps);
//}

//addLetters();
//console.log(x);



let keyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93];

function init() {
	let out = '';
	for (let i = 0; i < keyboard.length; i++) {
		out += "<div class='key' data='" + keyboard[i] + "'>" + String.fromCharCode(keyboard[i]) + "</div>";
	}
	document.querySelector('#keyboard').innerHTML = out;
}

init();

let keyboardRow2 = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92];

function init2() {
	let out2 = '';
	for (let i = 0; i < keyboardRow2.length; i++) {
		out2 += "<div class='key' data='" + keyboardRow2[i] + "'>" + String.fromCharCode(keyboardRow2[i]) + "</div>";
	}
	document.querySelector('#keyboard_row2').innerHTML = out2;
}

init2();

let keyboardRow3 = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];

function init3() {
	let out3 = '';
	for (let i = 0; i < keyboardRow3.length; i++) {
		out3 += "<div class='key' data='" + keyboardRow3[i] + "'>" + String.fromCharCode(keyboardRow3[i]) + "</div>";
	}
	document.querySelector('#keyboard_row3').innerHTML = out3;
}

init3();

document.onkeypress = function(event) {
	console.log(event.code);
	console.log(event.keyCode);
	//document.querySelector('#keyboard keyboard_style[data="' + event.keyCode + '"]').classList.add('active'); 
}




//document.onkeypress = function(event) {
//	keyboard.push(event.charCode);
//	console.log(keyboard);
//}