const submitButton = document.querySelector("button");
let task;

submitButton.addEventListener("click", function() {
    let view = document.getElementById("taskList");
	let newTask = document.createElement("li");
	task = document.getElementById("userTask").value;
	var node = document.createTextNode(task);
	newTask.appendChild(node);
	view.appendChild(newTask);
    
    console.log(task);
});

console.log(task);