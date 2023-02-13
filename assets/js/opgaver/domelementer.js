/* DOMcelementer */

/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/
// din kode her
console.log('Her er den røde figur', document.getElementById('redFigure'));
console.log('Her er den gule figur',document.getElementById('yellowFigure'));


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/
// din kode her
const red = document.getElementById('redFigure');
const yellow = document.getElementById('yellowFigure');

red.style.backgroundColor = '#9cb1f8';
red.style.color = '#b74465';

yellow.style.backgroundColor = '#2d3681';
yellow.style.color = '#ffea00'


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/
// din kode her
const myOpgaveTwo = document.getElementById('opgaveTwo');

let myHTwo = document.createElement('h2');
myHTwo.innerText = 'Opgave 2.1 løsning';

let myP = document.createElement('p');
myP.innerText = 'Jeg har løst opgave 2.1';

myOpgaveTwo.appendChild(myHTwo);
myOpgaveTwo.appendChild(myP);


// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/
// din kode her
console.log(document.getElementsByClassName('purpleFigures'));


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
const lilla = document.getElementsByClassName('purpleFigures');

let lillaArray = Array.from(lilla);

lillaArray.map((cirkler) => {
    cirkler.style.backgroundColor = 'red';
});

/* opgave 3.3
Brug myLiveList til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/
// din kode her
lillaArray.map((myElement) => {
    myElement.children[0].innerHTML = 'red';

});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
*/
const myData = {
    name: 'tiger',
    image: './assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
const opgaveFour = document.getElementById('opgaveFour');

//overskrift
let hTwoTiger = document.createElement('h1');
hTwoTiger.innerText = myData.name;

//billede
let imgTiger = document.createElement('img');
imgTiger.src = myData.image;
console.log(imgTiger);

//beskrivelse
let desTiger = document.createElement('p');
desTiger.innerText = myData.description;


opgaveFour.appendChild(hTwoTiger);
opgaveFour.appendChild(imgTiger);
opgaveFour.appendChild(desTiger);




