<?php
    date_default_timezone_set('America/Mexico_City');
	
	$correo = $_POST['correo'];
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$mensaje = $_POST['mensaje'];
	
	if(preg_match("/^[A-Za-z0-9][A-Za-z0-9_.-]+[A-za-z]*@[A-Za-z0-9_-]+\.[A-Za-z0-9_.-]+[A-za-z]$/", $correo) && preg_match("/^[a-zA-Z]+$/", $name)  && 
		preg_match("/^[0-9]+$/", $phone) && preg_match("/[a-zA-Z.:;]+$/", $mensaje)){
		
		if (file_exists("./csv/contacto.csv")) {
			if(strlen($correo) >= 15 && strlen($correo) <= 35){
				$fp = fopen('./csv/contacto.csv', 'a');
				fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo . ", nombre:" . $name . ", telefono:" . $phone . ", mensaje:" . $mensaje . ",");
				fwrite($fp, "\n");
				fclose($fp);
		
			}
			
			#file_put_contents('contacto.json', json_encode(array(date("m.d.y"), date("H:i:s"), $correo), JSON_FORCE_OBJECT, JSON_UNESCAPED_UNICODE) . ",", FILE_APPEND);
		} else {
			$fp = fopen('./csv/contacto.csv', 'w');
			fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo . ", nombre:" . $name . ", telefono:" . $phone . ", mensaje:" . $mensaje . ",");
				fwrite($fp, "\n");
			fclose($fp);
		}
		
		echo "Suscripción correcta, en breve nos ponemos en contacto con usted.";
	}else{
		echo "Suscripción fallida, ingrese un correo valido.";
	}
	
?>


