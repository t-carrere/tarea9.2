// VARIABLES
// Una variable es un contenedeor de información

let pais = "españa";
let continente = "europa";
let antiguedad = 2021;
let pais_y_continente = pais + " " + continente;

pais = "Argentina";
continente = "Latinoamerica";
antiguedad = 2022;
pais_y_continente = ` ${pais} está en ${continente} y tiene el calendario en ${antiguedad}`;

console.log(pais, continente);
alert(pais_y_continente);