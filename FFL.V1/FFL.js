function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('datentime').textContent = `${formattedDate} ${formattedTime}`;
}

updateDateTime(); 
setInterval(updateDateTime, 1000);


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".interested-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("interested");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
            let errors = [];

            const isGiveawayForm = form.querySelector("#name") !== null; 
            const petType = form.querySelector('input[name="pet"]:checked');
            if (!petType) {
                errors.push("Please select a pet type (Cat or Dog).");
            }

            const breedSelects = form.querySelectorAll("select");
            if (breedSelects.length > 0) {
                breedSelects.forEach((select, index) => {
                    if (select.value === "") {
                        errors.push(`Please select a valid option for dropdown #${index + 1}.`);
                    }
                });
            }

            const gender = form.querySelector('input[name="Gender"]:checked');
            if (!gender) {
                errors.push("Please select the pet's gender.");
            }

            const compatibility = form.querySelectorAll('input[type="checkbox"]:checked');
            if (compatibility.length === 0) {
                errors.push("Please select at least one compatibility option (Dogs, Cats, or Children).");
            }

            if (isGiveawayForm) {
                const ownerName = form.querySelector("#name");
                if (!ownerName.value.trim()) {
                    errors.push("Please enter the owner's full name.");
                }

                const email = form.querySelector("#email");
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email.value.trim()) {
                    errors.push("Please enter an email address.");
                } else if (!emailPattern.test(email.value.trim())) {
                    errors.push("Please enter a valid email address (example@example.com).");
                }
            }
    
            if (errors.length > 0) {
                alert("⚠️ Please fix the following errors before submitting:\n\n" + errors.join("\n"));
            } else {
                form.submit();
            }
        });
    });
});


