document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("jewelleryForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form inputs
        const occasion = document.getElementById("occasion").value;
        const purchase = document.querySelector('input[name="purchase"]:checked');
        const gender = document.querySelector('input[name="gender"]:checked');
        const age = document.querySelector('input[name="age"]:checked');
        const religion = document.getElementById("religion").value;
        const jewelryType = document.querySelector('input[name="jewelryType"]:checked');
        const budget = document.getElementById("budget").value;
        const outfitImage = document.getElementById("outfitImage").files[0];

        if (!occasion || !purchase || !gender || !age || !jewelryType || !budget) {
            alert("Please fill out all required fields.");
            return;
        }

        // For now, let's just log the form data
        console.log("Form submitted successfully!");
        console.log("Occasion:", occasion);
        console.log("Purchase:", purchase.value);
        console.log("Gender:", gender.value);
        console.log("Age Group:", age.value);
        console.log("Religion:", religion || "Not specified");
        console.log("Type of Jewellery:", jewelryType.value);
        console.log("Budget:", budget);
        console.log("Outfit Image:", outfitImage ? outfitImage.name : "Not uploaded");
    });
});
