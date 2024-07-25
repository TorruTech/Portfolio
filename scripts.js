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

      const text = "Soy Javier Torrubia";
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
    

    const skillsSection = document.getElementById('skills');
    const bars = document.querySelectorAll('.bars');
    const counters = document.querySelectorAll('.counter');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateBars() {
        bars.forEach((bar, index) => {
            const progress = parseInt(bar.getAttribute('data-progress'), 10);
            bar.style.animation = `progress-animation-${index} 2s ease-in-out forwards`;

            let style = document.createElement('style');
            style.innerHTML = `
                @keyframes progress-animation-${index} {
                    0% {
                        width: 0;
                    }
                    100% {
                        width: ${progress}%;
                    }
                }
            `;
            document.head.appendChild(style);

            let counter = counters[index];
            let count = 0;
            const duration = 2000;
            const increment = progress / (duration / 10);

            function updateCounter() {
                count += increment;
                if (count < progress) {
                    counter.textContent = `${Math.round(count)}%`;
                    setTimeout(updateCounter, 10);
                } else {
                    counter.textContent = `${progress}%`;
                }
            }

            updateCounter();
        });
    }

    function onScroll() {
        if (isElementInViewport(skillsSection)) {
            animateBars();
            window.removeEventListener('scroll', onScroll);
        }
    }

      // Initial check in case the user has already scrolled to the section
      if (isElementInViewport(skillsSection)) {
        animateBars();
    } else {
        window.addEventListener('scroll', onScroll);
    }

    const nav = document.querySelector('nav');
    const galaxySection = document.getElementById('galaxy');
    const nextSection = document.querySelector('.section-content');

    function isElementBelowViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < 0; // El elemento está fuera del viewport superior
    }

    function updateNavBackground() {
        if (isElementBelowViewport(galaxySection)) {
            nav.classList.add('black-bg');
        } else {
            nav.classList.remove('black-bg');
        }
    }

    // Initial check
    updateNavBackground();

    // Update nav background on scroll
    window.addEventListener('scroll', updateNavBackground);
});

