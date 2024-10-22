//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function takesArry(nums){
    let num =[]
    nums.forEach(n => {
        if (n % 2 === 0 ){
            num.push(n)
            
        }
    })
       
        return num
}
console.log(takesArry([1,2,3,4,5,6]))