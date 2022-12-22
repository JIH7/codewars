function sumDigPow(a, b) {
    let out = [];
    for(let i = a; i < b; i++){
      let iArr = i.toString().split('');
      iArr.forEach((n, j) => {iArr[j] = Number(n)});
      let iInt = 0;
      
      iArr.forEach((n, j) => { iInt += Math.pow(n, j + 1) })
      
      if(iInt === i)
        out.push(i)
      
    }
    return out
  }