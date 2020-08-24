var el_down = document.getElementById("guests"); 
  

function generateP() { 
    //strings of characters from which the password can be generated from
    var pass = ''; 
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
            'abcdefghijklmnopqrstuvwxyz0123456789@#$!&'; 
    //Creates function for generating password
    for (i = 1; i <= 12; i++) { 
        var char = Math.floor(Math.random() 
                    * str.length + 1); 
    
        pass += str.charAt(char) 
    } 
      
    return pass; 
} 

function retrievePassword() { 
    el_down.innerHTML = generateP();
     
} 