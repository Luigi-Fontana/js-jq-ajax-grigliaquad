$(document).ready(function(){
    $('.square').click(function(){
        var that = $(this);
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (numero) {
                var random = numero.response;
                that.text(random);
                if (random > 5) {
                    that.addClass('green');
                } else {
                    that.addClass('orange');
                }
            },
            error: function () {
                alert('Errore Generico');
            }
        });
    });
});
