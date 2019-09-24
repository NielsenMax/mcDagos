<?php

namespace McDagos;
require_once('Mcbacka.php');
use McDagos;

$mcData = new Mcbacka();

$resp = json_decode($mcData->readData(), true);

echo $resp[$_POST['number']];

?>
