//Affix an element
$(document).ready(function() {
    var affixElement = '.toBeAffixed';
	$(affixElement).affix({
	  offset: {
		// Distance of between element and top page
		top: function () {
		  return (this.top = $(affixElement).offset().top)
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
		autoplayTimeout:9000,
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

//ScrollUp on hashtags
$(document).ready(function() {
		// The function actually applying the offset
		function offsetAnchor() {
		  if (location.hash.length !== 0) {
			window.scrollTo(window.scrollX, window.scrollY - 100);
		  }
		}

		// Captures click events of all <a> elements with href starting with #
		$(document).on('click', 'a[href^="#"]', function(event) {
		  // Click events are captured before hashchanges. Timeout
		  // causes offsetAnchor to be called after the page jump.
		  window.setTimeout(function() {
			offsetAnchor();
		  }, 0);
		});

		// Set the offset when entering page with hash present in the url
		window.setTimeout(offsetAnchor, 0);
	});

//Same Height Divs
$(document).ready(function() {
	$(function() {
		$('.sameHeight').matchHeight();
	});
});
	
! function($) {
    "use strict";
    $(document).ready(function() {
		var mySlider = $("#vpsSlider"),
            cpuDiv = $(".vps-item-cpu"),
            ramDiv = $(".vps-item-ram"),
            spaceDiv = $(".vps-item-space"),
            bandDiv = $(".vps-item-bandwidth"),
            priceDiv = $(".vps-total-price span");
		var handleText, coreText, ramText, spaceText, bandText, priceText;
        mySlider.length && (mySlider.slider({
            animate: "fast",
            range: "min",
            min: 0,
            max: 2,
            value: 1,
            step: 1,
            slide: function(event, ui) {
                switch (ui.value) {
                    case 0:
                        handleText = "VPS مبدتئين", coreText = "1 نواة", ramText = "1 GB", spaceText = "100 GB", bandText = "1000 GB", priceText = "$9.99";
                        break;
                    case 1:
                        handleText = "VPS كويس", coreText = "2 نواة", ramText = "2 GB", spaceText = "200 GB", bandText = "2000 GB", priceText = "$29.99";
                        break;
                    case 2:
                        handleText = "VPS ممتاز", coreText = "3 نواة", ramText = "3 GB", spaceText = "300 GB", bandText = "3000 GB", priceText = "$59.99";
                        break;
                }
                cpuDiv.text(coreText), 
				ramDiv.text(ramText), 
				spaceDiv.text(spaceText), 
				bandDiv.text(bandText), 
				priceDiv.text(priceText),
				
				$("#vpsSlider .ui-slider-handle").text(handleText)
            }
        }), $("#vpsSlider .ui-slider-handle").text("VPS كويس"));
        
    })
}(jQuery);