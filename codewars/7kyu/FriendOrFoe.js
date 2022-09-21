function friend(friends){
    let out = [];
    let outIndex = 0;
    
    for(i = 0; i < friends.length; i++){
      
      if(friends[i].length === 4){
        out[outIndex] = friends[i];
        outIndex++;
      }
    }
    
    return out;
  }