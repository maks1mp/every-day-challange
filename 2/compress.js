function compress(str) {
    const lettersList = str.split('');
    let result = '';

    let currentLetter, nextLetter;
    let number = 1;

    for (let i = 0; i < lettersList.length; i++) {
        currentLetter = lettersList[i];
        nextLetter = lettersList[i + 1];

        if (currentLetter === nextLetter) {
            number++;
        } else {
            result += currentLetter + number;
            number = 1;
        }
    }

    return result;
}

module.exports = compress;