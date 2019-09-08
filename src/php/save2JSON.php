<?php

namespace McDagos;
require_once('Mcbacka.php');
use McDagos;

$mcData = new Mcbacka();
if($_POST['number']){
     if($mcData->loadData($_POST['number'], $_POST['estate'])){
          echo "";
     }else{
          echo '<p>Error</p>';
     }
}

?>
