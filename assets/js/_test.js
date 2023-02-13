
// console.log(document.getElementById('etElement'));
// console.log(document.getElementsByTagName('h2'));
// console.log(document.getElementsByClassName('mineElementer'));

// const etHTwo = document.getElementById('etElement');
// const hTwo = document.getElementsByTagName('h2');


// let myArray = Array.from(hTwo);

// myArray.map((myElement) => {
//     console.log(myElement.classlist);
//     // myElement.style.backgroundColor = 'red';
//     myElement.style.color = 'white';

//     myElement.classList.add('keld');
//     myElement.classList.add('svend');

//     myElement.innerHTML = '<a href="www.kanel.dk">Jeg er et H2 tag</a>';
// });




const myApp = document.getElementById('app');

let myHeadline = document.createElement('h1');
myHeadline.innerText = 'Min fine overskrift';

let myP = document.createElement('p');
myP.innerText = 'sedtrfyguhjzsxdcfvgbhnjzesxdcfvgbhnjzesrxdtcfvgbhjrxdtcfyvgbhzsrxdtcfvgbh';


//rækkefølge er vigtig
myApp.appendChild(myHeadline);
myApp.appendChild(myP);