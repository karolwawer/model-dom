'use strict';

//przez id
let parFirst = document.getElementById('parFirst');
console.log(parFirst);

// po klasie

let links = document.getElementsByClassName('link');
console.log(links);

//po znaczniku

let anchors = document.getElementsByTagName('a');
console.log(anchors);

//przez querySelector - element()

let parSecond = document.querySelector('parSecond');
console.log('#parSecond');

// prze querySelector all - wszystkie divy
let paragrafy = document.querySelectorAll('div p');
console.log(paragrafy);