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
    $("#eliminar").click(function (){
        $.ajax({    
            type: "POST",
            data: {
                "number" : $("#number").val(),
                "estate" : "0" // '1' cooking, '2' ready, '0' delivered
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
    $("#lista").click(function (){
        $.ajax({    
            type: "POST",
            data: {
                "number" : $("#number").val(),
                "estate" : "2" // '1' cooking, '2' ready, '0' delivered
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
	$(document).on('keypress', function(k){
    	if(k.which == 13){
			$.ajax({    
		        type: "POST",
		        data: {
		            "number" : $("#number").val()
		        },
		        url: "../php/readOneJSON.php",             
		        dataType: "html",   //expect html to be returned                
		        success: function(response){  
					console.log(response);                  
		            if(response == 1){
						$('#lista').click();
					}else if(response == 2){
						$('#eliminar').click();
					}else{
						$('#añadir').click();
					}               
		        },
		        error: function() {
		            console.log("Error del servidor");
		            
		        }
		    });
        }            
    });
});
