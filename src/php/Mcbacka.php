<?php

namespace McDagos;
require_once('McbackaInterface.php');
use McDagos;

class Mcbacka implements McbackaInterface{

    protected $myFile;
    public function __construct($archivo = "../../data.json"){
        $this->myFile = $archivo;
    }
    
    public function loadData($number, $estate){
    $jsonDecode = array(); //array vacio

    try
    {
        //agarra los datos del archivo
        $jsondata = file_get_contents($this->myFile);

        //pasa el archivo json a un array
        $jsonDecode = json_decode($jsondata, true);

        //si el archivo es vacio se crea un array vacio, creo q no hace
        if(!$jsonDecode){
                $jsonDecode = array();
        }
        
        //Pone los datos en el array
        $jsonDecode[$number]=(int)$estate;
        
        //codifica el array en json
        $jsondata = json_encode($jsonDecode, JSON_PRETTY_PRINT);
        
        //escribe el json en el archivo
        if(file_put_contents($this->myFile, $jsondata)) {
            return True;    
        }
        else
            return False;

    }
    catch (Exception $e) {
        return False;
    }

    }

    public function readData(){

    }
}
?>