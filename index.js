var inputItem = document.getElementById('task');
var addButton = document.getElementById('add');
var clearButton = document.getElementById('clear');
var taskList = document.getElementById('taskList');

//aadding item to new list
addButton.addEventListener('click', function () {
	if(inputItem.value.trim()){
	var newList = document.createElement("LI");
	var tasktext = document.createTextNode(inputItem.value)
	newList.appendChild(tasktext);
	taskList.appendChild(newList);
	inputItem.value="";

	//adding remove button to each item
		var removeButton = document.createElement("BUTTON");
		removeButton.innerHTML = "REMOVE";
		removeButton.className = "remove";
		removeButton.addEventListener('click',removeFunction);
		newList.appendChild(removeButton);
		taskList.appendChild(newList);
	}
	else{
		alert("task can't be empty");
	}
});

//clear all lis item

clearButton.addEventListener('click',function(){
	taskList.innerHTML="";
});

//remove task item
function removeFunction(event){
	var taskItem = event.target.parentElement;
	taskList.removeChild(taskItem);
}





