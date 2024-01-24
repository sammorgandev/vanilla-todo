//query selectors
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

//event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions
function addTodo(event) {
	console.log("addTodo function called");
	event.preventDefault();
	//create main div & classes
	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");
	todoDiv.classList.add("flex-between");

	//create todo li & classes
	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");

	//append li to main div
	todoDiv.appendChild(newTodo);

	//create button div
	const buttonDiv = document.createElement("div");
	buttonDiv.classList.add("flex");
	todoDiv.appendChild(buttonDiv);

	const completedButton = document.createElement("button");
	completedButton.innerHTML = '<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	buttonDiv.appendChild(completedButton);

	const trashButton = document.createElement("button");
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add("trash-btn");
	buttonDiv.appendChild(trashButton);
	todoList.appendChild(todoDiv);
	todoInput.value = "";
}

function deleteCheck(event) {
	const item = event.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.remove();
	}
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}
