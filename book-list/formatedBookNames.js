const { books } = require('./data/library');

function formatedBookNames() {
  return books.map(
    ({ name, genre, author }) => `${name} - ${genre} - ${author.name}`,
  );
}
console.log(formatedBookNames());

module.exports = { formatedBookNames };
