function checkInput()
{
    //create references to the input elements we wish to validate
    var principal = document.getElementById("principal");
    // Get value of amount rounded to 2 digits
    var princival = Math.round(parseFloat(principal.value) * 100) / 100

    //Check if principal field is filled correctly
    if( (princival <= 0) || (isNaN(princival)))
    {
          alert("Please enter valid amount (i.e. positive number)");
          principal.focus()
          return false;
    }
   //If all is well return true.
    return true;
}


function compute()
{
    if (checkInput()){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText="If you deposit " + principal + "\,\n at an interest rate of " + rate + "%\.\n You will receive an amount of " + interest + "\,\n in the year " + year + "\." 
    }
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}        
