$(document).ready(function(){
    $("a").on('click', function(){
        var hash = this.hash
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 120
            },
            3000
        )
    })
})

$("#enviar").click(function () {
    alert("El correo fue enviado correctamente");
})

    