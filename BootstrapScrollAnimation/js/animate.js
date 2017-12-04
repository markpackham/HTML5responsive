/* We are using
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 */

/*
Reveal elements
 */
window.sr = ScrollReveal();
sr.reveal('.navbar',
    {
        duration: 2000,
        origin:
            'bottom'
    });
sr.reveal('.showcase-left',
    {
        duration: 2000,
        origin:
            'top',
        distance: '300px'
    });
sr.reveal('.showcase-right',
    {
        duration: 2000,
        origin:
            'right',
        distance: '300px'
    });
sr.reveal('.showcase-btn',
    {
        duration: 2000,
        delay: 2000,
        origin:
            'bottom'
    });
sr.reveal('#testimonail div',
    {
        duration: 2000,
        origin:
            'bottom'
    });
sr.reveal('.info-left',
    {
        duration: 2000,
        origin:
            'left',
        distance: '300px',
        /*When we see 2% of the element it will do the animation */
        viewFactor: 0.2
    });
sr.reveal('.info-right',
    {
        duration: 2000,
        origin:
            'right',
        distance: '300px',
        /*When we see 2% of the element it will do the animation */
        viewFactor: 0.2
    });

/*
Allow smooth scrolling for menu using jQuery
 */
$(function () {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});