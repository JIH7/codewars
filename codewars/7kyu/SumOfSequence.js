function getSum( a,b )
{
  let in1
  let in2
  
  if(a === b)
    return a
  else if(a < b){
    in1 = a
    in2 = b
  }
  else{
    in1 = b
    in2 = a
  }
  let total = 0
  for(let i = in1; i <= in2; i++)
    total += i
  return total
}