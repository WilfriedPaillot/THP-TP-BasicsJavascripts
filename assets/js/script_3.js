// Script affichant une pyramide de dièses sur une hauteur définit par le nombre d'étages entré par l'utilisateur
stairs = prompt("Salut et bienvenue moussaillon ! \n\n Je suis le script batisseur, combien d'étages veux-tu pour ta prochaine pyramide? ");

for (i = stairs; i >= 0; i--) {
    console.log(" ".repeat(i) + "#".repeat(stairs - i));
}