const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Script qui affichera dans la console les questions suivantes et leur réponses:
//  - Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
console.log("Entrepreneurs nés dans les années 70 :");
bornAfter70 = entrepreneurs.filter(function (entrepreneur) {
    console.log(entrepreneur.year > 1970 ? entrepreneur.first + " " + entrepreneur.last : "" );
});

//  - Sors une array qui contient le prénom et le nom des entrepreneurs
console.log("Prénoms et noms des entrepreneurs :");
output = entrepreneurs.map(function (entrepreneur) {
    console.log(entrepreneur.first + " " + entrepreneur.last);
});

//  - Quel âge aurait chaque inventeur aujourd'hui ?
const actualYear = (new Date()).getFullYear();
console.log("Age des entrepreneurs :");
output = entrepreneurs.map(function (entrepreneur) {
    console.log(entrepreneur.first + " " + entrepreneur.last + " aurait " + (actualYear - entrepreneur.year) + " ans aujourd'hui");
});

//  - Trie les entrepreneurs par ordre alphabétique du nom de famille
console.log("Entrepreneurs par ordre alphabétique du nom de famille :");
output = entrepreneurs.sort((a, b) => a.last.localeCompare(b.last));
for (let index = 0; index < output.length; index++) {
    console.log(output[index].first + " " + output[index].last);
}
