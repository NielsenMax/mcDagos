<?php

namespace McDagos;
require_once('Mcbacka.php');
use McDagos;

$mcData = new Mcbacka();

if($mcData->loadData($_POST['number'], $_POST['estate'])){
     echo '<p>Pedido gurdado</p>';
}else{
     echo '<p>Error</p>';
}

?>
