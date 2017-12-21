

// http://192.168.201.102/loteria/index.php

$(document).ready( function () {


	$( "#button" ).click( function() {

		/* $.get("http://192.168.201.102/loteria/index.php", function ( data ){ */

			$.ajax({

				method: "GET",
				url: "http://192.168.201.102/loteria/"
			})

			    .done( function( response ) {


			    	var respuesta = JSON.parse( response );


			    	$ ( "#premio" ).html( "Enhorabuena, " + respuesta.nombre + ", has ganado con el numero" + respuesta.numero );
			    });		


// parsear y seleccionar nombre y numero

		/* $( "nuevdata" ).par(data)

			$( "#rBox" ).html (nuevdata);
		})
		

	});
}); */



