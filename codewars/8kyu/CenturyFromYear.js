function century(year) {
    let cent = 1
    if(year > 100)
      cent = Math.floor((year - 1) / 100) + 1
    return cent
  }