const { books } = require('./data/library');

function nameAndAge() {
  return books
    .map((book) => ({
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    }))
    .sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());

module.exports = { nameAndAge };
