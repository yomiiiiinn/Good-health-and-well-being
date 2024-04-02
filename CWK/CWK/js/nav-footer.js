    // JavaScript function to toggle dropdown
    function toggleDropdown(event) {
        var dropdownContent = event.currentTarget.querySelector(".dropdown-content");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }
    
    // Add event listeners to each dropdown container
    document.querySelectorAll(".dropdown").forEach(function(dropdown) {
        dropdown.addEventListener("mouseenter", toggleDropdown);
        dropdown.addEventListener("mouseleave", toggleDropdown);
        dropdown.addEventListener("click", toggleDropdown);
    });
    
    // JavaScript function to toggle dropdown
    function toggleDropdown(event) {
        var dropdownContent = event.currentTarget.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("hidden"); // Toggle the 'hidden' class
    }