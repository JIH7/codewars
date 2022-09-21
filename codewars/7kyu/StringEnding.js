function solution(str, ending){
  
    const endLength = ending.length;
    const strSlice = str.substring(str.length - endLength);
    
    if(strSlice === ending)
      {
        return true;
      }
    else
      {
        return false;
      }
  }