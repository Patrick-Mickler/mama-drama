// *Variables*
// Declare a variable, assign it a value, and alert the value

// Create a variable, divide it by 10, and console log the value

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

    let num = 10
    alert(num)
    

    let num2= 100
    dividedNum = num2/10
    console.log(dividedNum)
     

    function multipliesThreeAndAlerts(one ,two, three){
        alert(one*two*three)

    }
    multipliesThreeAndAlerts(1,2,3);

    function takesInFourAddsTheFirstTwoSubtractsTheSecondTwoLogsResult(n1,n2,n3,n4){
        console.log((n1+n2)-n3-n4)

    }
    takesInFourAddsTheFirstTwoSubtractsTheSecondTwoLogsResult(4,3,2,1)

    function takesThreeNumsAndCompares(n1,n2,n3){
        let result = ((100 + n1) - n2)/ n3
         if (result > 25){
            console.log("we Have a winna ")
         }

    }
    takesThreeNumsAndCompares(50,1,2)
    

    function daysOfTheWeek(){
        let day=prompt('Enter a day of the week.')
        if (day.toLowerCase == saturday || sunday){
            alert('weekend')
        }
        else if (day.toLowerCase == monday || tuesday || wednesday || thursday || friday ){
            alert('weekday')
        }
        else {
            alert('that\'s not a day of the week ')
        }
    }
    daysOfTheWeek()