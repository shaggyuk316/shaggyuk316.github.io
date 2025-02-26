// script.js
const slider = document.getElementById('rangeControl');
const box = document.querySelector('.animated-box');

slider.addEventListener('input', () => {
    let value = slider.value;
    box.style.animationDuration = `${value / 25}s`; // Range 0.04s to 4s
});
