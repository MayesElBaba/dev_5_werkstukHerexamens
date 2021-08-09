exports.capitalLetter = function(word) {
    if (!word || (typeof word === 'number')) {
        return null;
    }
    return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}