<?php
    date_default_timezone_set('America/Mexico_City');
	
	$correo = $_POST['correo'];
	
	if(preg_match("/^[A-Za-z0-9][A-Za-z0-9_.-]+[A-za-z]*@[A-Za-z0-9_-]+\.[A-Za-z0-9_.-]+[A-za-z]$/", $correo)){
		if (file_exists("./suscripcion.csv")) {
			if(strlen($correo) >= 15 && strlen($correo) <= 35){
				$fp = fopen('./suscripcion.csv', 'a');
				fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo . ",");
				fwrite($fp, "\n");
				fclose($fp);
		
			}
			
			#file_put_contents('suscripcion.json', json_encode(array(date("m.d.y"), date("H:i:s"), $correo), JSON_FORCE_OBJECT, JSON_UNESCAPED_UNICODE) . ",", FILE_APPEND);
		} else {
			$fp = fopen('./suscripcion.csv', 'w');
			fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo . ",");
			fwrite($fp, "\n");
			fclose($fp);
		}
		
	}
	
	header("Location: ../index.html");
?>


