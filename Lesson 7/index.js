// 1. Változók és deklarációk
var regiFajtaValtozo = "Ez egy var típusú változó";    // régebbi, kerüljük
let ujFajtaValtozo = "Ez egy let típusú változó";      // modern, ezt használjuk
const KONSTANS = "Ez nem változtatható";               // konstans érték

console.log("Változók:");
console.log(regiFajtaValtozo);
console.log(ujFajtaValtozo);
console.log(KONSTANS);

// 2. Alap adattípusok bemutatása
let szam = 42;                     // Number (szám)
let szoveg = "Hello";              // String (szöveg)
let logikai = true;                // Boolean (igaz/hamis)
let nagyEgesz = 123456789n;        // BigInt (nagy egész szám)
let uresErtek = null;              // Null (üres érték)
let nemDefinialt;                  // Undefined (nem definiált)

console.log("\nAdattípusok:");
console.log("Szám típusa:", typeof szam, "értéke:", szam);
console.log("Szöveg típusa:", typeof szoveg, "értéke:", szoveg);
console.log("Logikai típusa:", typeof logikai, "értéke:", logikai);
console.log("Nagy egész típusa:", typeof nagyEgesz, "értéke:", nagyEgesz);
console.log("Null típusa:", typeof uresErtek, "értéke:", uresErtek);
console.log("Undefined típusa:", typeof nemDefinialt, "értéke:", nemDefinialt);

// 3. Típuskonverziók
console.log("\nTípuskonverziók:");
let szambolSzoveg = String(123);    // számból szöveg
let szovegbolSzam = Number("456");  // szövegből szám
let logikaiSzam = Number(true);     // logikai értékből szám

console.log("Számból szöveg:", szambolSzoveg, typeof szambolSzoveg);
console.log("Szövegből szám:", szovegbolSzam, typeof szovegbolSzam);
console.log("Logikaiból szám:", logikaiSzam, typeof logikaiSzam);

// 4. Alapvető operátorok
console.log("\nOperátorok:");

// Matematikai operátorok
let a = 10;
let b = 3;
console.log("Összeadás:", a + b);
console.log("Kivonás:", a - b);
console.log("Szorzás:", a * b);
console.log("Osztás:", a / b);
console.log("Maradék:", a % b);

// Összehasonlító operátorok
console.log("\nÖsszehasonlítások:");
console.log("Egyenlő (==):", 5 == "5");        // true  (érték szerinti)
console.log("Szigorúan egyenlő (===):", 5 === "5");
console.log("Példa szig és sima egyenlőre:", 5 === 5);  // false (típus is számít)
console.log("Példa szig és sima egyenlőre:", "5" === "5");  // false (típus is számít)
console.log("Nagyobb:", 10 > 5);
console.log("Kisebb:", 10 < 20);

// Logikai operátorok
console.log("\nLogikai operátorok:");
console.log("ÉS (&&):", true && false);  // false
console.log("VAGY (||):", true || false); // true
console.log("NEM (!):", !true);          // false