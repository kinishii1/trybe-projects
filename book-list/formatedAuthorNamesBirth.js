const { books } = require('./data/library');

// `NOME_DA_PESSOA_AUTORA - ANO_DE_NASCIMENTO`

// {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// },

function formatedAuthorNamesBirth() {
  return books.map((book) => `${book.author.name} - ${book.author.birthYear}`);
}

module.exports = { formatedAuthorNamesBirth };
