$(document).ready(function($) {
    $('#tabs').tabs({
    	show: {effect: "fade", duration: 800}
    });

    $('.tooltip').tooltipster({
    	content: $('<h4>Les Gardiens de la Galaxie</h4><p class="genre-aff">Comédie (1h49) <img class="vost-aff" src="img/vost.png" alt="" /> <img class="picto-age" src="img/picto-age-aff.png" alt="" /></p><p class="acteur-aff">Avec Cameron Diaz, Kate Upton, Leslie Mannannann</p><p class="origine-aff">USA (2014)</p><p class="catchphrase">« Le nouveau chef-d\'oeuvre de Christopher Nolan »</p><button class="achat-aff">Acheter en HD<div class="right"><span class="cross-bar">12,99€</span> <span class="price">9,99€</span></div></button><div class="clear"></div><button class="louer-aff">Louer en HD<div class="right"><span class="cross-bar">4,99€</span> <span class="price">2,99€</span></div></button><div class="clear"></div><a href="#" alt="">Plus d’infos ›</a>'),
    	delay: 1000,
    	interactive: true,
    	arrowColor: '#fff',
    	position: 'right'
    });
});