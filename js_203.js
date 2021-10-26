let velicina = 8;
let polje = "";

for (let i = 0; i < velicina; i++) {
  if (i % 2 === 0) {
    polje += " ";
  }
  for (let j = 0; j < velicina; j++) {
    polje.charAt(polje.length - 1) === "#" ? (polje += " ") : (polje += "#");
  }
  polje += "\n";
}
console.log(polje);
