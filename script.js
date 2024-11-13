let companyProject = document.getElementById("company");
let registrationProject = document.getElementById("registration");          //portfolio buttons


let nameSaved = document.getElementById("name");
let emailSaved = document.getElementById("email");
let phoneSaved = document.getElementById("phone");
let contactMethod = document.getElementById("select");
let messageSaved = document.getElementById("contact-form");                   //contact form



//registration
let registration = document.getElementById("registration");
registration.addEventListener('click', function (event) {
    event.preventDefault();
    let regDesc = document.getElementById("regDesc");
    if (regDesc.style.display === "none") {
        regDesc.style.display = "block"; // hide content
    } else {
        regDesc.style.display = "none"; // show content
    }
});
//company
let company = document.getElementById("company");
company.addEventListener('click', function (event) {
    event.preventDefault();
    let companyDesc = document.getElementById("compDesc");
    if (companyDesc.style.display === "none") {
        companyDesc.style.display = "block";
    } else {
        companyDesc.style.display = "none";
    }
});

// id="regDesc"

// id="compDesc"






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