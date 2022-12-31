function shortcut (string) {
    string = string.split('')
    let newString = []
    let forbidden = ['a', 'e', 'i', 'o', 'u']
    
    for(let i = 0; i < string.length; i++){
      if(!forbidden.includes(string[i]))
        newString.push(string[i])
    }
    return newString.join('')
  }