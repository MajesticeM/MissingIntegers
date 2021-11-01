//Version 01
//Create array
var arrayA=[1, 3, 6, 4, 1, 2];
//Sort Out array
var sortedArray=arrayA.sort();
var missingNumbers=[];
var missingNumber=[];
//Console log sorted array
console.log(sortedArray);
//Check if each element is unique
for (let index = 0; index < sortedArray.length; index++) 
{
    //Check if element plus element is equal to next element
    var nextElement=sortedArray[index]+1;
    if (nextElement>1) 
    {
        missingNumbers.push(nextElement);
       
    }
   
   
}
console.log(missingNumbers);

//Version 02
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
var arrayA=A;
//Sort Out array
var sortedArray=arrayA.sort();
var missingNumbers=[];
//Console log sorted array
console.log(sortedArray);
//Check if each element is unique
for (let index = 0; index < sortedArray.length; index++) 
{
    //Check if element plus element is equal to next element
    var nextElement=sortedArray[index]+1;
    if (nextElement<sortedArray[sortedArray.length-1]) 
    {
        missingNumbers.push(nextElement);
       
    }
   
   
}
return missingNumbers;
}