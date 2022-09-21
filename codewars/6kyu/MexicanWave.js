function wave(str){
    let wave = []
    
    for(let i = 0; i < str.length; i ++){
      let char = str.charAt(i)
      
      let splitStr1 = str.slice(0, i)
      let splitStr2 = str.slice(i + 1)
      
      let newStr = splitStr1 + char.toUpperCase() + splitStr2
      
      if(char != " ")
        wave.push(newStr)
    }
    
    return wave
  }