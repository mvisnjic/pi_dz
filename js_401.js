/*
Sastavi listu od 10 studenata sa sljedećim svojstvima: ime , prezime , upisan
(Boolean true / false ). Vrijednosti svojstava proizvoljno odaberi. Sastavi funkciju
provjeri(lista, pojam) koja vraća true ukoliko postoji student na lista čije ime ili
prezime je baš pojam , a upisan je.
*/
let studenti = [
    {
        ime: "Pero",
        prezime: "Peric",
        upisan: true,
    },
    {
        ime: "Marko",
        prezime: "Marulic",
        upisan: false,
    },
    {
        ime: "zoran",
        prezime: "babic",
        upisan: true,
    },
    {
        ime: "bojan",
        prezime: "miletic",
        upisan: false,
    },
    {
        ime: "Helena",
        prezime: "Gomez",
        upisan: true,
    },
    {
        ime: "Mario",
        prezime: "Josipovic",
        upisan: false,
    },
    {
        ime: "Magdalena",
        prezime: "Ivic",
        upisan: true,
    },
    {
        ime: "Maria",
        prezime: "Milanović",
        upisan: false,
    },
    {
        ime: "Maja",
        prezime: "Karlić",
        upisan: true,
    },
    {
        ime: "Dario",
        prezime: "Paliska",
        upisan: true,
    },
]



provjeri = (lista, pojam) => {
    for (let i = 0; i < lista.length; i++) {
        const student = lista[i];
        if(student.prezime === pojam || student.ime === pojam){
            if(student.upisan == true) {
                return true;
            } else {
                return false;
            }
        } 
    }
}
console.log(provjeri(studenti, "Ivic")); // true
console.log(provjeri(studenti, "Dario")); //true 
console.log(provjeri(studenti, "Paliska")); //true 
console.log(provjeri(studenti, "Maria")); //false