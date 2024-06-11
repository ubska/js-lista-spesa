/*
Data una lista della spesa, stampare sulla pagina(anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
*/

// creo un array con la lista della spesa
const listaDellaSpesa = ["Pane", "Latte", "Uova", "Pasta", "Pomodori", "Formaggio", "Mela",];
console.log(listaDellaSpesa);

// seleziono ul dove aggiungero succesivamente gli elementi (li) della spesa
const ulLista = document.getElementById("lista_spesa");
console.log(ulLista);

// inizializzo il contatore/indice (i)
let i = 0;
// continuo il cilco fino a quando (i) è minore della lunghezza della lista
while (i < listaDellaSpesa.length) {
    // creo elemento (li)
    let liLista = document.createElement("li");
    liLista.textContent = listaDellaSpesa[i];
    ulLista.appendChild(liLista);
    i++;
}
    