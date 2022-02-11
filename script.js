function checkInput()
{
    //create references to the input elements we wish to validate
    var principal = parseFloat(document.getElementById("principal").value);
    principal = Math.round(principal * 100) / 100
    alert(typeof principal )

    //Check if principal field is filled correctly
    if(principal <= 0)
    {
          alert("Please enter valid amount (i.e. positive number)");
          return false;
    }
   //If all is well return true.
    return true;
}


function compute()
{
    checkInput()
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerText="If you deposit " + principal + "\,\n at an interest rate of " + rate + "%\.\n You will receive an amount of " + interest + "\,\n in the year " + year + "\." 
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}        
