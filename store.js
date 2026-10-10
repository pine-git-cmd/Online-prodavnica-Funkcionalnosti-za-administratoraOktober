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

  
    tableBody.innerHTML = "";

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

        tr.addEventListener('click', function() {
            displayDetails(artikal);
        });

        tableBody.appendChild(tr);
    }
}


function saveArticlesToStorage() {
    localStorage.setItem("artikli", JSON.stringify(artikli));
}


function loadArticlesFromStorage() {
    const storedArticles = localStorage.getItem("artikli");
    if (storedArticles) {
        
        const parsed = JSON.parse(storedArticles);
        artikli = parsed.map(item => new Artikal(item.naziv, item.cena, item.opis));
    } else {
        
        artikli = [
            new Artikal("Monitor", 165, "27-incni Full HD monitor sa osvezavanjem od 75Hz."),
            new Artikal("TV", 650, "Smart TV 55 inča sa 4K rezolucijom."),
            new Artikal("Miš", 20, "Bežični optički miš sa podesivim DPI-jem.")
        ];
        saveArticlesToStorage();
    }
}

function handleFormSubmission() {
    let submitBtn = document.querySelector('#submitBtn');

    submitBtn.addEventListener('click', function() {
        const forma = document.querySelector('#forma');
        const formData = new FormData(forma);

        const naziv = formData.get('naziv');
        const cena = formData.get('cena');
        const opis = formData.get('opis');

        if (!naziv || !cena || !opis) {
            alert("Molimo vas da popunite sva polja!");
            return;
        }

        const novArtikal = new Artikal(naziv, Number(cena), opis);
        artikli.push(novArtikal);

        
        saveArticlesToStorage();

        createArticleRows();
        forma.reset();
    });
}

function initializeArticles() {
   
    loadArticlesFromStorage();

    createArticleRows();
    handleFormSubmission();
}

document.addEventListener('DOMContentLoaded', initializeArticles);