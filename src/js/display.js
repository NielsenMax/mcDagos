$(document).ready(function(){
    cookingNew = [];
    cookingOld = [];
    readyNew = [];
    readyOld = [];
    function diffArray(pedidosA,pedidosB){
        eliminables = [];
        agregables = [];
        pedidosA.forEach(
            function (pa){
                if(pedidosB.indexOf(pa)<0){
                    eliminables.push(pa);
                }
            }
        );
        pedidosB.forEach(
            function (pb){
                if(pedidosA.indexOf(pb)<0){
                    agregables.push(pb);
                }
            }
        );
        return {agregar: agregables, eliminar: eliminables};
    }
    setInterval(function(){
        $.ajax({    
            type: "POST",
            url: "../php/readJSON.php",             
            dataType: "json",          
            success: function(response){  //response contains the json from data.json                  
                // output = ""; 
                // Object.keys(response).forEach(function(key) { //loop to every key in response
                //     //console.log(key, response[key]);
                //     // <div class="container"> 
                //     //     <div class="mipene">42235</div>
                //     //     <div><img src="/mcDagos/13-132538_burger-svg-png-icon-free-download-545640-clip.png" style="width:auto;height:100px" alt="Lights"></div>
                //     // </div>  
                //     if(response[key] == 1){
                //         output = output + '<div class="container"> <div class="mipene">' + key.toString() +'</div><div><img src="/mcDagos/13-132538_burger-svg-png-icon-free-download-545640-clip.png" style="width:auto;height:100px" alt="Lights"></div></div>';
                //     } else if (response[key] == 2){
                //         output = output + '<div class="container"> <div class="mipene">' + key.toString() +'</div><div>lista</div></div>';
                //     }
                //});  
                
                Object.keys(response).forEach(function(key) {
                    if(response[key] == 1){
                        cookingNew.push(key);
                    }else if(response[key] == 2){
                        readyNew.push(key);
                    }
                });
                dataCooking = diffArray(cookingOld, cookingNew);
                dataReady   = diffArray(readyOld, readyNew);
                
                //hace cosas alejo
                dataCooking.agregar.forEach(
                    function (key){
                        $( ".containerg" ).append( '<div class="container" id="c'.concat( key.toString(), '"><div class="mipene">', key.toString(),' Cocinando</div><div><img src="../Images/hamburguesa.png" style="width:auto;height:100px" alt="Lights"></div></div> ' ));
                    }

                );
                dataCooking.eliminar.forEach(
                    function (key){
                        $( "#c"+ key.toString() ).fadeOut(2000);
                        setTimeout(function(){
                            $( "#c"+ key.toString() ).remove();},2000);
                    }
                );
                dataReady.agregar.forEach(
                    function (key){
                        $( ".containerg" ).prepend( '<div class="container" id="r'.concat(key.toString(), '"><div class="mipene">', key.toString() ,' Listo</div><div><img src="../Images/hamburguesa.png" style="width:auto;height:100px" alt="Lights"></div></div> ' ));
                    }
                );
                dataReady.eliminar.forEach(
                    function (key){
                        $( "#r"+ key.toString() ).fadeOut(2000);
                        setTimeout(function(){
                            $( "#r"+ key.toString() ).remove();},2000);
                    }
                );
                cookingOld = cookingNew;
                cookingNew = [];
                readyOld = readyNew;
                readyNew = [];
            },
            error: function() {
                console.log("Error del servidor");
                
            }
        });
    },1000);
});