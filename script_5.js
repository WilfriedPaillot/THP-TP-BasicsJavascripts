const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Script qui affichera dans la console les questions suivantes et leurs réponses :
//  - Est-ce que tous les livres ont été au moins empruntés une fois ?
books.every(book => book.rented > 0) ? console.log('Tous les livres ont été au moins empruntés une fois') : console.log('Certaines références n\'ont pas été empruntées');


sortedBooksByRented = books.sort((a, b) => a.rented - b.rented);
//  - Quel est livre le plus emprunté ?
console.log("Livre le plus emprunté :");
console.log(sortedBooksByRented[sortedBooksByRented.length - 1].title);

//  - Quel est le livre le moins emprunté ?
console.log("Livre le moins emprunté :");
console.log(sortedBooksByRented[0].title);

//  - Trouve le livre avec l'ID: 873495 ;
console.log("Livre avec l'ID: 873495 :");
console.log(books.find(book => book.id === 873495));

//  - Supprime le livre avec l'ID: 133712 ;
console.log("Suppression du livre avec l'ID: 133712 :");
cleanedListOfBooks = books.filter(book => book.id !== 133712);

//  - Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("Liste des livres triée par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé) :");
newBooksList = cleanedListOfBooks.sort((a, b) => a.title.localeCompare(b.title));
for (let index = 0; index < newBooksList.length; index++) {
  console.log(newBooksList[index].title);
}
