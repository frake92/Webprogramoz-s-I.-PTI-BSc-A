// 1. Tömbök létrehozása és kezelése
console.log("--- Tömbök ---");


let gyumolcsok = ["alma", "körte", "banán"];
let szamok = new Array(1, 2, 3, 4, 5);
let vegyesTomb = ["szöveg", 42, true, { nev: "János" }];

console.log("Eredeti tömb:", gyumolcsok);
gyumolcsok.push("narancs");        // elem hozzáadása
console.log("Push után:", gyumolcsok);
gyumolcsok.pop();                  // utolsó elem eltávolítása
console.log("Pop után:", gyumolcsok);
gyumolcsok.splice(1, 0, "ananász"); // beszúrás az 1. index helyére
console.log("Splice után:", gyumolcsok);

gyumolcsok.splice(1, 2, "gránátalma"); // beszúrás az 1. index helyére
console.log("Splice után:", gyumolcsok);

console.log("\nTömb bejárása:");

for (let i = 0; i < gyumolcsok.length; i++) {
    console.log(`${i}. elem: ${gyumolcsok[i]}`);
}

for (let gyumolcs of gyumolcsok) {
    console.log(`Gyümölcs: ${gyumolcs}`);
}



//2. objektumok és műveleteik
let diak = {
    nev: "Nagy János",
    kor: 24,
    varos: "Budapest"
};

let diakok = [
    { nev: "Kiss Anna", jegyek: [4, 5, 3], atlag: 0 },
    { nev: "Nagy Péter", jegyek: [5, 5, 4], atlag: 0 },
    { nev: "Szabó Júlia", jegyek: [3, 4, 4], atlag: 0 }
];

console.log("\nObjektum tulajdonságai:");
console.log("Név:", diak.nev);
console.log("Kor:", diak.kor);
console.log("Város:", diak.varos);

diak.kor = 31;
diak.szuletesiEv = "2000"; 


// 3. Érték vs. Referencia típusok
console.log("\n--- Érték vs. Referencia típusok ---");

// Érték típus példa (primitív típusok)
let szam1 = 5;
let szam2 = szam1; // Érték másolása
szam1 = 10;
console.log("Érték típus:");
console.log("szam1:", szam1); // 10
console.log("szam2:", szam2); // 5 (nem változott)

// Referencia típus példa (tömbök)
let tomb1 = [1, 2, 3];
let tomb2 = tomb1;   // referencia másolása
tomb1[0] = 100;      // első elem módosítása

console.log("\nReferencia típus:");
console.log("tomb1:", tomb1);  // [100, 2, 3]
console.log("tomb2:", tomb2);  // [100, 2, 3] (ez is változott!)

let obj1 = { nev: "Teszt" };
let obj2 = obj1;
obj1.nev = "Módosított";
console.log("obj1: ", obj1, "obj2: ", obj2);


// 4. Egyszerű algoritmus példa: tömb elemeinek összege
console.log("\n--- Egyszerű algoritmus: összegzés ---");

let osszeg = 0;
for (let i = 0; i < szamok.length; i++) {
    osszeg = osszeg + szamok[i];
}
console.log("Számok összege:", osszeg);



function atlagSzamitas(tomb) {
    let osszeg = 0;
    for (let i = 0; i < tomb.length; i++) {
        osszeg = osszeg + tomb[i];
    }
    return osszeg / tomb.length;
}


console.log(atlagSzamitas([1,2,3,4,5,6]))

function szamKereses(tomb, keresettSzam) {
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] === keresettSzam) {
            return i;  // Visszaadjuk a pozíciót, ahol megtaláltuk
        }
    }
    return -1;  // Ha nem találtuk meg, -1-et adunk vissza
}

console.log("Ezen a pozíción van a keresett szám: ", szamKereses([1,2,3,4,5,6,7,8,9], 5))