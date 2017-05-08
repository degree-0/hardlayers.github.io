//Affix an element
$(document).ready(function() {
    var affixElement = '#secondaryMenu';
	$(affixElement).affix({
	  offset: {
		// Distance of between element and top page
		top: function () {
		  return (this.top = $(affixElement).offset().top)
		},
		// when start #footer 
		bottom: function () { 
		  return (this.bottom = $('#copyright').outerHeight(true))
		}
	  }
	});
	
	//To make the next element after affixed element not jump on affix
	$(affixElement).on('affix.bs.affix', function (){
		$(affixElement).next().css('margin-top', $(affixElement).height());
	});

	$(affixElement).on('affix-top.bs.affix', function (){
		 $(affixElement).next().css('margin-top', 0);
	});
});



//Activate Promo close button
$(document).ready(function() {
    $('#hidePromo').on('click', function(e) { 
        $('#promo').remove(); 
    });
});

//Activate Carousel
$(document).ready(function() {
    $('#carouselInner').owlCarousel({
		items:1,
		rtl:true,
		loop:true,
		center:true,
		nav:true,
		autoplay: true,
		autoplayTimeout:3000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		autoplaySpeed: 600,
		navSpeed: 900,
	})
});

//Div Backgrounds Images Property
$(document).ready(function() {
	var bgImg = $("[data-bg-src]");
        bgImg.each(function() {
            var bgImg = $(this),
                imgSrc = bgImg.data("bg-src");
            bgImg.css("background-image", "url(" + imgSrc + ")")
        });
});

//Counter Up
$(document).ready(function() {
	var counterNumbers = $(".counter-number");
	$(counterNumbers).length && $(counterNumbers).counterUp({
		delay: 10,
		time: 1e3
	});
});

//VPS Slider
$(document).ready(function() {
	
});

//Wow JS
$(document).ready(function() {
	new WOW().init();
});
              

! function($) {
    "use strict";
    $(document).ready(function() {
        

		var t = $("#vpsSlider"),
            u = $(".vps-item-cpu"),
            v = $(".vps-item-ram"),
            w = $(".vps-item-space"),
            x = $(".vps-item-bandwidth"),
            y = $(".vps-total-price span"),
            z = $(".vps-item-setup"),
            A = $(".vps-item-ip");
        t.length && (t.slider({
            animate: "fast",
            range: "min",
            min: 0,
            max: 2,
            value: 1,
            step: 1,
            slide: function(b, c) {
                var d, e, f, g, h, i, j, k;
                switch (c.value) {
                    case 0:
                        d = "VPS مبدتئين", 
						e = "1 نواة", 
						f = "1 GB", 
						g = "100 GB", 
						h = "1000 GB", 
						i = "$9.99", 
						j = "مجانا", 
						k = "حتى 1";
                        break;
                    case 1:
                        d = "VPS كويس", 
						e = "2 نواة", 
						f = "2 GB", 
						g = "200 GB", 
						h = "2000 GB", 
						i = "$29.99", 
						j = "مجانا", 
						k = "حتى 2";
                        break;
                    case 2:
                        d = "VPS ممتاز", e = "3 نواة", f = "3 GB", g = "300 GB", h = "3000 GB", i = "$59.99", j = "مجانا", k = "حتى 3";
                        break;
                }
                u.text(e), 
				v.text(f), 
				w.text(g), 
				x.text(h), 
				y.text(i),
				z.text(j), 
				A.text(k), 
				$("#vpsSlider .ui-slider-handle").text(d)
            }
        }), $("#vpsSlider .ui-slider-handle").text("VPS 2"));
        
    })
}(jQuery);