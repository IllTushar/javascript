let arr  = [1,2,3,4,5]
let sum =0
for (let index = 0; index < arr.length; index++) {
     console.log(arr[index])
}
/// sum of all array elements..
for(let i =0;i<arr.length;i++)
{
    sum +=arr[i]
}
console.log(sum)
arr.forEach((Element)=>{
    console.log("Square",Element*Element)
})

//convert string into array..
let Name ="tushar"
let value = Array.from(Name)
console.log(value)

//for of loop is sortcut to access array element
for(let i of arr){
    console.log(i)
}

//for in loop is sortcute of to access array index
for(let p in arr){
    console.log(p)
}



