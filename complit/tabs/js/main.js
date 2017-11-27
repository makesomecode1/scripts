var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var first = document.getElementById("first");
var sec = document.getElementById("sec");
var tre = document.getElementById("tre");

tab1.onclick = function()
{
    tab1.style.background = "black";
    tab2.style.background = "lightgray";
    tab3.style.background = "lightgray";
    first.style.display = "block"; 
    sec.style.display = "none"; 
    tre.style.display = "none"; 
}

tab2.onclick = function()
{
    tab1.style.background = "lightgray";
    tab2.style.background = "black";
    tab3.style.background = "lightgray";
    sec.style.display = "block";
    first.style.display = "none"; 
    tre.style.display = "none"; 
}

tab3.onclick = function()
{
    tab1.style.background = "lightgray";
    tab2.style.background = "lightgray";
    tab3.style.background = "black";
    sec.style.display = "none";
    first.style.display = "none"; 
    tre.style.display = "block"; 
}