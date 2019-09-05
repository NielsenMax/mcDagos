$(document).ready(function(){
    $("#añadir").click(function (){
        $.ajax({    
            type: "POST",
            data: {
                "number" : $("#number").val(),
                "estate" : "1" // '1' cooking, '2' ready, '0' delivered
            },
            url: "../php/save2JSON.php",             
            dataType: "html",   //expect html to be returned                
            success: function(response){                    
                $("#response").html(response);                 
            },
            error: function() {
                console.log("Error del servidor");
                
            }
        });
    });
    setInterval(function(){
        $.ajax({    
            type: "POST",
            url: "../php/readJSON.php",             
            dataType: "json",          
            success: function(response){  //response contains the json from data.json                  
                Object.keys(response).forEach(function(key) { //loop to every key in response
                    
                    console.log(key, response[key]);
                  
                  });       
            },
            error: function() {
                console.log("Error del servidor");
                
            }
        });
    },5000);
});