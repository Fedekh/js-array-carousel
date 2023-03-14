// **Consegna:**

// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for
// che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

//**BONUS 1:**

// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente,
// dovrà comparire l’ultima immagine dell’array e viceversa.

// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto.
// Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.


// **Prima di partire a scrivere codice:**
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
// Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti.
// Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.
// **Consigli del giorno:**

// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine. 
// Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js.
// Potremo quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"



// #############################################################################################################################



// MILESTONE 2

// Da consegna ho un array con all'iterno 5 elementi
const arrayItems = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const itemCont = document.querySelector (".slider-items");
// console.log(itemCont);

// tramite ciclo for, stampero in console log tutti questi elementi, che scorrerà ogni l'etichetta di arrayItems e da 0 a 4, cosi da creare image
// formato dai 5 elementi (da 0 a 4) dell'array di partenza arrayItems

for (let i = 0; i < arrayItems.length ; i++) {
    // creo una variabile d'appoggio "items"
    const image = arrayItems[i];
    // creo quindi ogni singolo elemento [] che comporrà l'array sfruttando un contatore
    const sliderItem = `<div class="item"><img src="${image}" alt=""></div>`;
    // console.log(sliderItem); 

    // ora aggiungo in maniera dinamica all'interno di questa variabile contenitore precedenemnte dichiarata come aggancio a un elemento html, ogni
    // elemento array
    itemCont.innerHTML += sliderItem; 
    console.log (itemCont)    
}


//Creo un ulteriore variabile che lego all'elemento o elementi html, in questo caso i div che conterranno le img, specificando
// con l'etichetta 0 in questo caso, che il primo elemento, oltre la classe di defaul .item gli si debba aggiungere anche
//la classe .active che nello specifico la faccia apparire anziche restare hidden come le altre

// IMPOSTO PRIMO SLIDE VISIBILE

let rowItem = document.getElementsByClassName("item");
let index = 0;

rowItem[index].classList.add("active");


// MILESTONE 3

// creazione variabili legate ai 2 button

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
console.log(prev, next);

// di default il tasto prev deve essere nascosto
prev.classList.add("hidden");


// Alla pressione del tasto next........

next.addEventListener ("click", function(){

    // fa si che la freccia per andare indietro, scompaia se sia nell img N 1
    if (index >= 0) {
        prev.classList.remove("hidden");
    }
    

    // tolgo lo stato di visibile all'img attuale
    rowItem[index].classList.remove("active");

    // incremento l'indice
    index++;

    // aggiungo lo stato di visibile all img successiva
    rowItem[index].classList.add("active");

    // se raggiungo l'ultima img, tolgo la possibilita di andare avanti
    if (index === arrayItems.length-1){
        next.classList.add("hidden");
    }
})



// Alla pressione del tasto prev........
prev.addEventListener ("click", function(){

    // fa si che la freccia per andare avanti, scompaia se sia nell ultima img     
    if (index <= arrayItems.length-1) {
        next.classList.remove("hidden");
    }
    
    // tolgo lo stato di visibile all'img attuale
    rowItem[index].classList.remove("active");

    // decremento l'indice
    index--;

    // aggiungo lo stato di visibile all img successiva, o quella retro per meglio dire
    rowItem[index].classList.add("active");

     // se raggiungo l'ultima img, ovvero la prima, tolgo la possibilita di andare ancora indietro
     if (index === 0){
        prev.classList.add("hidden");
    }

})



