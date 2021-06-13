// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello, this is JS';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src', 'images/chrome-icon-small-size.png');
    }
    else {
        myImage.setAttribute('src', 'images/firefox-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName + ', this is JS';
    }
}

myButton.onclick = function() {
    setUserName();
}

if(!localStorage.getItem('name')) {
    setUserName();
}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello ' + storedName + ', this is JS';
}
