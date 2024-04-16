function LargestElement(arr) { 
    if (arr.length == 0) { 
        console.log("Array is empty"); 
    } 
  else{
    return arr.reduce(function (a, b) { 
        return (a > b) ? a : b}); 
  
}} 
arr = [22, 65, 1, 39]; 
console.log("Largest in given array is " + LargestElement(arr));

