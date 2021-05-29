/**
 * Checks if a string is a word.  A word contains only letters.
 *
 * @param {string} text - A string to check for wordiness.
 * @returns {boolean} Whether or not the text is a word.
 * @example
 *
 * // ... write this!
 */
export const isWord = (text = '') => /^[a-zA-Z]+$/.test(text);
