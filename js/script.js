// JavaScript para animaciones simples en los enlaces

document.querySelectorAll('.subcategory a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        
        // Agregar clase de animación
        this.classList.add('animate');
        
        // Después de 500ms, remover la clase de animación
        setTimeout(() => {
            this.classList.remove('animate');
        }, 500);
    });
});

$(".category").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });