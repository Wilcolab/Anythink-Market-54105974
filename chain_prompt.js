function toKebabCase(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Input must be a non-empty string');
    }

    return input
        .replace(/([a-z])([A-Z])/g, '$1 $2')      // Split camelCase
        .replace(/[_\s]+/g, '-')                  // Replace spaces and underscores with -
        .replace(/-+/g, '-')                      // Collapse multiple dashes
        .replace(/^-+|-+$/g, '')                  // Trim leading/trailing dashes
        .toLowerCase();
}

// Example usage:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("this_is aTest")); // "this-is-a-test"