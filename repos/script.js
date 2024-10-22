const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump > mpg * fuelLeft){
      return false
    }else {
      return true
    }
    };