// Inizializzazione della costante 21
const n = "21";
// Richiesta di inserimento del nome all'interno della costante username
const username = prompt("Inserisci il tuo nome: ");
// Visualizzazione della costante nella console
console.log(username);
// Richiesta di inserimento del cognome all'interno della costante username
const surname = prompt("Inserisci il tuo cognome");
// Visualizzazione della costante nella console
console.log(surname);
// Richiesta di inserimento del colore preferito all'interno della costante username
const color = prompt("Inserisci il tuo colore preferito");
console.log(color);

// creazione della stringa che formerà la password insicura
const pw = `${username}${surname}${color}${n}`;
// Visualizzazione della password insicura nella console
console.log(pw);

// Inserimento della password insicura nel tag HTML con id = password
document.getElementById("password").innerHTML = pw;
