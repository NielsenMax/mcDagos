<?php
   $myFile = "../data.json";
   $jsonDecode = array(); // create empty array

  try
  {
	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $jsonDecode = json_decode($jsondata, true);
        
       if(!$jsonDecode){
            $jsonDecode = array();
       }
       
       // Push user data to array
       $jsonDecode[$_POST['number']]=(int)$_POST['estate'];
       
       //Convert updated array to JSON
	   $jsondata = json_encode($jsonDecode, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
	        echo '<p>Data successfully saved</p>';
	    }
	   else 
	        echo "<p>error</p>";

   }
   catch (Exception $e) {
            echo '<p>Caught exception: '.  $e->getMessage(). "</p>";
   }

?>
