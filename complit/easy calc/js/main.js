var col; 
var price;
var rez; 

function ala(){
col = document.getElementById("col").value;
col = parseInt(col);
price = document.getElementById("price").value;
price = parseInt(price);
rez = col+price;
document.getElementById("text").innerHTML = rez
}

function alam(){
col = document.getElementById("col").value;
col = parseInt(col);
price = document.getElementById("price").value;
price = parseInt(price);
rez = col-price;
document.getElementById("text").innerHTML = rez
}

function alama(){
col = document.getElementById("col").value;
col = parseInt(col);
price = document.getElementById("price").value;
price = parseInt(price);
rez = col*price;
document.getElementById("text").innerHTML = rez
}

function alamam(){
col = document.getElementById("col").value;
col = parseInt(col);
price = document.getElementById("price").value;
price = parseInt(price);
rez = col/price;
document.getElementById("text").innerHTML = rez
}



