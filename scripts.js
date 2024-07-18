// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");
    
    function checkVisibility() {
        const rectContent = content.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Verifica si el contenido está dentro del área visible
        if (rectContent.top <= windowHeight && rectContent.bottom >= 0) {
            content.classList.add("visible");
        }
    }

    // Verifica la visibilidad cuando la página carga
    checkVisibility();

    // Verifica la visibilidad cuando el usuario hace scroll
    window.addEventListener("scroll", checkVisibility);

      // Selecciona todos los enlaces con hash (#)
      const links = document.querySelectorAll('a[href^="#"]');

      // Añade un evento click a cada enlace
      links.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault(); // Previene el comportamiento por defecto del enlace

              // Obtiene el id del elemento al que se desea desplazar
              const targetId = this.getAttribute('href');
              const targetElement = document.querySelector(targetId);

              if (targetElement) {
                  // Calcula la posición del objetivo
                  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;

                  // Desplazamiento suave con duración de 800ms (ajustar según necesidad)
                  window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                  });
              }
          });
      });
});

