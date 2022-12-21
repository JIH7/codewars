function strCount(str, letter){
    let total = 0
    str.split('').forEach(n => {if(n === letter){total++}})
    return total
  }