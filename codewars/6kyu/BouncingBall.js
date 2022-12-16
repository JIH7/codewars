function bouncingBall(h,  bounce,  window) {
    if(!(h > 0 && h > window && (bounce > 0 && bounce < 1))){
      return -1
    }
    let tot = -1
    for(let height = h; height > window; height *= bounce){
      tot += 2
    }
    return tot
  }