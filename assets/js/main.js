$(function(){
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
});