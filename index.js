const colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink'];

const heading = document.getElementById('heading');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const RNG = Math.floor(Math.random() * colors.length);
    heading.style.color = colors[RNG]
})