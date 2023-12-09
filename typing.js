function typeText(text, element, speed = 20) {
    let index = 0;

    // Speed of typing (milliseconds per character)

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', function() {
    const term = document.getElementById('term');
    const banner = term.querySelector('#banner');

    // Typing effect for the banner
    const bannerText = banner.innerText.trim();
    banner.innerText = ''; // Clear existing text
    typeText(bannerText, banner, 2);
    
});
