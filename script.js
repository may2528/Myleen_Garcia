
document.getElementById("contactForm").addEventListener("submit"), function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a confirmation alert (in a real application, you'd send this data to a server)
    alert(`Thank you for reaching out! We'll get back to you at ${email}.`);
}