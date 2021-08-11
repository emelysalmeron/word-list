/**
 * Sorts an array of strings in different ways.
 * It does not modify the argument (no side-effects).
 *
 * @param {string[]} [toSort=''] - The array of strings to sort.
 * @param {string} [sortType='oldest'] - How to sort the strings, 6 options.
 * - oldest: from oldest to newest.
 * - newest: from newest to oldest.
 * - shortest: from shortest to longest.
 * - longest: from longest to shortest.
 * - a: alphabetical order.
 * - z: reverse alphabetical order.
 * If the sortType is not one of these 6 options, a copy of toSort is returned.
 * @returns {string[]} A new sorted array containing the same strings as toSort.
 * @example
 *
 * // ... write this!
 */
export const sortStrings = (toSort = [], sortType = 'oldest') => {
  let sorted = [];

  sorted =
    sortType === 'newest'
      ? [...toSort].reverse()
      : sortType === 'a'
      ? [...toSort].sort()
      : sortType === 'z'
      ? [...toSort].sort().reverse()
      : sortType === 'shortest'
      ? [...toSort].sort((a, b) => a.length - b.length)
      : sortType === 'longest'
      ? [...toSort].sort((a, b) => a.length - b.length).reverse()
      : [...toSort];
  return sorted;
};
