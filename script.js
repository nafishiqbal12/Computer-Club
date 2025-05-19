// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Event registration button functionality
document.querySelectorAll('.event-card .btn').forEach(button => {
    button.addEventListener('click', () => {
        const eventName = button.parentElement.querySelector('h3').textContent;
        alert(`You have registered for: ${eventName}`);
    });
});

// Mobile menu toggle (for future expansion)
const menuToggle = () => {
    console.log("Menu toggle functionality can be added here.");
};