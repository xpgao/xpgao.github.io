

function getquiz() {
	let savequiz = localStorage.getItem('quiz')
	let parsingquiz = JSON.parse(savequiz)

	if (Array.isArray(parsingquiz)) {
		return parsingquiz;
		
	} else {
		alert("no quiz available")
	}

	
}



function showquiz() {
	let quiz = getquiz();
	let form = document.createElement('form')
	let space = document.createElement('br')

	form.setAttribute('id', 'quiz')

	for (let x =0; x< quiz.length; x++) {
		
		let space = document.createElement('br')
		let q = document.createElement('p');
		q.setAttribute('id', 'question' + x)
		let question =  document.createTextNode(quiz[x].questions)
		
		q.appendChild(question)
		q.appendChild(space)

		form.appendChild(q)

		for (y=0; y< 4; y++) {
			
			let space = document.createElement('br')
			let optionbuttons = document.createElement('input')
			optionbuttons.setAttribute('type', 'radio')
			optionbuttons.setAttribute('name', x)
			optionbuttons.value = quiz[x].options[y]
			
			
			let anwsertext = document.createElement('label')
			let answer = document.createTextNode(quiz[x].options[y])
			anwsertext.appendChild(answer)
			anwsertext.setAttribute('id', "choice" + x + y)
			

			form.appendChild(optionbuttons)
			form.appendChild(anwsertext)
			form.appendChild(space)
		}
	
		

	}

	let button = document.createElement('button')
	button.setAttribute('type', 'button')
	button.setAttribute('id', 'submitQuiz')
	button.setAttribute('onclick', 'checkanswers()')
	button.value = "Submit Quiz"
	let submitbutton = document.createTextNode("Submit")

	button.appendChild(submitbutton)
	form.appendChild(space)
	form.appendChild(button)

	document.getElementById('quizDisplay').appendChild(form)

}

function checkanswers() {
	let key = rightanwsers()
	let score = 0
	let quiz = getquiz()

	console.log(quiz[0].answer)

	
	for (let b =0; b < quiz.length; b++) {
		for (let d =0; d < 4; d++) {
			if(quiz[b].answer == d) {
				let anwsertext = document.getElementById('choice'+ b + d)
				
				let highlight = document.createElement('mark')
				highlight.innerHTML = anwsertext.innerHTML

				anwsertext.innerHTML = ""
				anwsertext.appendChild(highlight)
				
			}
		}
	}

	for (let x = 0; x < key.length; x++) {

		let check = document.getElementsByName(x);
		if (check[key[x]].checked) {
			score++;
			
		}
	}


	
	
	alert("Your Score is: " + score + '/' + rightanwsers().length)
}

function rightanwsers() {
	let quiz = getquiz()
	let key = []
	for (let u =0; u <quiz.length; u++) {
		key.push(quiz[u].answer)
	}
	return key;
	
}
rightanwsers()
showquiz()

