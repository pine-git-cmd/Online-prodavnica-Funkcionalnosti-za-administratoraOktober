class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

// Kreiranje instanci artikala
const artikal1 = new Artikal("Laptop", 1200.99, "Praktičan i moćan laptop za svakodnevni rad.");
const artikal2 = new Artikal("Telefon", 799.49, "Moderan pametni telefon sa dugotrajnom baterijom.");

// Dodavanje instanci u niz
const artikli = [artikal1, artikal2];
