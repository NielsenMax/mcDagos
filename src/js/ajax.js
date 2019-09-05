$(document).ready(function(){
    $("#añadir").click(function (){
        $.ajax({    
            type: "POST",
            data: {
                "number" : $("#number").val(),
                "estate" : "1"
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
});