var coll = document.getElementsByClassName("collapsible");
var i;



for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




function GetMowingQuote() {
    let age = document.getElementById("m_age").value;
    let visits = document.getElementById("m_visitsPerMonth").value;
    let months = document.getElementById("m_monthsForQuote").value;
    let rate = 30; //price per individual mowing session

    if(visits*months>=10){ //apply discount for 10 or more sessions
        rate=25;
    }

    let total = rate * visits * months;
   if(age<19){
    alert("Sorry! You are not old enough to aquire our services (must be 19 years of age or older)");
   }else{
    document.getElementById("m_quote").innerHTML = "Your total comes to: $"+total+" at "+visits+" visits per month over "+months+"months";
   }
  }

function GetCommercialMowingQuote() {
  
    let age = document.getElementById("cm_age").value;
    let acres= document.getElementById("cm_acresForQuote").value;
    let visits = document.getElementById("cm_visitsPerMonth").value;
    let months = document.getElementById("cm_visitsPerMonth").value;
    let rate = 125; //price per individual mowing session
   
    if(visits*months>=10){ //apply discount for 10 or more sessions
        rate=115;
    }

    let total = rate * acres * visits * months

    if(age<19){
        alert("Sorry! You are not old enough to aquire our services (must be 19 years of age or older)");
    }else{
        document.getElementById("cm_quote").innerHTML = "Your total comes to: $"+total+" for mowing "+acres+" acres at "+visits+" visits per month over "+months+"months";
    }
}

function GetSnowRemovalQuote() {

    let age = document.getElementById("s_age").value;
    let visits = document.getElementById("s_visitsPerMonth").value;
    let months = document.getElementById("s_monthsForQuote").value;
    let rate = 35; //price per individual plowing session
   
    if(visits*months>=10){ //apply discount for 10 or more sessions
        rate=25;
    }

    let total = rate * visits * months

    if(age<19){
        
        alert("Sorry! You are not old enough to aquire our services (must be 19 years of age or older)");
    }else{
        document.getElementById("s_quote").innerHTML = "Your total comes to: $"+total+" for "+visits+" visits per month over "+months+"months";
    }
} 

function GetCommercialSnowRemovalQuote() {
    
    let age = document.getElementById("cs_age").value;
    let acres= document.getElementById("cs_acresForQuote").value;
    let visits = document.getElementById("cs_visitsPerMonth").value;
    let months = document.getElementById("cs_visitsPerMonth").value;
    let rate = 150; //price per individual plowing seesssion


    if(visits*months>=10){ //apply discount for 10 or more sessions
        rate=140;
    }


    let total = rate * acres * visits * months




    if(age<19){
        alert("Sorry! You are not old enough to aquire our services (must be 19 years of age or older)");
    }else{
        document.getElementById("cs_quote").innerHTML = "Your total comes to: $"+total+" for plowing "+acres+" acres at "+visits+" visits per month over "+months+"months";
    }
}

