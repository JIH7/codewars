function order(words){
    words = words.split(' ')
    let newWords = []
    for(let i = 0; i < words.length; i++){
      for(let j = 0; j < words.length; j++){
        if(words[j].indexOf(i + 1) !== -1){
          newWords.push(words[j])
        }
      }
    }
    newWords = newWords.join(' ')
    return newWords
  }