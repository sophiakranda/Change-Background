// Question 1.
let points = ["12", "4", "10", "2", "1", "20", "84"];
let sortedPoint = points.sort(function(a,b){
    return a-b;
});
console.log(sortedPoint);

//Question 2.
// console.log(sortedPoint[0]);
console.log(MinArray(points));
function MinArray(arr){
    return Math.min.apply(null,arr)
}

//Question 3.
console.log(MaxArray(points));
function MaxArray(arr){
    return Math.max.apply(null,arr)
}
// End of assignment


console.log(Math.floor(Math.random()*10));
