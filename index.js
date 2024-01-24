//initialize todo list array
let todosArray = [];

//query selectors
const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");

//event listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
	event.preventDefault();

	todosArray.push({
		id: todosArray.length,
		text: todoInput.value,
		completed: false,
	});

	todoInput.value = "";

	console.log(todosArray);

	if (todosArray.length > 0) {
		todoList.innerHTML = todosArray.map((todo) => {
			const completedClass = todo.completed ? "strikethrough" : "";
			return `
            <div class="todo flex-between">
            <li class="todo-item ${completedClass}">${todo.text}</li>
            <div class="flex btn-div">
                <button type="submit" class="complete-btn" onclick="completeTodo(${todo.id})"><i class="fas fa-check"></i></button>
                <button type="submit" class="trash-btn" onclick="deleteTodo(${todo.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>`;
		});
	}
}

function deleteTodo(id) {
	console.log("delete clicked", id);

	todosArray = todosArray.filter((todo) => todo.id !== id);
	console.log(todosArray);

	if (todosArray.length > 0) {
		todoList.innerHTML = todosArray.map((todo) => {
			const completedClass = todo.completed ? "strikethrough" : "";

			return `
            <div class="todo flex-between">
            <li class="todo-item ${completedClass}">${todo.text}</li>
            <div class="flex btn-div">
                <button type="submit" class="complete-btn" onclick="completeTodo(${todo.id})"><i class="fas fa-check"></i></button>
                <button type="submit" class="trash-btn" onclick="deleteTodo(${todo.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>`;
		});
	}
}

function completeTodo(id) {
	console.log("complete clicked", id);
	todosArray[id].completed = true;
	console.log(todosArray);
	if (todosArray.length > 0) {
		todoList.innerHTML = todosArray.map((todo) => {
			const completedClass = todo.completed ? "strikethrough" : "";
			return `
            <div class="todo flex-between">
            <li class="todo-item ${completedClass}">${todo.text}</li>
            <div class="flex btn-div">
                <button type="submit" class="complete-btn" onclick="completeTodo(${todo.id})"><i class="fas fa-check"></i></button>
                <button type="submit" class="trash-btn" onclick="deleteTodo(${todo.id})"><i class="fas fa-trash"></i></button>
            </div>
        </div>`;
		});
	}
}
