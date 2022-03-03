// En entrée, une saisie de l'utilisateur est attendue.
// Cette saisie est une chaîne de caractères représentant un ARN
// Cet ARN est composé d'une suite de codons
// Chaque codon est une suite de trois lettres
// Chaque codon représente un acide aminé
  // UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
  // CCU ou CCC ou CCA ou CCG => Proline
  // UUA ou UUG => Leucine
  // UUU ou UUC => Phénylalanine
  // CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
  // UAU ou UAC => Tyrosine
// L'entrée saisie sous la forme CCGUCGUUGCGCUACAGC sera analysée 
// et le résultat affiché dans la console sera : Proline-Sérine-Leucine-Arginine-Tyrosine-Sérine

const codons = [
  { name: 'Sérine', codons: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'] },
  { name: 'Proline', codons: ['CCU', 'CCC', 'CCA', 'CCG'] },
  { name: 'Leucine', codons: ['UUA', 'UUG'] },
  { name: 'Phénylalanine', codons: ['UUU', 'UUC'] },
  { name: 'Arginine', codons: ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'] },
  { name: 'Tyrosine', codons: ['UAU', 'UAC'] }
]

input = prompt("Entrez votre séquence d'ARN");
output = [];

var splited = input.match(/.{1,3}/g);
splited.forEach(codon => {
  codons.forEach(element => {
    if (element.codons.includes(codon)) {
      output.push(element.name);
    }
  });
});
console.log(output.join('-'));

