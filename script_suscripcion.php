<?php
    date_default_timezone_set('America/Mexico_City');
	
	$correo = $_POST['correo'];
	
	if(isset($correo) && preg_match("/^[A-Za-z0-9][A-Za-z0-9_.-]+[A-za-z]*@[A-Za-z0-9_-]+\.[A-Za-z0-9_.-]+[A-za-z]$/", $correo)){
		if (file_exists("./suscripcion.csv")) {
			if(strlen($correo) <= 35){
				$fp = fopen('./suscripcion.csv', 'a');
				fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo);
				fwrite($fp, "\n");
				fclose($fp);
		
			}
			
		} else {
			$fp = fopen('./suscripcion.csv', 'w');
			fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo);
			fwrite($fp, "\n");
			fclose($fp);
		}
		
		echo "Suscripción correcta, en breve nos ponemos en contacto con usted.";
	}else{
		echo "Suscripción fallida, ingrese un correo valido.";
	}
	
?>