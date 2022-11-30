<?php
    date_default_timezone_set('America/Mexico_City');
	
	$correo = $_POST['correo'];
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$mensaje = $_POST['mensaje'];
	
	if((isset($correo) && preg_match("/^[A-Za-z0-9][A-Za-z0-9_.-]+[A-za-z]*@[A-Za-z0-9_-]+\.[A-Za-z0-9_.-]+[A-za-z]$/", $correo)) && 
		(isset($name) && preg_match("/^[a-zA-Z ]+$/", $name)) && (isset($phone) && preg_match("/^[0-9]+$/", $phone)) && 
		(isset($mensaje) && preg_match("/[a-zA-Z.:;]+$/", $mensaje))){
		
		if (file_exists("./contacto.csv")) {
			if(strlen($correo) <= 35 && strlen($name) <= 35 && strlen($phone) <= 12 && strlen($mensaje) <= 320){
				$fp = fopen('./contacto.csv', 'a');
				fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo . ", nombre:" . $name . ", telefono:" . $phone . ", mensaje:" . str_replace(",", " ", $mensaje));
				fwrite($fp, "\n");
				fclose($fp);
		
			}
			
		} else {
			$fp = fopen('./contacto.csv', 'w');
			fwrite($fp, "fecha:" . date("y:m:d") . ", hora:" . date("H:i:s") . ", correo:" . $correo . ", nombre:" . $name . ", telefono:" . $phone . ", mensaje:" . str_replace(",", " ", $mensaje));
				fwrite($fp, "\n");
			fclose($fp);
		}
		
		echo "Hemos recibido sus datos, en breve nos ponemos en contacto con usted.";
	}else{
		echo "Error, ingrese datos validos.";
	}
	
?>