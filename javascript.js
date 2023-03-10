// variables
const listTitle = document.getElementById('list_title');
const listDate = document.getElementById('list_date');
const listStatus = document.getElementById('list_status');

const notStarted = document.getElementById('not_started');
const inProgress = document.getElementById('in_progress');
const done = document.getElementById('done');
const lists = document.getElementById('lists');
const addButton = document.getElementById('addBtn');

// set empty array
const array = [];
// add todo list function
// add button will call this function
const addList = () => {
  const eachList = document.getElementsByTagName('li');

  // display the list
  const todolist = document.createElement('li');
  const li = lists.appendChild(todolist);
  li.innerHTML = `<span>Title: ${listTitle.value}</span> <span>Date: ${listDate.value}</span>`;
  // each list will have class and id
  li.classList.add(`${listStatus.value}`);
  li.setAttribute('id', `${listTitle.value}`);
  array.push(eachList);
  // each list will have delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'deleteBtn');
  deleteButton.appendChild(document.createTextNode('Delete'));
  li.appendChild(deleteButton);
  deleteButton.onclick = removeList;
  // display number of done todo
  const doneDiv = document.getElementById('done_number');
  const doneItems = document.getElementsByClassName('done');
  doneDiv.innerHTML = `${doneItems.length} item(s) done`;
};
// add button onclick
// addButton.onclick = addList;
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  // validate title function call
  const isValid = validateTitle(listTitle.value);
  if (!isValid) return;
  // validate status function call
  const isStatusValid = validateStatus(listStatus.value);
  if (!isStatusValid) {
    return;
  }

  addList();

  // clear input after add
  listTitle.value = '';
  listDate.value = '';
  listStatus.value = '';
});
// validate title existence
// and validate unique title function
const validateTitle = (title) => {
  if (!title) {
    alert('where is the title?');
    return false;
  }
  if (
    array.length > 0 &&
    Object.values(array[0]).some((todo) => todo.id === title)
  ) {
    alert('Sorry, this title already exists');
    return false;
  }
  return true;
};
// validate status existence function
const validateStatus = (status) => {
  if (!status) {
    alert('how is the status now?');
    return false;
  }
  return true;
};
// remove function
// this function is called from delete button
const removeList = (element) => {
  const thisItem = element.path[1].id;
  for (let i = 0; i < array[0].length; i++) {
    if (array[0][i].id === thisItem) {
      array[0][i].remove();
      const newArray = Object.values(array[0]).map((el) =>
        Object.keys(array[0]).indexOf(el) > i
          ? array[0].splice(i - 1, 0, el)
          : el
      );
      // display number of done todo
      const doneDiv = document.getElementById('done_number');
      const doneItems = document.getElementsByClassName('done');
      doneDiv.innerHTML = `${doneItems.length} item(s) done out of ${newArray.length}`;
      return newArray;
    }
  }
};

// HTML work
notStarted.innerText = 'Not started';
inProgress.innerText = 'In progress';
done.innerText = 'Done';

window.onload = function () {
  const colorDescription1 = document.getElementById('description1');
  const colorDescription2 = document.getElementById('description2');
  const colorDescription3 = document.getElementById('description3');

  const span = document.createElement('div');
  const p1 = document.createElement('p');
  const text1 = document.createTextNode('Not started');
  p1.appendChild(text1);

  const span2 = document.createElement('div');
  const p2 = document.createElement('p');
  const text2 = document.createTextNode('In progress');
  p2.appendChild(text2);

  const span3 = document.createElement('div');
  const p3 = document.createElement('p');
  const text3 = document.createTextNode('Done');
  p3.appendChild(text3);

  colorDescription1.append(span, p1);
  colorDescription2.append(span2, p2);
  colorDescription3.append(span3, p3);
};
