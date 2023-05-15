function getNumber(num){
    console.log(num)
   var result = document.getElementById("result");

result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
    // result.value = "0" empty show kre

}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}