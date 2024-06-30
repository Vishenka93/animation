document.addEventListener("DOMContentLoaded", function () {
    const light = document.querySelector(".light");
    const text = document.querySelector(".text");

    function updateShadow() {
        const lightRect = light.getBoundingClientRect();
        const textRect = text.getBoundingClientRect();

        const centerX = textRect.left + textRect.width / 4;
        const centerY = textRect.top + textRect.height / 4;

        const lightX = lightRect.left + lightRect.width / 2;
        const lightY = lightRect.top + lightRect.height / 2;

        const deltaX = lightX - centerX;
        const deltaY = lightY - centerY;

        text.style.textShadow = `${-deltaX / 7}px ${Math.abs(
            deltaY / 7
        )}px 15px rgba(33, 33, 33, 0.7)`;

        requestAnimationFrame(updateShadow);
    }

    updateShadow();
});
