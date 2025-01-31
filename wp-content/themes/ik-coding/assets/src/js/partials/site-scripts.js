//////////// Stats Counter Script
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const $this = jQuery(entry.target),
                  countTo = $this.attr('data-count');

            jQuery({ countNum: $this.text() }).animate({ countNum: countTo }, {
                duration: 3000,
                easing: 'linear',
                step: function() { $this.text(Math.floor(this.countNum)); },
                complete: function() { $this.text(this.countNum); }
            });

            observer.unobserve(entry.target); 
        }
    });
}, { threshold: 0.5 });


jQuery('.counter').each(function() {
    observer.observe(this);
});

jQuery( '.faq > .faq-head' ).on( 'click', function() {
    	if ( jQuery( this ).parent().hasClass( 'active' ) ) {
    		jQuery( this ).parent().removeClass( 'active' );
    		jQuery( this ).siblings( '.faq-content' ).slideUp();
    	} else {
    		jQuery( '.faq > .faq-head' ).parent().removeClass( 'active' );
    		jQuery( this ).parent().addClass( 'active' );
    		jQuery( '.faq-content' ).slideUp();
    		jQuery( this ).siblings( '.faq-content' ).slideDown();
    	}
    } );