var list, todo, newText, newLi, button;

list = document.querySelectorAll('li');
todo = document.getElementById('todo');
newText = document.getElementById('newText');
button = document.getElementById('button')

function submitOnEnter(event) {
	if(event.keyCode === 13){
		button.click();
	}
}

function add () {
	if(newText.value.length>0){
		newLi = '<li onclick="toggleLineTrough(this)"  style="user-select:none;"><span style="text-decoration:none">' + newText.value + '</span><span>&nbsp;&nbsp;&nbsp;</span><span class="delete" onclick="deleteTodo(this)"></span></li>'
		todo.innerHTML+= newLi;
		newText.value = "";
	}
}

function toggleLineTrough(x) {
	if (x.firstChild.style.textDecoration=='none'){
		x.firstChild.style.textDecoration='line-through';
		x.lastChild.innerHTML = "delete";
	}else if(x.firstChild.style.textDecoration=='line-through'){
		x.firstChild.style.textDecoration='none';
		x.lastChild.innerHTML = "";
	}
}

function deleteTodo(y) {
	y.parentNode.parentNode.removeChild(y.parentNode)
}