function abbrevName(name){

    name = name.split(' ')
    name.forEach((n,i) => name[i] = n.charAt(0).toUpperCase())
    return `${name[0]}.${name[1]}`
  }