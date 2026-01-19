// Wait for the DOM to be fully loaded
$(document).ready(function() {
    
    // Smooth scroll for the "Learn More" button and nav links
    $('#scrollToDetails, .nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Animate scroll to the specific section
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80 // Adjust offset for fixed navbar
            }, 800);
        }
    });

    // Change navbar appearance on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow-sm').css('padding', '10px 0');
        } else {
            $('.navbar').removeClass('shadow-sm').css('padding', '15px 0');
        }
    });
});