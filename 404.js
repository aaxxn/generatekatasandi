function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    const errorText = document.getElementById('error');
    errorText.style.color = getRandomColor();
}

setInterval(changeColor, 1000);

document.getElementById('error').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

document.getElementById('error').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});