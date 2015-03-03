$(document).ready(function($) {
    $('#tabs').tabs({
    	show: {effect: "fade", duration: 800}
    });

    $('.tooltip').tooltipster({
    	content: $('<h4>Les Gardiens de la Galaxie</h4><p class="genre-aff">Comédie (1h49) <img class="vost-aff" src="img/vost.png" alt="" /> <img class="picto-age" src="img/picto-age-aff.png" alt="" /></p><p class="acteur-aff">Avec Cameron Diaz, Kate Upton, Leslie Mannannann</p><p class="origine-aff">USA (2014)</p><p class="catchphrase">« Le nouveau chef-d\'oeuvre de Christopher Nolan »</p><button class="achat-aff">Acheter en HD<div class="right"><span class="cross-bar">12,99€</span> <span class="price">9,99€</span></div></button><div class="clear"></div><button class="louer-aff">Louer en HD<div class="right"><span class="cross-bar">4,99€</span> <span class="price">2,99€</span></div></button><div class="clear"></div><a href="#" alt="">Plus d’infos ›</a>'),
    	delay: 3000,
    	speed: 300,
    	interactive: true,
    	arrowColor: '#fff',
    	position: 'right'
    });

    $('.bxslider').bxSlider({
        slideWidth: 195,
        minSlides: 5,
        maxSlides: 5,
        pager: false,
        slideMargin: 28,
        infiniteLoop: false,
        hideControlOnEnd: true
    });

    $('#reduction').tabs({
        show: {effect: "fade", duration: 800}
    });

    $('.select-genre').selectbox();
    $('.select-tri').selectbox();
    $('.select-langue').selectbox();

    $('.slider-input').jRange({
    from: 2002,
    to: 2015,
    step: 1,
    scale: [2002,2015],
    format: '%s',
    width: 570,
    showLabels: true,
    isRange : true
    });

    $('#Container').mixItUp({
    animation: {
        enable: false       
    },
    callbacks: {
        onMixLoad: function(){
            $(this).mixItUp('setOptions', {
                animation: {
                    enable: true    
                },
            });
        }
    }
    });

    slideMenu.build('sm',200,10,10,1);
});