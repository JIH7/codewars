function high(x){
    x = x.toLowerCase().split(' ')
    let totals = []
    x.forEach((n,i) => {
      totals.push(wordTotal(n))
    })
    return x[totals.indexOf(Math.max(...totals))]
  }
  
  function wordTotal(n){
    let total = 0
    for(let i = 0; i < n.length; i++){
      total += n.charCodeAt(i) - 96
    }
    return total
  }