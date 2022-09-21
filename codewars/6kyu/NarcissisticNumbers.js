function narcissistic(value) {
  
    let valueArray = value.toString().split('').map(Number)
    
    const length = valueArray.length
    
    let sum = 0;
    
    for (let i = 0; i < length; i++)
      {
        sum += Math.pow(valueArray[i], length)
      }
  
    return (sum === value)
    
  }