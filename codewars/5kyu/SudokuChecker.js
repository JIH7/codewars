function doneOrNot(board){
    //Check rows
    for(let i = 0; i < 9; i++){
      let arr = board[i];
      let sum = 0;
      
      for(let j = 0; j < arr.length; j++){
        sum += arr[j];
        
        //Check for duplicates
        for(let k = 0; k < arr.length; k++)
        {
            if(j != k && arr[j] == arr[k])
              {
                return "Try again!";
              }
        }
      }
      if(sum != 45){
          return "Try again!";
      }
    }
    
    //Check columns
    for(let i = 0; i < 9; i++){
      //Create column array from data at index i
      let arr = [];
      for(let j = 0; j < 9; j++){
        arr.push(board[j][i]);
      }
      
      let sum = 0;
      for(let j = 0; j < arr.length; j++){
        sum += arr[j];
        //Check for duplicates
        for(let k = 0; k < arr.length; k++){
          if(j != k && arr[j] == arr[k]){
            return "Try again!";   
          }
        }
      }
      
      if(sum != 45){
        return "Try again!";
      }
    }
    
    //Nested for loop to check regions
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let arr = [];
        
        //Offset within original array
        let xOff = 0;
        let yOff = 0;
        
        if(i == 1)
          xOff = 3;
        else if(i == 2)
          xOff = 6;
        
        if(j == 1)
          yOff = 3;
        else if(j == 2)
          yOff = 6;
        
        //Build array to represent regions
        for(let x = 0; x < 3; x++){
          for(let y = 0; y < 3; y++){
            arr.push(board[x + xOff][y + yOff]);
          }
        }
        let sum = 0;
        
        for(let z = 0; z < arr.length; z++){
          sum += arr[z];
          
          for(let k = 0; k < arr.leng; k++){
            if(k != z && arr[k] == arr[z]){
              return "Try again!"
            }
          }
        }
        if(sum != 45)
          return "Try again!";
      }
    }  
    return "Finished!";
  }