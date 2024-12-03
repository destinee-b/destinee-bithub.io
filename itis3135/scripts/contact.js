document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");
    
    if (!name || !email || !message) {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Thank you for your message!";
    formMessage.style.color = "green";
});
