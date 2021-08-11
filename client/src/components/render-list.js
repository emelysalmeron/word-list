// document this function!

/**
 *Renders an array of strings as an order list into.
 * - @param {string[]} =[toRender=[]].
 * - @param toRender
 * @returns ulEL
 */

export const renderList = (toRender = []) => {
  const ulEl = document.createElement('ul');

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
