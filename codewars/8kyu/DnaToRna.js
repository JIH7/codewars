function DNAtoRNA(dna) {
    dna = dna.split('')
    let rna = []
    
    for(let i = 0; i < dna.length; i++){
      if(dna[i] === 'T')
        rna.push("U")
      else
        rna.push(dna[i])
    }
    
    return rna.join('')
  }