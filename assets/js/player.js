function toggleAudio(el) {
    var player = $(el.data('target'));
    $('.icon').removeClass('icon-pause').addClass('icon-play');
    if (!player[0].paused) {
        player[0].pause();
    } else {
        $('audio').each(function() {
        this.pause();
        });
        player[0].play();
        el.find('.icon').removeClass('icon-play').addClass('icon-pause');
    }
}

$(function() {
    $('[data-toggle="player"]').on('click', function(e) {
        e.preventDefault();
        toggleAudio($(this));
    });
});


/*$(function() {

    function playToggle(player) {
        if (!(player[0].paused || player[0].muted)) {
            player.trigger("pause");
            player.closest('tr').find('i').addClass('fa-play');
            player.closest('tr').find('i').removeClass('fa-pause');
            return;
        } else {
            $('audio').trigger("pause");
            $('.audioDemo').find('i').addClass('fa-play');
            $('.audioDemo').find('i').removeClass('fa-pause');

            player.trigger("play");
            player.closest('tr').find('i').addClass('fa-pause');
            return;
        }
    }

    $('#playlist').on('click', 'tr', function() {

        var player = $(this).find('audio');
        playToggle(player);
    });

   
});*/