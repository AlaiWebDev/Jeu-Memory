let j = 1
for (let i = 1; i < 25; i++) {
    if (i > 12) {
        let result = `<div class="card zoom" id="card${i}"><div class="front front-l${j}"></div><div class="back back-l${j} invisible"></div></div>`;
        document.getElementById('main').innerHTML += result;
        j++;
    } else {
        let result = `<div class="card zoom" id="card${i}"><div class="front front-l${i}"></div><div class="back back-l${i} invisible"></div></div>`;
        document.getElementById('main').innerHTML += result;
    }
}
let myListener = document.getElementsByClassName('card');
var discovered;
for (let i = 0; i < myListener.length; i++) {
    myListener[i].addEventListener("click", clicked);
}
let card1 = null;
let card2 = null;
function clicked(event) {
    let theEvent = event.target;
    if (card1 !== null && card2 !== null) return;
    if (card1 === null) {
        card1 = event.target;
        theEvent.classList.add('invisible');
        theEvent.nextSibling.classList.add('visible');
        console.log(card1);
        return;
    }
    card2 = event.target;
    theEvent.classList.add('invisible');
    theEvent.nextSibling.classList.add('visible');
    console.log(card1, card2);
    if (card2.classList[1] == card1.classList[1]) {
        card1.parentElement.removeEventListener('click', clicked);
        card1.parentElement.classList.remove('zoom');
        card2.parentElement.removeEventListener('click', clicked);
        card2.parentElement.classList.remove('zoom');
        card1 = null;
        card2 = null;
        let allFound = document.querySelectorAll('.zoom');
        if (allFound.length === 0) { document.getElementById("linkModal").click() }
        return;
    }
    setTimeout(function () {
        card1.nextSibling.classList.replace('visible', 'invisible');
        card1.classList.replace('invisible', 'visible');
        card2.nextSibling.classList.replace('visible', 'invisible');
        card2.classList.replace('invisible', 'visible');
        card1 = null;
        card2 = null;
    }, 2000);
    return;
}
