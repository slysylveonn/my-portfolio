

let nameSaved = document.getElementById("name");
let emailSaved = document.getElementById("email");
let phoneSaved = document.getElementById("phone");
let contactMethod = document.getElementById("select");
let messageSaved = document.getElementById("contact-form");                   //contact form local storage elements


//show/hide toggle description buttons for portfolio items

//nutrition
let nutrition = document.getElementById("nutrition");
nutrition.addEventListener('click', function (event) {
    event.preventDefault();
    let nutDesc = document.getElementById("nutDesc");
    if (nutDesc.style.display === "none") {
        nutDesc.style.display = "block";
    } else {
        nutDesc.style.display = "none";
    }
});

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


//form validation and submit messages

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



//dark mode

const darkMode = document.getElementById('drk-toggle');

// Check local storage for saved dark mode preference
if (localStorage.getItem('isDarkMode') === 'true') {
    document.body.classList.add('dark-theme');
    darkMode.textContent = 'Light mode';
} else {
    document.body.classList.remove('dark-theme');
    darkMode.textContent = 'Dark mode';
}

darkMode.addEventListener('click', function () {
    // Toggle dark mode
    document.body.classList.toggle('dark-theme');

    // Save theme preference to local storage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('isDarkMode', 'true');
        darkMode.textContent = 'Light mode';
    } else {
        localStorage.setItem('isDarkMode', 'false');
        darkMode.textContent = 'Dark mode';
    }
});