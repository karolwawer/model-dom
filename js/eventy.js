'use strict';

document.addEventListener('DOMContentLoaded', function () {
    //    console.log('123');
    linksHover();
    //    changeBodyBG();
    writeInputOutput()
    document.addEventListener('keypress', changeBodyBG);
    document.removeEventListener('keypress', changeBodyBG);
    googleClick();
    changeBgClick();
    ustawTlo();
})

function linksHover() {
    let links = document.getElementsByTagName('a');
    console.log(links);


    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', function () {
            this.style.color = 'red';
        });

        links[i].addEventListener('mouseout', function () {
            this.style.color = 'green';
        });
    };
}

function changeBodyBG() {
    document.body.style.backgroundColor = 'beige';
}



function writeInputOutput() {
    let inputs = document.querySelectorAll('#form input');

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', function () {
            document.getElementById('wynik').innerHTML += this.value + ' ';
        });
    }
}

function googleClick() {
    document.getElementById('google').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log(e);
    })
}

function changeBgClick() {
    document.body.addEventListener('click', function () {
        this.style.backgroundColor = 'pink';
    })
}



