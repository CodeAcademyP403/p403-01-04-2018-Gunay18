var nums = [1,2,3,4,5,10];

function multiply(array){
    var result=1;
    for(var i=0; i<array.length; i++){
        result*=array[i];
    }
    return result;
}
console.log("Multiplication of numbers in the given array is equal to "+multiply(nums)+".");

function squareSum (array){
    var result=0;
    for(var i=0; i<array.length; i++){
        result+=array[i]*array[i];
    }
    return result;
}
console.log("Sum of squares of numbers in the given array is equal to "+squareSum(nums)+ ".");

function sumEvenNumbers (array){
    var result=0;
    for(var i=0; i<array.length; i++){
        if(array[i]%2==0){
            result+=array[i];
        }
    }
    return result;
}
console.log("Sum of even numbers in the given array is equal to "+sumEvenNumbers(nums)+".");