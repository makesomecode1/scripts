var modal = document.getElementById("modal");
var rez = document.getElementById("rez");
var close = document.getElementById("close");
var namee = document.getElementById("name");
var nnv = namee.value;
var phone = document.getElementById("phone");
var phoo = phone.value;
var btn = document.getElementById("btn");


rez.onclick = function(){
modal.style.display = "block";
}

close.onclick =function(){
modal.style.display = "none";
}

namee.onblur = function()
{var namee = document.getElementById("name");
var nnv = namee.value;

	if(nnv.length<=0) {


    namee.style.border = "2px solid red";
    namee.placeholder = "Вы не ввели имя!";
    btn.style.display = "none"

}
else if(nnv.length>0)
{namee.style.border = "2px solid green";
}

else{}
}



phone.onblur = function(){
	var phone = document.getElementById("phone");
    var phoo = phone.value;

    if(phoo.length>8){
    	phone.style.border = "2px solid green";
        btn.style.display = "block"
    }

    else if(phoo.length<=0){
    phone.style.border = "2px solid red";
    phone.placeholder = "Вы не ввели номер!";
    btn.style.display = "none"
    }

    else if(isNaN.phoo)
    {
    phone.style.border = "2px solid red";
    phone.placeholder = "Вводите только цифры!";
    btn.style.display = "none"
    }

    else if (phoo.length<=8) {
    phone.style.border = "2px solid red";
    phone.placeholder = "Номер слишком короткий!";
    btn.style.display = "none"
    }

   
    else{} 

    }




