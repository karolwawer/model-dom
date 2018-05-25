'use strict';

document.addEventListener('DOMContentLoaded', function () {
    //    console.log('123');
    linksHover();
    changeBodyBG();
    writeInputOutput()
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
    document.addEventListener('keypress', function(){
        document.body.style.backgroundColor = 'beige';
    })
}

function writeInputOutput() {
    let inputs = document.querySelectorAll('#form input');
    for(let i =0; i <inputs.length; i++) {
        inputs[i].addEventListener('change', function(){
            document.getElementById('wynik').innerHTML += this.value + ' ';
        });
    }
}
