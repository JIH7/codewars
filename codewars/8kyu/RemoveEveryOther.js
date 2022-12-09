function removeEveryOther(arr){
    let newArr = []
    arr.forEach((n,i) => {
      if(i % 2 === 0){
        newArr.push(n)
      }
    })
    return newArr
  }