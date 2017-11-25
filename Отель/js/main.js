var hotel = 
{
luxe:5,
standart:10,
bs: 20,
rooms: 35,
name:'Томск',


freeRooms:function(){

	return this.luxe + this.standart + this.bs;
}
}

var hname = document.getElementById("name");
var fnub = document.getElementById("fnum");
var luxe = document.getElementById("luxe");
var luxev = luxe.textContent;
var stan = document.getElementById("stand");
var stanv = stan.textContent;
var bs = document.getElementById("bs");
var bsv = bs.textContent;
var btn = document.getElementById("btn");
var select, value, text;
var i;




hname.textContent = hotel.name;
fnum.textContent = hotel.freeRooms();
luxe.textContent = hotel.luxe;
bs.textContent = hotel.bs;
stand.textContent = hotel.standart;


btn.onclick = function(){

    select = document.getElementById("selectId"); // Выбираем  select по id
    value = select.options[select.selectedIndex].value; // Значение value для выбранного option
    var luxev = luxe.textContent;
    var stanv = stan.textContent;
    var bsv = bs.textContent;




 



if(value=="luxe"){


if(luxev==0)
{
 luxev = 0;
 luxe.style.color = "red"
} else{hotel.luxe = hotel.luxe - 1; 
luxe.textContent = hotel.luxe;
fnum.textContent = hotel.freeRooms();}
}
 

 else if(value=="stan"){
    if(stanv==0)
{
    stanv = 0;
    stan.style.color = "red"
}
else{
 	hotel.standart = hotel.standart - 1; 
    stand.textContent = hotel.standart;
    fnum.textContent = hotel.freeRooms();}

 }

 else if(value=="bs"){
     if(bsv==0)
{
     bsv = 0;
     bs.style.color = "red"
}
 
   else{hotel.bs = hotel.bs - 1; 
    bs.textContent = hotel.bs;
    fnum.textContent = hotel.freeRooms();} 

 }

 else{}

}

close.onclick = function()
{
modal.style.display = "none";
}









