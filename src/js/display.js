$(document).ready(function(){
    setInterval(function(){
        $.ajax({    
            type: "POST",
            url: "../php/readJSON.php",             
            dataType: "json",          
            success: function(response){  //response contains the json from data.json                  
                output = ""; 
                Object.keys(response).forEach(function(key) { //loop to every key in response
                    //console.log(key, response[key]);
                    // <div class="container"> 
                    //     <div class="mipene">42235</div>
                    //     <div><img src="/mcDagos/13-132538_burger-svg-png-icon-free-download-545640-clip.png" style="width:auto;height:100px" alt="Lights"></div>
                    // </div>  
                    if(response[key] == 1){
                        output = output + '<div class="container"> <div class="mipene">' + key.toString() +'</div><div><img src="/mcDagos/13-132538_burger-svg-png-icon-free-download-545640-clip.png" style="width:auto;height:100px" alt="Lights"></div></div>';
                    } else if (response[key] == 2){
                        output = output + '<div class="container"> <div class="mipene">' + key.toString() +'</div><div>lista</div></div>';
                    }
                });  
                $("#display").html(output);
            },
            error: function() {
                console.log("Error del servidor");
                
            }
        });
    },5000);
});