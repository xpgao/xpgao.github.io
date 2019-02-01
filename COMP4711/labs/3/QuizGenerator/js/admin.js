
let jsondataarray = []
let count = 0;

function add(){
	
	let question_input = document.getElementById("questionfield").value
	
	let optionbuttons = document.getElementsByName("options")
	
	let options_array =[]
	
	let answer
	
	jsonElement = {}
	
	for (let i = 0; i < 4; i++) {
		options_array[i] = document.getElementById("option" + i).value
		if (optionbuttons[i].checked) {
			answer = i
		}
	}
	
	jsonElement.options = options_array
	jsonElement.questions = question_input
	jsonElement.id = count;
	
	jsonElement.answer = answer

	jsondataarray.push(jsonElement)
	
	count++;
	
	start_new_form()
	
}


function start_new_form() {
	let before = document.getElementById("show_questions")
	
	before.innerHTML = ''

	for (let x = 0; x < jsondataarray.length; x++) {
		let quizquestions = document.createElement('input');
		
		let form1 = document.createElement("form");
		form1.setAttribute("id", "addquestion");
		let breaks = document.createElement('br')
		
		

		
		quizquestions.setAttribute('id', 'editquestion' + x)
		quizquestions.setAttribute('type', 'text')
		
		quizquestions.value = jsondataarray[x].questions
		form1.appendChild(breaks)
		form1.appendChild(breaks)
		form1.appendChild(quizquestions)
		form1.appendChild(breaks)
		form1.appendChild(breaks)

		for (let y = 0; y < 4; y++) {
			let buttonoption = document.createElement("input");
			buttonoption.setAttribute('type', 'radio');
			buttonoption.setAttribute('name', 'option');
			buttonoption.setAttribute('id', 'editbuttonoption' + x + y)
			let option = jsondataarray[x].options[y]
			
			let newinputs = document.createElement('input')
			newinputs.setAttribute('type', 'text')
			newinputs.setAttribute('id', 'editInput' + x + y)
			newinputs.value = option
			
			form1.appendChild(buttonoption)
			form1.appendChild(newinputs)
			
			let break1 = document.createElement('br')
			form1.appendChild(break1)

			if (jsondataarray[x].answer == y) {
				buttonoption.checked = true;
			}
			
		}

		let edit = document.createElement('button')
		edit.setAttribute('type', 'button')
		edit.setAttribute('onclick', 'editelement(' + x + ')')
		let edittexts = document.createTextNode("edit")
		edit.appendChild(edittexts)
		let delete_questions = document.createElement('button')
		delete_questions.setAttribute('type', 'button')
		delete_questions.setAttribute("onclick", "deleteElement(" + x + ")")
		let deletetext = document.createTextNode("delete")
		delete_questions.appendChild(deletetext)
		let remove_all = document.createElement('button')
		remove_all.setAttribute('type', 'button')
		//remove_all.setAttribute("onclick", "removeLocalStorage()")
		let removetext = document.createTextNode("all delete")
		remove_all.appendChild(removetext)
		form1.appendChild(delete_questions)
		form1.appendChild(edit)
		let break1 = document.createElement('br')
		document.getElementById('show_questions').appendChild(form1);
		document.getElementById('show_questions').appendChild(break1);

	}
	
}

function deleteElement(index) {
	jsondataarray.splice(index, 1)
	start_new_form()
	
	
}

function editelement(index) {
	
	jsondataarray[index].questions = document.getElementById('editquestion' + index).value

	for (let x = 0; x < 4; x++) {
		jsondataarray[index].options[x] = document.getElementById('editInput' + index + x).value

		if(document.getElementById('editbuttonoption' + index + x).checked) {
			jsondataarray[index].answer = x;
		}
	}

	start_new_form()
	
	
}


function save() {
	let jsonQuiz = JSON.stringify(jsondataarray)
	
	localStorage.setItem('quiz', jsonQuiz)
}

//function removeLocalStorage() {
//	localStorage.clear()
//}





