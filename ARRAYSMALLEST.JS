function SmallestElement(arr) { 
    if (arr.length == 0) { 
        console.log("Array is empty"); 
    } else {
        return arr.reduce(function (a, b) { 
            return (a < b) ? a : b; 
        }); 
    }
}

var arr = [22, 65, 1, 39]; 
console.log("Smallest in given array is " + SmallestElement(arr));