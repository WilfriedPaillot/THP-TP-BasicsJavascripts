// Coder un script qui va fonctionner de la façon suivante : pour s'adresser au bot, un fenêtre de prompt va s'ouvrir. 
// L'utilisateur pourra y saisir sa phrase et le bot répondra via une impression en console.

// Les règles de conversations du bot sont les suivantes (rangées par priorité - si deux règles sont vraies, seule la plus haute dans la liste s'applique) :
  // Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
  // Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
  // Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
  // Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
  // Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;


// L'entrée sera une chaîne de caractères saisie par l'utilisateur

// Si l'entrée se termine par "?", la sortie sera "Ouais Ouais..."
// Si l'entrée est en majscules, la sortie sera "Pwa, calme-toi..."
// Si l'entrée contient le mot "Fortnite", la sortie sera "on s' fait une partie soum-soum ?"
// Si l'entrée est vide, la sortie sera "t'es en PLS ?"
// Pour tout autre entrée, la sortie sera "balek."

// La sortie sera une chaîne de caractères affichée dans la console

let input = prompt("Entrez votre phrase");
console.log(input);

switch (true) {
  case input === '' :
    console.log("t'es en PLS ?");
    break;
    case input.toUpperCase() === input :
      console.log("Pwa, calme-toi...");
      break;
    case input.includes('Fortnite') :
      console.log("on s' fait une partie soum-soum ?");
      break;
    case input.endsWith('?'):
      console.log("Ouais Ouais...");
      break;
    default :
      console.log("balek.");
}
