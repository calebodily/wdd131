const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = document.lastModified;