let nameSaved = document.getElementById("name");
let emailSaved = document.getElementById("email");
let phoneSaved = document.getElementById("phone");
let contactMethod = document.getElementById("select");
let messageSaved = document.getElementById("contact-form");

let submit = document.getElementById("submit");

submit.addEventListener('click', function (event) {
    event.preventDefault();
    let name = nameSaved.value;
    let email = emailSaved.value;
    let phone = phoneSaved.value;
    let contact = contactMethod.value;
    let message = messageSaved.value;

    if (name && email && phone && contact && message) {
        alert("Thank you for submitting! We will be in contact with you shortly.")
    } else {
        alert("Please fill out all forms before submitting.");
    }
        

});