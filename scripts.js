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

      const text = "I´m Javier Torrubia";
      const textElement = document.getElementById("animated-text");
      let index = 0;
  
    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 130); 
        }
    }


    function borderIntermittent() {
        setInterval(() => {
            if (textElement.style.borderRight === 'none') {
                textElement.style.borderRight = '.15em solid orange';
            } else {
                textElement.style.borderRight = 'none';
            }
        }, 500); // Cambia el borde cada 500 ms
    }
  
    typeWriter();
    borderIntermittent();
    

    function counterAnimation() {
        const counter = document.getElementById("counter");
        let i = 0;

        function updateCounter() {
            if (i <= 100) {
                counter.textContent = i;
                i++;
                setTimeout(updateCounter, 15); // Ajusta el tiempo de espera a tu gusto
            }
        }

        updateCounter();
    }

    counterAnimation();







});

