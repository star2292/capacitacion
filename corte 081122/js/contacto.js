$(document).ready(function () {

    $(document).on('click', '#main-form-b', function(e) {
        e.preventDefault();

        var urlparam = "http://54.175.184.59:8081/nafin/v1/contacto";
        
        //agregar las validaciones
        var contactJson = { "nombreComp": $('#name').val(),
                    "correo": $('#correo').val(),
                    "numero" : $('#phone').val(),
                    "mensaje" : $('#comentario').val(),
                    "ip" : "168.182.1.0",
                    "date" : new Date()

                   };

            $.ajax({        
                url: urlparam,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify( contactJson ),
                processData: false,
                success: function( data, textStatus, jQxhr ){
                    $('#name').val("");
                    $('#correo').val("");
                    $('#phone').val("");
                    $('#comentario').val("");
                    alert("Gracias por contactarnos");
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log(jqXhr.responseJSON);
                    var contactTemplate = $('#contact-template').html();
                    var contactText = Mustache.render(contactTemplate,jqXhr.responseJSON);
                    $("#contact-container").html(contactText);

                    $('#name').val(contactJson.nombreComp);
                    $('#correo').val(contactJson.correo);
                    $('#phone').val(contactJson.numero);
                    $('#comentario').val(contactJson.mensaje);

                    
                }
            });
    });
    
});