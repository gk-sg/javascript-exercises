let palindromes = function (word) {
    let reversed = [...word.toLowerCase()].reverse().join('');

    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

    let cleaned = word
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('')

    return cleaned === cleaned.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
