const buttonName = document.getElementById("changeName");
const studentName = document.getElementById("studentName");

buttonName.addEventListener("click", function () {
    studentName.textContent = "Jeffrey Zaragoza";
}

);


const buttonBackground = document.getElementById("changeBackground");
const profile = document.getElementById("profile");

let isOrange = false;

buttonBackground.addEventListener("click", function () {
    if (isOrange) {
        profile.style.backgroundColor = "";
        isOrange = false;
    } 
    else {
        profile.style.backgroundColor = "orange";
        isOrange = true;
    }
}

);

const buttonDetails = document.getElementById("toggleDetails");
const details = document.getElementById("details");

buttonDetails.addEventListener("click", function () {
    details.classList.toggle("hidden");
}

);
