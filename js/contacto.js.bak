$(document).ready(function () {

    $(document).on('click', '#main-form-b', function(e) {
        e.preventDefault();

        var urlparam = "script_contacto.php";
        
        //agregar las validaciones
        var contactJson = { "name": $('#name').val(),
                    "correo": $('#correo').val(),
                    "phone" : $('#phone').val(),
                    "mensaje" : $('#comentario').val()
                   };

            $.ajax({        
                url: urlparam,
                type: 'post',
                data: contactJson,
                success: function( data, textStatus, jQxhr ){
                    $('#name').val("");
                    $('#correo').val("");
                    $('#phone').val("");
                    $('#comentario').val("");
                    alert(data);
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