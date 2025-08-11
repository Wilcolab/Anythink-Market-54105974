function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (input === '') return '';

    // Replace underscores and spaces with hyphens
    let str = input.replace(/[_\s]+/g, '-');

    // Insert hyphen before uppercase letters (camelCase)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

    // Convert to lowercase
    str = str.toLowerCase();

    // Remove leading/trailing hyphens and collapse multiple hyphens
    str = str.replace(/-+/g, '-').replace(/^-+|-+$/g, '');

    return str;
}

// Example usages:
// toKebabCase("hello world")           // "hello-world"
// toKebabCase("hello_worldIsNice")     // "hello-world-is-nice"
// toKebabCase("---hello world--")      // "hello-world"