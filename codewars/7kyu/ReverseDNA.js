function DNAStrand(dna){
    let rDna = []
    dna.split('').forEach(n => {
      switch (n){
          case 'A':
            rDna.push('T')
            break;
          case 'T':
            rDna.push('A')
            break;
          case 'C':
            rDna.push('G')
            break;
          case 'G':
            rDna.push('C')
            break;
      }
    })
    return rDna.join('')
  }