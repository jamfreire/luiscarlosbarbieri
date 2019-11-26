$(function(){

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
	
	// Controle de reprodução de audio
	document.addEventListener('play', function(e){
		var audios = document.getElementsByTagName('audio');
		for(var i = 0, len = audios.length; i < len;i++){
			if(audios[i] != e.target){
				audios[i].pause();
			}
		}
	}, true);


	$('#playlist').on('click', '.audioDemo', function() {
		
		var player = $(this).find('audio');
		if (!(player[0].paused || player[0].muted)) {
			player.trigger("pause");
			$(this).find('.icon-song').addClass("fa-play").removeClass("fa-pause");
		} else {
			// Pausa as outras músicas
			$('audio').trigger("pause");
			$('.audioDemo').find('.icon-song').removeClass("fa-pause").addClass('fa-play');
			
			// Executa música selecionada
			player.trigger("play");
			$(this).find('.icon-song').addClass("fa-pause").removeClass("fa-play");
		}
	});

	$("#buscaPartituraInput").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#partituraTable tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
		});
	
	$("#filtros").on('click', '.nav-link', function() {
		$('.nav-link').removeClass('active');
		$(this).addClass("active");
		var termo = $(this).attr('href').split("#")[1];
		
		if(termo === 'all') {
			$("#partituraTable tr").filter(function() {
				$(this).show();
			});
		} else {
			$("#partituraTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(termo) > -1)
			});
		}
	});

	$("#formacao").on('click', '.nav-link', function() {
		$('.nav-link').removeClass('active');
		$(this).addClass("active");
		var termo = $(this).attr('href').split("#")[1];
		
		if(termo === 'all') {
			$("#partituraTable tr").filter(function() {
				$(this).show();
			});
		} else {
			$("#partituraTable tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(termo) > -1)
			});
		}
	});
});