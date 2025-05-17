// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Navigation buttons
    const homeButton = document.querySelector('.nav-link[href="index.html"]');
    const aboutButton = document.querySelector('.nav-link[href="about.html"]');
    const servicesButton = document.querySelector('.nav-link[href="service.html"]');
    const blogButton = document.querySelector('.nav-link[href="blog.html"]');
    const contactButton = document.querySelector('.nav-link[href="contact.html"]');

    if (homeButton) {
        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Navigating to Home");
            window.location.href = "index.html";
        });
    }
    // Add event listeners for navigation buttons
    homeButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Navigating to Home");
        window.location.href = "index.html";
    });

    aboutButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Navigating to About");
        window.location.href = "about.html";
    });

    servicesButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Navigating to service");
        window.location.href = "service.html";
    });

    blogButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Navigating to blog");
        window.location.href = "blog.html";
    });

    contactButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Navigating to contact");
        window.location.href = "contact.html";
    });

    // Button for joining services
    const joinwithusButton = document.querySelector('.btn-white');
    joinwithusButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Thank you for joining us!");
        window.location.href = "service.html";
    });

    // Button for llearning more about the company
    const learnmoreButton = document.querySelector('.about-btn a');
    learnmoreButtonearnmoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Learning more about Muft Ke Yatri!");
        window.location.href = "about.html";
    });

    // Contact section button
    const explorenowButton = document.querySelector('.section-contact--homepage .btn a');
    explorenowButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Exploring contact options!");
        window.location.href = "contact.html";
    });

    // Blog section buttons
    const blogLinks = document.querySelectorAll('.blog-content strong');
    blogLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Loading more information about this blog!");
            // You can redirect to a specific blog page if needed
        });
    });
});
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the intersection
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection);

    // Select elements to animate
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideInElements = document.querySelectorAll('.slide-in');

    // Observe each element
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    slideInElements.forEach(element => {
        observer.observe(element);
    });
});
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the intersection
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the visible class for different animations
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection);

    // Select elements to animate
    const scaleUpElements = document.querySelectorAll('.scale-up');
    const rotateElements = document.querySelectorAll('.rotate');
    const bounceElements = document.querySelectorAll('.bounce');

    // Observe each element
    scaleUpElements.forEach(element => {
        observer.observe(element);
    });

    rotateElements.forEach(element => {
        observer.observe(element);
    });

    bounceElements.forEach(element => {
        observer.observe(element);
    });

    // Button click animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.add('bounce');
            setTimeout(() => {
                this.classList.remove('bounce'); // Remove the class after animation
            }, 500); // Match the duration of the bounce animation
        });
    });
});