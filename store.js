'use strict';

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

let artikli = [];


function displayDetails(artikal) {
    let detalji = document.querySelector("#artikalDetails") || document.querySelector("#detaljiArtikla");

    
    detalji.innerHTML = "";

    
    let p = document.createElement("p");
    p.innerHTML = `Naziv: ${artikal.naziv}<br>Cena: ${artikal.cena}<br>Opis: ${artikal.opis}`;

    detalji.appendChild(p);
}

function createArticleRows() {
    let tableBody = document.querySelector("#artikli-body") || document.querySelector("#artikli");

    for (let i = 0; i < artikli.length; i++) {
        let artikal = artikli[i];

        let tr = document.createElement("tr");

        let tdBr = document.createElement("td");
        tdBr.textContent = i + 1;

        let tdNaziv = document.createElement("td");
        tdNaziv.textContent = artikal.naziv;

        let tdCena = document.createElement("td");
        tdCena.textContent = artikal.cena;

        tr.appendChild(tdBr);
        tr.appendChild(tdNaziv);
        tr.appendChild(tdCena);

        // Dodavanje klika na red u tabeli
        tr.addEventListener('click', function() {
            displayDetails(artikal);
        });

        tableBody.appendChild(tr);
    }
}

function initializeArticles() {
    artikli = [
        new Artikal("Monitor", 165, "27-incni Full HD monitor sa osvezavanjem od 75Hz."),
        new Artikal("TV", 650, "Smart TV 55 inca sa 4K rezolucijom."),
        new Artikal("Mis", 20, "Bezicni opticki mis sa podesivim DPI-jem.")
    ];

    createArticleRows();
}

document.addEventListener('DOMContentLoaded', initializeArticles);