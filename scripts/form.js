const products = [
    { id: "p101", name: "Wireless Mouse" },
    { id: "p102", name: "Mechanical Keyboard" },
    { id: "p103", name: "HD Monitor" },
    { id: "p104", name: "USB-C Hub" },
    { id: "p105", name: "Laptop Stand" }
];

const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.getElementById("reviewForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    reviewCount += 1;
    localStorage.setItem("reviewCount", reviewCount);

    alert(`Thank you for submitting your review! You’ve submitted ${reviewCount} review(s).`);

    this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const modificationDateElement = document.getElementById("modification-date");
    if (modificationDateElement) {
        const lastModified = document.lastModified;
        modificationDateElement.textContent = lastModified;
    }
});
