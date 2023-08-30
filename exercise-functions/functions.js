// Requisito 1 - Crie a função verifyPalindrome
function verifyPalindrome(string) {
  const reversed = string.split('').reverse().join('');
  return string === reversed;
}

// Requisito 2 - Crie a função getHighestIndex

function getHighestIndex(array) {
  let indiceMaior = 0;
  let numeroMaior = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > numeroMaior) {
      indiceMaior = index;
      numeroMaior = array[index];
    }
  }
  return indiceMaior;
}
// getHighestIndex([-9, -1, -3, -5, -7])

// Requisito 3 - Crie a função getSmallestIndex

function getSmallestIndex(array) {
  let indiceMenor = 0;
  let numeroMenor = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < numeroMenor) {
      indiceMenor = index;
      numeroMenor = array[index];
    }
  }
  return indiceMenor;
}

// Requisito 4 - Crie a função getLongestWord

function getLongestWord(array) {
  let indiceMaiorPalavra = 0;
  for (let index = 0; index < array.length; index += 1) {
    let tamanhoPalavraAtual = array[index].length;
    let tamanhoPalavraMaior = array[indiceMaiorPalavra].length;
    if (tamanhoPalavraAtual > tamanhoPalavraMaior) {
      indiceMaiorPalavra = index;
    }
  }
  return array[indiceMaiorPalavra];
}

// // Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(array) {
  let numeroMaior = array[0];
  let contagem = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > numeroMaior) {
      numeroMaior = array[index];
      contagem = 1;
    } else if (array[index] === numeroMaior) {
      contagem += 1;
    }
  }

  return contagem;
}

// Não modifique as linhas abaixo

module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => { }),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => { }),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => { }),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => { }),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => { }),
};
