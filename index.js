let param1 = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let param2 = ['ate', 'peed', 'crushed', 'broke'];
let param3 = ['my homework', 'the keys', 'the car'];
let param4 = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let posicionP1 = Math.floor(Math.random() * param1.length);
let posicionP2 = Math.floor(Math.random() * param2.length);
let posicionP3 = Math.floor(Math.random() * param3.length);
let posicionP4 = Math.floor(Math.random() * param4.length);

function excusaAleatoria() {
    return param1[posicionP1] + " " + param2[posicionP2] + " " + param3[posicionP3] + " " + param4[posicionP4];
}

document.getElementById("excuse").innerHTML = excusaAleatoria();