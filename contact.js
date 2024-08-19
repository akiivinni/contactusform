document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById("firstnameError").textContent = "";
    document.getElementById("lastnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("queryTypeError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("consentError").textContent = "";

    let isValid = true;

    // Validate First Name
    const firstname = document.getElementById("second").value.trim();
    if (firstname === "") {
        document.getElementById("firstnameError").textContent = "First Name is required";
        isValid = false;
    }

    // Validate Last Name
    const lastname = document.getElementById("fourth").value.trim();
    if (lastname === "") {
        document.getElementById("lastnameError").textContent = "Last Name is required";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById("sixth").value.trim();
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email address";
            isValid = false;
        }
    }

    // Validate Query Type
    const querytype = document.querySelector('input[name="queryType"]:checked');
    if (!querytype) {
        document.getElementById("queryTypeError").textContent = "Please select a query type";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        isValid = false;
    }

    // Validate Consent
    const consent = document.getElementById("college").checked;
    if (!consent) {
        document.getElementById("consentError").textContent = "You must consent to being contacted";
        isValid = false;
    }

    // If form is valid, submit it
    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").submit();
    }
});
