function deleteNth(arr,n){
    let newArr = []
    arr.forEach(x => {
      if(newArr.filter(element => element === x).length < n){
        newArr.push(x)
      }})
    return newArr
  }