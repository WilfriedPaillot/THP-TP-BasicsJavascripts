// Créé un script qui définira la fonction factorielle et qui calculera la factorielle du nombre entré par l'utilisateur

number = prompt("Quel est le nombre dont vous voulez calculer la factorielle?");

if (number < 0) {
    console.log("Le nombre doit être positif");
} else if (number == 0) {
    console.log("Le résultat est 1");
} else {
    result = 1;
    for (i = 1; i <= number; i++) {
        result = result * i;
    }
    console.log("Le résultat est " + result);
}