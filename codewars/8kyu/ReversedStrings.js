function solution(str){
    let result = "";
    
    for(i = 0; i <= str.length; i++){
        result += str.charAt(str.length - i);
      }
    return result;
  }