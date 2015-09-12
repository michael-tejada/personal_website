(function($) {
    $(document).ready(function() {

        $('span#typed').typed({
            strings: ["the milen", "the millenia", "the millennialist."],
            typeSpeed: 50,
            loop: false,
            backSpeed: 20,
            startDelay: 500
        });

        $('span#tagline-loop').typed({
            strings: ["but still want more.",
                        ],
            typeSpeed: 50,
            loop: false,
            backSpeed: 20,
            startDelay: 2000
        });

        $(".scroll").click(function(event){     
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
        });

    });

})(jQuery)
