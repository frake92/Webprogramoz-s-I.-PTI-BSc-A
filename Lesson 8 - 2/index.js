console.log("\n--- Callback függvények ---");

function szamolas(a, b, callback) {
    console.log("Számolás eredménye:");
    return callback(a, b);
}

// Callback használata
console.log("Összeadás callback-kel:", 
    szamolas(5, 3, (x, y) => x + y)
);

console.log("Szorzás callback-kel:", 
    szamolas(5, 3, (x, y) => x * y)
);

// 6. Closure példa
function szamlaloKeszito() {
    let szamlalo = 0;
    return function() {
        return ++szamlalo;
    };
}

const novelo = szamlaloKeszito();
console.log("\n--- Closure példa ---");
console.log(novelo()); // 1
console.log(novelo()); // 2
console.log(novelo()); // 3