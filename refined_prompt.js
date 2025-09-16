/**
 * Converts a given string to camelCase.
 *
 * The function trims the input, replaces all non-alphanumeric characters with spaces,
 * splits the string into words, and then converts the first word to lowercase and
 * capitalizes the first letter of each subsequent word. The resulting words are joined
 * together without spaces.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase version of the input string. Returns an empty string if input is empty or contains no valid words.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toCamelCase("hello world"); // returns "helloWorld"
 * toCamelCase(" multiple words_here "); // returns "multipleWordsHere"
 * toCamelCase(""); // returns ""
 * toCamelCase(123); // throws Error
 */

/**
 * Converts a given string to dot.case.
 *
 * The function trims the input, replaces all non-alphanumeric characters with spaces,
 * splits the string into words, converts all words to lowercase, and joins them with dots.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case version of the input string. Returns an empty string if input is empty or contains no valid words.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toDotCase("hello world"); // returns "hello.world"
 * toDotCase(" multiple words_here "); // returns "multiple.words.here"
 * toDotCase(""); // returns ""
 * toDotCase(123); // throws Error
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim, replace non-alphanumeric with spaces, and split by whitespace
    const words = input
        .trim()
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase(" multiple words_here ")); // "multipleWordsHere"
// console.log(toCamelCase("")); // ""
// toCamelCase(123); // throws Error
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim, replace non-alphanumeric with spaces, split, lowercase, join with dots
    const words = input
        .trim()
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .split(/\s+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());

    return words.join('.');
}

// Example usage:
// console.log(toDotCase("hello world")); // "hello.world"
// console.log(toDotCase(" multiple words_here ")); // "multiple.words.here"
// console.log(toDotCase("")); // ""
// toDotCase(123); // throws Error
