'use strict';

let firstLink = document.querySelector('#parFirst .link');
console.log(firstLink);

//parent element

console.log(firstLink.parentElement);

//parent Node
console.log(firstLink.parentNode);

let parFirst = document.getElementById('parFirst');
//child nodes
console.log(parFirst.childNodes);

//children elementy html

console.log(parFirst.children);

//first node sibling

console.log(firstLink.previousSibling);

console.log(firstLink.previousElementSibling);

console.log(firstLink.nextElementSibling);