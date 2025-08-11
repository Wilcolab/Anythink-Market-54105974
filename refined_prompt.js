/**
 * Converts a string to camelCase format.
 *
 * - Trims leading/trailing spaces and separators (spaces, hyphens, underscores).
 * - Splits the input by any sequence of space, hyphen, or underscore.
 * - If the input is a single word, returns it with the first letter in lowercase.
 * - For multiple words, concatenates them with the first word in lowercase and subsequent words capitalized.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toCamelCase("hello-world_of_javascript"); // "helloWorldOfJavascript"
 * toCamelCase("  singleWord "); // "singleWord"
 * toCamelCase("multiple words_here"); // "multipleWordsHere"
 */
 
/**
 * Converts a string to dot.case format.
 *
 * - Trims leading/trailing spaces and separators (spaces, hyphens, underscores).
 * - Splits the input by any sequence of space, hyphen, underscore, or camelCase boundaries.
 * - Converts all words to lowercase and joins them with dots.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toDotCase("hello-world_of_javascript"); // "hello.world.of.javascript"
 * toDotCase(" alreadyCamelCase"); // "already.camel.case"
 * toDotCase("DotCase"); // "dot.case"
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim leading/trailing spaces and separators
    const trimmed = input.trim().replace(/^[\s\-_]+|[\s\-_]+$/g, '');

    if (trimmed === '') return '';

    // Split by any sequence of space, hyphen, or underscore
    const words = trimmed.split(/[\s\-_]+/);

    // If only one word, return as camelCase (lowercase first letter)
    if (words.length === 1) {
        return words[0].charAt(0).toLowerCase() + words[0].slice(1);
    }

    // Build camelCase string
    const camelCase = words
        .map((word, idx) => {
            if (idx === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1);
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');

    return camelCase;
}

// Example usage:
// console.log(toCamelCase("hello-world_of_javascript")); // "helloWorldOfJavascript"
// console.log(toCamelCase(123)); // Throws TypeError
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim leading/trailing spaces and separators
    const trimmed = input.trim().replace(/^[\s\-_]+|[\s\-_]+$/g, '');

    if (trimmed === '') return '';

    // Split by any sequence of space, hyphen, underscore, or camelCase boundaries
    const words = trimmed
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Split camelCase
        .split(/[\s\-_]+/);

    // Convert all words to lowercase and join with dots
    return words.map(w => w.toLowerCase()).join('.');
}

// Example usage:
console.log(toDotCase("hello-world_of_javascript")); // "hello.world.of.javascript"
console.log(toDotCase(" alreadyCamelCase")); // "already.camel.case"
console.log(toDotCase("DotCase")); // "dot.case"
console.log(toDotCase(123)); // Throws TypeError