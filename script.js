const submitButton = document.querySelector("button");
const input = document.getElementById("userTask");
let task;


submitButton.addEventListener("click", function() {
    let view = document.getElementById("taskList");
	let newTask = document.createElement("li");
	task = document.getElementById("userTask").value;
	var node = document.createTextNode(task);
	newTask.appendChild(node);
	view.appendChild(newTask);
	input.value = "";

    
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	dBtn.classList.add("button");
	newTask.appendChild(dBtn);
	dBtn.addEventListener("click", deleteTask);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteTask(){
		newTask.classList.add("delete")
	}
	//END ADD CLASS DELETE

    console.log(task);
});


console.log(task);