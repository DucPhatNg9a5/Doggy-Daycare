// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submit = document.getElementById("submit-button");
let contactPage = document.getElementById("contact-page");

submit.addEventListener("click", function() {
    contactPage.innerHTML = "<p>Thank you for your message</p>";
    contactPage.style.fontSize = "24px";
});

