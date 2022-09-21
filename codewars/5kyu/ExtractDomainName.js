function domainName(url){
    
    let newUrl = url;
    //Locate and remove prefixes
    newUrl = newUrl.replace('http://', '')
    newUrl = newUrl.replace('https://', '')
    newUrl = newUrl.replace('www.', '')
    //Trim anything from the first '.' and after
    newUrl = newUrl.split(".")[0];
  
    return newUrl;
  }