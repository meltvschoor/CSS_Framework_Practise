function addNumbers()    {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    if(number1 < 0 || number1 > 100 || number2 < 0 || number2 > 100){
        document.getElementById("msg").style.display = "inline";
        document.getElementById("answer").value = "";
    
    } else  {
        document.getElementById("msg").style.display = "none";
        document.getElementById("answer").value = number1 + number2;
    }
}