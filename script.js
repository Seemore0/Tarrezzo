document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").classList.add("fade-in");
});
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function() {
        let fullScreen = document.createElement("div");
        fullScreen.classList.add("fullscreen");
        fullScreen.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
        document.body.appendChild(fullScreen);

        fullScreen.addEventListener("click", function() {
            this.remove();
        });
    });
});
function convertAndCalculate() {
    let feetInput = document.getElementById("areaFeet").value;
    let metersInput = document.getElementById("areaMeters").value;
    
    // Convert feet to meters (1 ft² = 0.092903 m²)
    if (feetInput && feetInput !== "") {
        document.getElementById("areaMeters").value = (feetInput * 0.092903).toFixed(6); // Allow up to 6 decimals
    }

    // Convert meters to feet (1 m² = 10.764 ft²)
    if (metersInput && metersInput !== "") {
        document.getElementById("areaFeet").value = (metersInput * 10.764).toFixed(2); // Allow 2 decimals for feet
    }

    // Reset calculation if no values are entered
    if (!metersInput && !feetInput) {
        document.getElementById("totalCost").innerText = "0 UGX";
    }
}

function calculateCost() {
    let area = document.getElementById("areaMeters").value;
    let pricePerSquareMeter = 60000; // Price per square meter in UGX

    // If no value is entered, reset total cost
    if (area === "" || area <= 0) {
        document.getElementById("totalCost").innerText = "0 UGX";
    } else {
        let totalCost = area * pricePerSquareMeter;
        document.getElementById("totalCost").innerText = totalCost.toLocaleString() + " UGX";
    }
}