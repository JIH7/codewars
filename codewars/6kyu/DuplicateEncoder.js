function duplicateEncode(word){
  
    let output = "";
  
    for(let i = 0; i < word.length; i++){
      let char = word.charAt(i);
      let charIsDupe = false;
      
      for(let j = 0; j < word.length; j++){
        if(j != i && char.toLowerCase() === word.charAt(j).toLowerCase()) {
          charIsDupe = true;
        }
      }
      if(charIsDupe) {
        output += ")";
      }
      else {
        output += "(";
      }
      
    }
  
    return output;
}