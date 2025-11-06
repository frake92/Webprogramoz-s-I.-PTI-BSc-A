// 1. Vezérlési szerkezetek - Elágazások
console.log("--- Elágazások ---");

let kor = 18;

// If-else elágazás
if (kor >= 18) {
    console.log("Felnőtt");
} else {
    console.log("Kiskorú");
}

// Switch szerkezet
let nap = "hétfő";
switch (nap) {
    case "hétfő":
        console.log("A hét első napja");
        break;
    case "péntek":
        console.log("A hét utolsó munkanapja");
        break;
    default:
        console.log("Egyéb nap");
}

// 2. Ciklusok
console.log("\n--- Ciklusok ---");

// For ciklus
console.log("For ciklus:");
for (let i = 0; i < 3; i++) {
    console.log(`${i}. iteráció`);
}

// While ciklus
console.log("\nWhile ciklus:");
let szamlalo = 0;
while (szamlalo < 3) {
    console.log(`${szamlalo}. while iteráció`);
    szamlalo++;
}

// Do-while ciklus
console.log("\nDo-while ciklus:");
let doWhileSzamlalo = 0;
do {
    console.log(`${doWhileSzamlalo}. do-while iteráció`);
    doWhileSzamlalo++;
} while (doWhileSzamlalo < 3);

// 3. Függvények
console.log("\n--- Függvények ---");

// Alap függvény definiálása
function osszead(a, b) {
    return a + b;
}

// Függvény kifejezés (function expression)
const szoroz = function(a, b) {
    return a * b;
};

// Arrow function
const negyzetreEmel = (szam) => szam * szam;

// Példák a függvények használatára
console.log("Összeadás eredménye:", osszead(5, 3));
console.log("Szorzás eredménye:", szoroz(4, 2));
console.log("Négyzetre emelés:", negyzetreEmel(4));

// 4. Scope és külső változók
console.log("\n--- Scope példák ---");

let globalisValtozo = "Globális";

function scopePelda() {
    let lokalisValtozo = "Lokális";
    console.log("Globális változó elérése függvényen belül:", globalisValtozo);
    console.log("Lokális változó:", lokalisValtozo);
}

scopePelda();
// console.log(lokalisValtozo); // Ez hibát okozna, mert lokális
