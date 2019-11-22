
$(function() {

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

   
});