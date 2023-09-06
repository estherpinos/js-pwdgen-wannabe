

const nome = prompt('Inserire il nome');
const cognome = prompt('Inserire il cognome');
const colore = prompt('Inserire il colore preferito');

const password = nome + cognome + colore + 23;

const message = `
  Ciao ${name}! <br>
  La tua password è ${password}
`;
document.getElementById('output').innerHTML = message;






