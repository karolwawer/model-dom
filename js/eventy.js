'use strict';

document.addEventListener('DOMContentLoaded', function () {
    //    console.log('123');
    linksHover();
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
