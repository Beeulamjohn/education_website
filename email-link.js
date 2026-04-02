// email-link.js
document.addEventListener("DOMContentLoaded", function() {
    const emailIcon = document.getElementById('universal-email-link');

    if (!emailIcon) return;

    emailIcon.addEventListener('click', function(e) {
        e.preventDefault();

        const email = "accxacademy@gmail.com";
        const subject = "Hello";
        const body = "I want to contact you";

        // Web email URLs
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const outlookUrl = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Detect browser and open Gmail or Outlook web if possible
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.includes("chrome") || userAgent.includes("firefox") || userAgent.includes("safari")) {
            // Open Gmail by default in modern browsers
            window.open(gmailUrl, "_blank");
        } else if (userAgent.includes("edge") || userAgent.includes("trident")) {
            // Open Outlook web for Edge/IE
            window.open(outlookUrl, "_blank");
        } else {
            // Fallback to default email client
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        }
    });
});


window.addEventListener("scroll", function () {
    let scroll = window.scrollY;

    document.querySelector(".parallax-bg").style.transform =
        "translateY(" + scroll * 0.4 + "px)";
});





