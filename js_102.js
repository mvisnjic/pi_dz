let bodovi = prompt("Unesi broj bodova");
let ocjena;
let poruka = "hello";
// tvoj kod
if (bodovi < 50) poruka = "pali ste.";
else if (bodovi > 50 && bodovi <= 60) poruka = "cestitke, ocjena je 2!";
else if (bodovi > 60 && bodovi <= 75) poruka = "cestitke, ocjena je 3!";
else if (bodovi > 75 && bodovi <= 85) poruka = "cestitke, ocjena je 4!";
else if (bodovi > 85 && bodovi <= 100) poruka = "cestitke, ocjena je 5ica!!!";
else poruka = "krivi unos!";
console.log(poruka);

