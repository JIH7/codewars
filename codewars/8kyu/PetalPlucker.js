function howMuchILoveYou(nbPetals) {
    while(nbPetals > 6)
      nbPetals -= 6
    switch(nbPetals){
      case 1:
        return "I love you"
        break
      case 2:
        return "a little"
        break
      case 3:
        return "a lot"
        break
      case 4:
        return "passionately"
        break
      case 5:
        return "madly"
        break
      case 6:
        return "not at all"
        break
    }
}