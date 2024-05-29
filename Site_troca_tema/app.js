'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
 document.body.classList.toggle ('dark-theme')

 var classNome = document.body.classNome;
 
 if(classNome == 'light-theme') {
    this.textContent = "Dark";
 }
 else {
    this.textContent = "Light";
 }

 console.log('current classNome: ' + classNome);
//console.log(return);

});

