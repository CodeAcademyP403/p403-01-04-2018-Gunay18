var numberInput=document.querySelector("#number");
var submitButton=document.querySelector("#submit");

submitButton.onclick=function(){
    var num=Number(numberInput.value);
    for(var i=1; i<=10; i++){
        console.log(i+ "*" + num + "=" + i*num);
    }
}