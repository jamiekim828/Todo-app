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

// validate title existence function
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
  }
};

// add todo list function
// add button will call this function
const addList = () => {
  const eachList = document.getElementsByTagName('li');

  // validate function call if there is title or not
  validateTitle(listTitle.value);
  validateStatus(listStatus.value);
  const isValid = validateTitle(listTitle.value);
  if (!isValid) return;

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
  doneDiv.innerHTML = `${doneItems.length} item(s) done out of ${array.length}`;

  listTitle.value = '';
  listDate.value = '';
  listStatus.value = '';
};

// remove function
// this function is called from delete button
const removeList = (element) => {
  const thisItem = element.path[1].id;
  for (let i = 0; i < array[0].length; i++) {
    if (array[0][i].id === thisItem) {
      array[0][i].remove();
    }
  }
};

// add button onclick
addButton.onclick = addList;

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
