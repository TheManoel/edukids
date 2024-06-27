document.addEventListener('DOMContentLoaded', function() {
    const materiaElements = document.querySelectorAll('.materia');
    materiaElements.forEach((element) => {
        element.addEventListener('click', function() {
            highlight(element);
        });
    });
});

function highlight(element) {
    element.style.animation = 'highlight 1s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 1000);
}
