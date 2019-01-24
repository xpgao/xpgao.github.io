let quiz_question = [
					{
						question_number: "1)What would be the output of this script?",
						number:"q1", 
						options:["a) 22", "b) 33", "c) 44", "d) 24"]
					}, 
					{
						question_number: "2) Inside which HTML element do we put the JavaScript?",
						number:"q2", 
						options:["a)  <js> ", "b) <scripting> ", "c)  <javascript> ", "d)  <script>"]
					},
					{
						question_number: "3) The external JavaScript file must contain the <script> tag.", 
						number:"q3", 
						options:["a)  true ", "b) false"]
					},
					{
						question_number: "4) How do you write \"Hello World\" in an alert box?", 
						number:"q4", 
						options:["a) alertBox(\"Hello World\");", "b) alert(\"Hello World\");" , "c) msg(\"Hello World\"); ", "d) msgBox(\"Hello World\");"]
					},
					{
						question_number: "5) WWhat is the correct way to write a JavaScript array?", 
						number:"q5", 
						options:["a)  var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\") ", "b) var colors = [\"red\", \"green\", \"blue\"] ", "c) var colors = \"red\", \"green\", \"blue\" ", "d) var colors = (1:\"red\", 2:\"green\", 3:\"blue\") "]
					}
				];

let Prompt = prompt("How many questions? (0 to 5 only)");
  
if(Prompt >= 0 && Prompt < 6) {
	for (let i = 0; i < Prompt; i++) {
		let questionnumber = quiz_question[i];	  
		let numberofquestions = questionnumber.options;
		let userInput;
		let label = document.createElement("label");
		let quiz_questionFrom = document.createElement("form");
		
		quiz_questionFrom.setAttribute('name', questionnumber.number);
			
		for (let j = 0; j < numberofquestions.length; j++) { 
			userInput = document.createElement("input");
			userInput.setAttribute('type', "radio");
			userInput.setAttribute('name', questionnumber.number);
			userInput.setAttribute('value', numberofquestions[j]);
			
			console.log(questionnumber);
			
			label.appendChild(userInput);
			label.innerHTML += "<span>" + numberofquestions[j] + "</span><br/>";
			quiz_questionFrom.appendChild(label);
		}
		document.body.innerHTML += questionnumber.question_number;
		document.body.appendChild(quiz_questionFrom);
	}
} else {
	alert("Input must be between 0 to 5")
	displayQuestions();
}

