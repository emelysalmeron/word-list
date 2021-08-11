import { data } from '../../data.js';
import { isWord } from '../logic/is-word.js';
import { sortStrings } from '../logic/sort-strings.js';
import { renderList } from '../components/render-list.js';

const warnings = document.getElementById('warnings');
/**
 * Entry point for users adding a word to the list.
 * It is called each time the user clicks the "add word" button.
 *
 * @param {Event} event - The event triggered when the user clicks the button.
 */
export const inputWord = (event) => {
  /* -- entry point for adding or removing a word -- */
  // debugger;
  console.log('-- handler: input word --');

  /* -- check the target -- */
  if (event.target.type !== 'button') {
    return;
  }

  /* -- gather user input from DOM -- */
  const text = event.target.form.text.value;
  const action = event.target.value;

  /* -- use the input and data to implement the user story --

    a user can add a new word to the list
      given the input contains non-letters,
        it will not be added
        a warning is displayed
      given the input contains only letters
        it will be added to the words list
        the list will be re-rendered
    a user can remove words from the list
      given the input is not in the list
        a warning is posted
      given the input is in the list
        it is removed
        the list is re-rendered
  */

  const warnings = document.getElementById('warnings');
  warnings.innerText = '';

  if (action === 'add') {
    if (!isWord(text)) {
      warnings.innerHTML = `Your input "${text}" must include one word at the time and only letters`;
      return;
    }
    data.words.push(text);
  } else if (action === 'remove') {
    if (!data.words.includes(text)) {
      warnings.innerHTML = `"${text}" is not found in the list`;
      return;
    }
    data.words.splice(data.words.indexOf(text), 1);
  }

  /* -- render new words -- */
  const sorted = sortStrings(data.words, data.sort);
  const newList = renderList(sorted);

  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';
  listContainer.appendChild(newList);
};
