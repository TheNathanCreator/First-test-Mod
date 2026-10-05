// Hier maken we de Super Steen aan
elements.super_steen = {
    name: "Super Steen",       // De naam die je in het spel ziet
    color: "#4a4a4a",          // De kleur (donkergrijs)
    behavior: behaviors.POWDER, // Valt naar beneden als poeder
    category: "solids",        // Dit koppelt hem automatisch aan Vaste Stoffen
    density: 2000,             // Het gewicht
    tempHigh: 1500,            // Smeltpunt
    stateHigh: "magma",        // Verandert in magma bij smelten
};
