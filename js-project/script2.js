/*
var h1Element = document.querySelector('h1');

h1Element.style.color = 'blue';

var isYellow = false;
var bodyElement = document.querySelector('body');
setInterval(function() {
    if(isYellow) {
        bodyElement.style.background = 'white';
    }
    else {
        bodyElement.style.background = 'yellow';
    }
    isYellow = !isYellow;
}, 1000);
*/

/*
var selectWithId = document.getElementById('oakParagraph');
console.log(selectWithId);

var selectWithClass = document.getElementsByClassName('background');
console.log(selectWithClass);

var selectWithTag = document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithQueryId = document.querySelector('#oakParagraph');
console.log(selectWithQueryId);

var selectWithQueryClass = document.querySelector('.background');
console.log(selectWithQueryClass);

var selectWithQueryAllClass = document.querySelectorAll('.background');
console.log(selectWithQueryAllClass);
*/

// var divToManipulate = document.querySelector('.background');

// divToManipulate.style.height = '50px';
// divToManipulate.style.width = '400px';
// divToManipulate.style.backgroundColor = 'red';
// divToManipulate.style.fontSize = '30px';
// divToManipulate.style.border = '5px solid black';

// divToManipulate.classList.add('addClass');
// divToManipulate.classList.remove('addClass');

// divToManipulate.classList.toggle('addClass');

// var paragraph = document.querySelector('#oakParagraph');

// paragraph.textContent = 'OAK Academy is the best academy, really';

// paragraph.innerHTML = 'OAK Academy is <strong>great</strong>'

// var myLink = document.querySelector('a');

// myLink.setAttribute('href', 'https://www.facebook.com/');
// myLink.textContent = 'Go to facebook';

// EVENT HANDLERS

// var button = document.querySelector('#btn1');
// var title = document.querySelector('#oakTitle');

// button.addEventListener('click', function() {
//     console.log('You clicked the button');
//     title.style.backgroundColor = 'red';
// });

// var listParent = document.querySelector('ul');

// listParent.addEventListener('click', function() {
//     console.log('You clicked the ul');
//     listParent.style.backgroundColor = 'blue';
// });


// var listItems = document.querySelectorAll('li');

// console.log('listItems', listItems);

// for(var i = 0; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', function() {
//         this.style.color = 'white';
//     })
// }

// var oakParagraph = document.querySelector('#oakParagraph');

// function toggleBackground() {
//     oakParagraph.classList.toggle('toggleBackground');
// }

// oakParagraph.addEventListener('click', toggleBackground)

var todoListItems = document.querySelectorAll('.todoItem');

for(var i = 0; i < todoListItems.length; i++) {
    todoListItems[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = 'blue'
        this.style.color = 'white'
    })

    todoListItems[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = 'white'
        this.style.color = 'black'
    })
}