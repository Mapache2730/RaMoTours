document.addEventListener("DOMContentLoaded", function() {
    const personaIcon = document.querySelector(".icon.persona");
    const cartIcon = document.querySelector(".icon.cart");
    const infoIcon = document.querySelector(".icon.info");
    const precioIcon = document.querySelector(".icon.precio");

    personaIcon.addEventListener("mouseover", function() {
        showDropdown(personaIcon);
    });

    personaIcon.addEventListener("mouseout", function() {
        hideDropdown(personaIcon);
    });

    cartIcon.addEventListener("mouseover", function() {
        showDropdown(cartIcon);
    });

    cartIcon.addEventListener("mouseout", function() {
        hideDropdown(cartIcon);
    });

    infoIcon.addEventListener("mouseover", function() {
        showDropdown(infoIcon);
    });

    infoIcon.addEventListener("mouseout", function() {
        hideDropdown(infoIcon);
    });

    precioIcon.addEventListener("mouseover", function() {
        showDropdown(precioIcon);
    });

    precioIcon.addEventListener("mouseout", function() {
        hideDropdown(precioIcon);
    });

    const dropdowns = document.querySelectorAll(".dropdown-menu");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseover", function() {
            dropdown.style.display = "block";
        });

        dropdown.addEventListener("mouseout", function() {
            dropdown.style.display = "none";
        });
    });

    function showDropdown(icon) {
        const dropdown = icon.querySelector(".dropdown-menu");
        dropdown.style.display = "block";
    }

    function hideDropdown(icon) {
        const dropdown = icon.querySelector(".dropdown-menu");
        dropdown.style.display = "none";
    }
});
