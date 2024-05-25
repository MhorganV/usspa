
function logout() {
    // Perform any logout logic here (e.g., clear session, redirect to login page)
    alert("Logout successful!");
    window.location.href = "index.html"; // Redirect to your login page
}

// Update the login function with the logout button event
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation, replace with proper authentication logic
    if (username === "Carole" && password === "Carolejensen01") {
        alert("Login successful!");
        // Redirect to the dashboard after a successful login
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

// Attach the logout function to the logout button
document.getElementById("logout").addEventListener("click", logout);


//BAL CHECK

function checkAvailableBalance() {
    // Perform logic to calculate available balance (placeholder value for demonstration)
    // var savingsBalance = 00.00;
    // var currentBalance = 00.00;

    var availableBalance = savingsBalance + currentBalance;

    // Update the available balance on the page
    document.getElementById("availableBalance").innerText = "$" + availableBalance.toFixed(2);
}


//TRANSFER

function performExternalTransfer() {
    // Retrieve form values
    var toBank = document.getElementById("toBank").value;
    var accountNumber = document.getElementById("accountNumber").value;
    var routingNumber = document.getElementById("routingNumber").value;
    var pin = document.getElementById("pin").value;
    var amount = document.getElementById("amount").value;

    // Perform form validation (you may want to add more validation)
    if (!toBank || !accountNumber || !routingNumber || !pin || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    // Perform logic to initiate external transfer (placeholder value for demonstration)
    alert("Transaction On HOLD!\nAmount: $" + amount + "\nTo: " + toBank + " - Account: " + accountNumber);
}




//DEPOSIT

function addMoney() {
    const amountInput = document.getElementById('amountInput');
    const selectedAmount = amountInput.value;

    // You can perform additional validation here if needed

    alert(`Adding ${selectedAmount} to the bank account shortly!`);
}

document.addEventListener('DOMContentLoaded', function () {
    const optionsList = document.getElementById('optionsList');
    const amountInput = document.getElementById('amountInput');

    // Event listener for amount input changes
    amountInput.addEventListener('input', function () {
        // Clear the current list
        optionsList.innerHTML = '';

        // Define options based on the entered amount
        const options = [10, 20, 50, 100];

        // Create and append list items
        options.forEach(optionValue => {
            const listItem = document.createElement('li');
            listItem.classList.add('option');
            listItem.dataset.value = optionValue;
            listItem.textContent = `Add $${optionValue}`;
            optionsList.appendChild(listItem);
        });
    });

    // Event listener for option selection
    optionsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('option')) {
            const selectedValue = event.target.dataset.value;
            amountInput.value = selectedValue;
        }
    });
});


//SIGNUP

function validateForm(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Additional validation logic can be added here

    alert('Signup successful!');
}




//MAILTO ON CONTACTUS

function submitForm() {
    // You can add form validation here before sending the email.
    // For simplicity, this example assumes the form is always valid.

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    // var message = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Create a mailto link
    var mailtoLink = "mailto:" +
        "?subject=" + encodeURIComponent("Message from " + name) +
        "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message);

    // Open the mail client with the pre-filled data
    window.location.href = mailtoLink;
}


//routing numba

$(document).ready(function(){
    $('.btnn').click(function(){
        $('#heading').text("ROUTIN NUMBER:2134560810");
});

$("#heading").mouseover(function(){
    $("#heading").css({
        "color":"blue","font-size":"1em","letter-spacing":"1px"
    });
})

})


//LOCALTIME

function updateDateTime() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var formattedDateTime = now.toLocaleDateString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();