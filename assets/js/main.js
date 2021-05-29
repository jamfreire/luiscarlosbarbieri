$(function() {
	"use strict";

	$('body').scrollspy({
		target: '#mainNav',
		offset: 68
	});
	
	var navbarCollapse = function () {
		if ($(".navbar-main").offset().top > 150) {
			$(".navbar-main").addClass("navbar-shrink");
		} else {
			$(".navbar-main").removeClass("navbar-shrink");
		}
	};
	navbarCollapse();
	$(window).scroll(navbarCollapse);

	// Partituras
	var partituras;
	function resetarFiltroPartitura() {
		partituras = $(".partitura");
		$("#composicao .nav-link").removeClass("active");
		$("#allComposicao").addClass("active");
		partituras.show();
	}
	function filtrarPartitura(term) {
		resetarFiltroPartitura();
		term = term.toLowerCase();
		if(term !== "all") {
			partituras.filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(term) > -1);
			});
		}
	}
	function filtrarPartituraPorCompositor(compositor) {
		$("#buscaPartituraInput").val('');
		$( "#selectFormacao" ).val('all');
		filtrarPartitura(compositor);
	}
	function filtrarPartituraPorFormacao(formacao) {
		$("#buscaPartituraInput").val('');
		filtrarPartitura(formacao);
	}
	function filtrarPartituraPorBusca(termo) {
		$( "#selectFormacao" ).val('all');
		filtrarPartitura(termo);
	}

	// Por busca:
	$("#buscaPartituraInput").on("keyup", function() {
		filtrarPartituraPorBusca($(this).val());
	});
	// Por compositor:
	$("#composicao").on("click", ".nav-link", function() {
		var navLink = $(this);

		filtrarPartituraPorCompositor(navLink.attr('href').substring(1));

		$("#composicao .nav-link").removeClass("active");
		navLink.addClass("active");
	});
	$( "#selectFormacao" ).change(function() {
		filtrarPartituraPorFormacao($(this).val());
	});

	resetarFiltroPartitura();
});