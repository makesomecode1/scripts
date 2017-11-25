var btn = document.getElementById("sub"); 
var namee = document.getElementById("text");
var phone = document.getElementById("pho");
var messagee = document.getElementById("messageName");
var messageee = document.getElementById("phoneName");
var le = document.getElementById("phoneLength");
var nana = document.getElementById("nana");


namee.onblur = function(){
    var messagee = document.getElementById("messageName");
     var mm = document.getElementById("text").value;
if(mm.length == 0){
    messagee.style.display = "block"; 
    namee.style.border = "1px solid red"; 
    messagee.style.opacity = "1";
}
else {}
}

namee.onfocus = function(){
    messagee.style.display = "none"; 

}



phone.onblur = function(){
    var messageee = document.getElementById("phoneName");
     var mmm = document.getElementById("pho").value;
if(mmm.length == 0){
    messageee.style.display = "block"; 
    phone.style.border = "1px solid red"; 
    
}

else if (isNaN(mmm))
{
nana.style.display = "block"; 
phone.style.border = "1px solid red"; 
}

else if(mmm.length <= 8)
{
le.style.display = "block"; 
phone.style.border = "1px solid red"; 
}


else {}
}

phone.onfocus = function(){
    messageee.style.display = "none"; 
    le.style.display = "none"; 

}
