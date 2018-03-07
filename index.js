let list = [];

const addTodo = () => {
  let newTask = document.getElementById('new-task');
	let todoList = document.getElementById('list');
	let item = document.createElement('li');
	
	// Add new task to item
	item.innerText = newTask.value;

	// Remove functionality: todo
	item.onclick = removeTodo.bind(this, list.length);

	// Add Item to list
	todoList.appendChild(item);
	list.push(newTask.value);

	// reset text
	newTask.value = '';	
}

const removeTodo = (index) => {
	let todoList = document.getElementById('list');

	console.log(index);
	list.splice(index, 1);
  
	todoList.innerHTML = "";
	reconstructList();
}

const reconstructList = () => {
	let todoList = document.getElementById('list');

	list.map((task, index) => {

		let item = document.createElement('li');
		item.innerText = task;
		item.onclick = removeTodo.bind(this, index);
		todoList.appendChild(item);

	});
}
