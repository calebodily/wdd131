// footer date
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = document.lastModified;


// Number of posted reviews
const reviewPosted = document.querySelector("#posted");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 1;

if (numVisits !== 0) {
    reviewPosted.textContent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);