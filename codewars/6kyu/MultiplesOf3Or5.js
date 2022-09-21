function solution(number)
{
    let buffer = 0;
    if(number > 0)
    {
    for (let i = 0; i < number; i++)
      {
        let isFive = false;
         if (i % 5 === 0)
           {
             buffer += i;
             isFive = true;
           }
         if (i % 3 === 0 && isFive === false)
           {
             buffer += i;
           }
      }
      return buffer;
    }
    else
    {
        return 0;
    }
}