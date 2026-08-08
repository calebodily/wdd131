const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerHTML = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').innerHTML = document.lastModified;


const ham = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

ham.addEventListener("click", () => {
    navigation.classList.toggle("open");
    ham.classList.toggle("open");
});