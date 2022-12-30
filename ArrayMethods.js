let arr = [1,2,3,4,54]

//new Line comment...from the git krakenm
// convert array into string....
let num =  arr.toString()
console.log(num)


//remove the last element in array...
let r = arr.pop()
console.log(arr,r)


//insert the elememt at last..
let m = arr.push(34)
console.log(arr)


//shift the first element in array...
let p = arr.shift()
console.log(arr,p) 


// unshift the element in array...
let q = arr.unshift(1)
console.log(arr,q)


// concatination of the two array...
let arr1 = [5,6,7,8,9]
let b = arr.concat(arr1)
console.log(b)


// delete method 
// Note delete operation cannot change the length of array...
let n = delete arr[3]
console.log(arr,n)


//short the array
let arr2 = [11,2,1,5,3,89,10]
arr2.sort()
console.log(arr2)


//reverse sort array
const desending= (a,b)=>{
    return b-a
}
arr2.sort(desending)
console.log(arr2)


//reverse function..
arr2.reverse()
console.log("Reverse: ",arr2)


//slice the elements...
let h=arr1.slice(1,3)
console.log(h)


//splice element splice(starting point, no of deleted elements ,insert the element,insert the element,....)
arr2.splice(2,3,1231,1234,9010)
console.log(arr2)


