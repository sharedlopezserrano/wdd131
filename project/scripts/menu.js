document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    const modSpan = document.getElementById('modification-date');
    if (modSpan) {
        modSpan.textContent = document.lastModified;
    }
});