function countSmileys(arr) {
    let total = 0;
    
    for(let i = 0; i < arr.length; i++){
      if(arr[i].charAt(0) == ':' || arr[i].charAt(0) == ';')
        {
          if(arr[i].charAt(1) == '-' || arr[i].charAt(1) == '~'){
            if(arr[i].charAt(2) == ')' || arr[i].charAt(2) == 'D')
              {total++;}
            }
          else if(arr[i].charAt(1) == ')' || arr[i].charAt(1) == 'D'){
            total++;
          }
        }
  
    }
    
    return total;
  }