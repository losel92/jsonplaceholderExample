document.getElementById("contact-form").addEventListener("submit", function (event) {
    var formIsValid = true;
    var name = document.getElementById("contact-name");
    var email = document.getElementById("contact-email");
    var topic = document.getElementById("contact-topic");
    var message = document.getElementById("contact-message");
    var objects = [name, email, topic, message];
    // Clear all errors
    objects.forEach(function (obj) {
        obj.nextElementSibling.innerHTML = "";
        obj.nextElementSibling.style.display = "none";
    });
    // test length
    objects.forEach(function (obj) {
        console.log(obj.value, obj.nextElementSibling);
        if (!obj.value.length) {
            obj.nextElementSibling.innerHTML = "Must not be empty";
            obj.nextElementSibling.style.display = "block";
            formIsValid = false;
        }
    });
    // Min length on textarea
    if (message.value.length < 50) {
        message.nextElementSibling.innerHTML = "Must be at least 50 chars";
        message.nextElementSibling.style.display = "block";
        formIsValid = false;
    }
    // Test for a valid email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.nextElementSibling.innerHTML = "Must be a valid email";
        email.nextElementSibling.style.display = "block";
        formIsValid = false;
    }
    console.log(formIsValid);
    if (!formIsValid)
        event.preventDefault();
    else
        alert("Form successfully sbmitted!");
});
