function stray(numbers) {
  let rep
  if(numbers[0] === numbers[1] || numbers[0] === numbers[2])
    rep = numbers[0]
  else
    return numbers[0]
  
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] !== rep)
      return numbers[i]
  }
}