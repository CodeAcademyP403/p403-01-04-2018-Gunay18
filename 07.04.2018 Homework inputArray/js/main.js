var numberInput=document.querySelector("#number");
var submitButton=document.querySelector("#submit");
var numbers=[];
var max;

submitButton.onclick=function(){
    var num=Number(numberInput.value);
    numbers.push(num);
    if(numbers.length==1){
        max=numbers[0];
    }
    if(num>max){
        max=num;
    }
    console.log(numbers);
    console.log("Maximum number is "+max+".");
}
