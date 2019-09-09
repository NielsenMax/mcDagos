<?php

namespace McDagos;
require_once('Mcbacka.php');
use McDagos;

$mcData = new Mcbacka();

function nombre($i){ ///'1' cooking, '2' ready, '0' delivered
	if($i == 1){
		return "Cocinando";
	}
	if($i == 2){
		return "Listo";
	}
	if($i == 0){
		return "Entregado";
	}
	
	
}


if($_POST['number']){
     if($mcData->loadData($_POST['number'], $_POST['estate'])){
          echo "<p style='color:green'> Orden ". $_POST['number'] . " => " . nombre( $_POST['estate'] ) . "</p>";
     }else{
          echo "<p style='color:red'>Error</p>";
     }
}

?>
