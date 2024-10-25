
    const menuLinks = document.querySelectorAll('.navbar ul li a');
    const menuCheckbox = document.getElementById('menu');

    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Desmarcamos el checkbox para cerrar el menú
            menuCheckbox.checked = false;
        });
    });
