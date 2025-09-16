function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase("Convert THIS to camel case")); // "convertThisToCamelCase"