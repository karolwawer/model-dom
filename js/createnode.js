'use strict';

//tworzenie elementu w locie 

let btn = document.createElement('button');
console.log(btn);

let btnText = document.createTextNode('kliknij mnie');
console.log(btnText);

let btnAttr = document.createAttribute('id');
console.log(btnAttr);

//ustawiamy wartosc dla wezla atrybutu
btnAttr.value = 'button';

//nowy węzeł na końcu wezła przed zamykający znacznik
btn.appendChild(btnText);

//setAttributeNode - dodaj wezel atrybutu do danego wezla

btn.setAttributeNode(btnAttr);

let parFirst = document.getElementById('parFirst');
parFirst.insertBefore(btn, document.querySelector('#parFirst .link'));


//dopinamy element do body
//document.body.appendChild(btn);

// budujemy nowy paragraf i nadajemy mu klase
let par = document.createElement('p');
let parText = document.createTextNode('lorem ipsum dolor sit amet.');
par.appendChild(parText);

console.log(par);

par.setAttribute('class', 'paragraph'); 
document.getElementById('parSecond').insertBefore(par, document.querySelector('#parSecond p'));

//document.getElementById('button').removeAttributeNode(btnAttr);
  document.getElementById('button').removeAttribute('id');

//document.getElementById('parFirst').removeChild(parFirst.querySelector('button')); lub prościej 

parFirst.removeChild(btn);


//stworzymy nowy paragraf, za pomocą innerText dodaj mu text "nowoutworzony text", następnie dodaj go na koniec pierwszego diva

let par1 = document.createElement('p');

par1.innerText = 'nowoutworzony text';
document.getElementById('parFirst').appendChild(par1);

console.log(par1);

parFirst.outerHTML = '<section id="parFirst"><p>lorem ipsum dolor</p></section>';

document.getElementById('three').href = "https://akademia108.pl";


console.log(document.getElementById('classList').className);
document.getElementById('classList').className = 'klasa1 klasa2';
console.log(document.getElementById('classList').classList);
document.getElementById('classList').classList.add('klasa_dodana')  ;
console.log(document.getElementById('classList').classList);
document.getElementById('classList').classList.remove('klasa2');
console.log(document.getElementById('classList').classList);

document.getElementById('three').style.color = 'green';