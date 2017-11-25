var hotel = 
{
luxe:5,
standart:10,
bs: 20,
rooms: 35,
name:'Florida',


freeRooms:function(){

	return this.luxe + this.standart + this.bs;
}
}

var hname = document.getElementById("name");
var fnub = document.getElementById("fnum");
var luxe = document.getElementById("luxe");
var stan = document.getElementById("stand");
var bs = document.getElementById("bs");
var btn = document.getElementById("btn");
var select, value, text;
var modal = document.getElementById("modal");
var close = document.getElementById("close");




hname.textContent = hotel.name;
fnum.textContent = hotel.freeRooms();
luxe.textContent = hotel.luxe;
bs.textContent = hotel.bs;
stand.textContent = hotel.standart;


btn.onclick = function(){

    select = document.getElementById("selectId"); // Выбираем  select по id
    value = select.options[select.selectedIndex].value; // Значение value для выбранного option

if(hotel.bs<=0, hotel.standart<=0, hotel.luxe<=0){
    alert("Данные номера закончились")
 } 

else if(value=="luxe"){
    hotel.luxe = hotel.luxe - 1; 
    luxe.textContent = hotel.luxe;
    fnum.textContent = hotel.freeRooms();
    modal.style.display = "block";
    
}
 else if(value=="stan"){
 	hotel.standart = hotel.standart - 1; 
    stand.textContent = hotel.standart;
    fnum.textContent = hotel.freeRooms();
    modal.style.display = "block";
 }

 else if(value=="bs"){
    hotel.bs = hotel.bs - 1; 
    bs.textContent = hotel.bs;
    fnum.textContent = hotel.freeRooms();
    modal.style.display = "block";
 }

 else{}

}

close.onclick = function()
{
modal.style.display = "none";
}









