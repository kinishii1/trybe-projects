const { books } = require('../data/library');

// Requisito 1

function fantasyOrScienceFiction(genreInput) {
  const find1 = 'Ficção Científica';
  const find2 = 'Fantasia';
  const defaultReturn = books.filter(({ genre }) => genre === find1 || genre === find2);

  if (!genreInput) {
    return defaultReturn;
  }

  const foundBooks = books.filter(({ genre }) => genre === genreInput);

  return foundBooks;
}

// console.log(fantasyOrScienceFiction());

// Requisito 2
function oldBooksOrdered(year) {
  const result = books.filter(({ releaseYear }) => {
    const dif = year - releaseYear;
    return dif > 60;
  });
  return result.sort((a, b) => a.releaseYear - b.releaseYear);
}

// console.log(oldBooksOrdered(2020));

// Requisito 3
function booksByAuthorBirthYear(birthYear) {
  const result = books.filter(({ author }) => Math.abs(birthYear - author.birthYear) === 0);
  return result.map(({ name }) => name);
}

// console.log(booksByAuthorBirthYear(1948));

// Requisito 4
function fantasyOrScienceFictionAuthors() {
  const fantasyAndScience = fantasyOrScienceFiction();

  const authorNames = (fantasyAndScience.map(({ author }) => author.name));

  const result = authorNames.sort((a, b) => a.localeCompare(b));

  return result;
}

// console.log(fantasyOrScienceFictionAuthors())

// Requisito 5
function oldBooks(year) {
  const oldBooksOrd = oldBooksOrdered(year).sort((a, b) => a.id - b.id);
  const result = oldBooksOrd.map(({ name }) => name);
  return result;
}

// console.log(oldBooks(2022));

// Implemente a função <code>authorWith3DotsOnName</code> que deve retornar o nome do primeiro livro cuja pessoa autora inicie seu nome com três iniciais.

// Requisito 6
function authorWith3DotsOnName() {
  for (const book of books) {
    const authorName = book.author.name;
    const nameBook = book.name;
    if (/^[A-Z]\. [A-Z]\. [A-Z]\./.test(authorName)) {
      return nameBook;
    }
  }
  return null;
}

console.log(authorWith3DotsOnName());

module.exports = {
  fantasyOrScienceFiction,
  oldBooksOrdered,
  booksByAuthorBirthYear,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
