$(document).ready(function(){
    var source = $("#square-template").html(); // Clono il template square
    var template = Handlebars.compile(source); // lo do in pasto a handlebars
    for (var i = 0; i < 36; i++) { // ciclo per 36 volte
        $('#grid').append(template); // Lo appendo al contenitore grid
    };
    $('.square').click(function(){
        var that = $(this); // Faccio la foto del quadrato cliccato
        $.ajax({
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function (numero) {
                var random = numero.response; // Faccio la foto del random generato API
                that.text(random); // Mostro il numero random nel quadrato cliccato
                if (random > 5) { // Se è maggiore di 5 diventa verde
                    that.addClass('green').removeClass('orange');
                } else { // Altrimenti diventa orange
                    that.addClass('orange').removeClass('green');
                }
            },
            error: function () {
                alert('Errore Generico');
            }
        });
    });
});
