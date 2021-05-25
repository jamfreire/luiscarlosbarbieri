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

	$("audio").on("play", function() {
		var id = $(this).attr('id');
	
		$("audio").not(this).each(function(index, audio) {
			audio.pause();
		});
	});

	$('#pills-tab a').on('click', function (e) {
		e.preventDefault()

		$("audio").each(function(index, audio) {
			audio.pause();
		});
		$(this).tab('show');
	});

	$('[data-toggle="play"]').on('click', function(e) {
		e.preventDefault();

		var target = $(this).data('target');
		var player = $(target);
		if (!(player[0].paused || player[0].muted)) {
			player.trigger("pause");
			$(this).closest('.subfaixa').find('.icon').addClass("icon-play").removeClass("icon-pause");
		} else {
			//$('audio').trigger("pause");
			$('.icon').removeClass("icon-pause").addClass('icon-play');
			player.trigger("play");
			$(this).closest('.subfaixa').find('.icon').addClass("icon-pause").removeClass("icon-play");
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