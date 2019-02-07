let quiz_question = [
					{
						question_number: "1)In a method, this refers to the?",
						number:"q1", 
						options:["a) owner object", "b) global object", "c) element", "d) any object"]
					}, 
					{
						question_number: "2) Alone, this refers to the ?",
						number:"q2", 
						options:["a) owner object", "b) global object", "c) element", "d) any object"]
					},
					{
						question_number: "3)In a function, this refers to the global object.", 
						number:"q3", 
						options:["a)  true ", "b) false"]
					},
					{
						question_number: "4) In an event, this refers to the _____ that received the event.", 
						number:"q4", 
						options:["a) owner object", "b) global object", "c) element", "d) any object"]
					},
					{
						question_number: "5) When used alone, the owner is the Global object, so this refers to the Global object.", 
						number:"q5", 
						options:["a)  true ", "b) false"]
					},
					{
						question_number: "6) HTML DOM methods are ______ you can perform", 
						number:"q6", 
						options:["a)  actions", "b)  values", "c) property", "d)  method "]
					},
					{
						question_number: "7) The onload and onunload events are triggered when the user enters or leaves the page.", 
						number:"q7", 
						options:["a)  true ", "b) false "]
					},
					{
						question_number: "8) A property is a value that you can get or set", 
						number:"q8", 
						options:["a)  true ", "b) false "]
					},
					{
						question_number: "9) A method is an action you can do", 
						number:"q9", 
						options:["a)  Like add or deleting an HTML element", "b)  like changing the content of an HTML element"]
					},
					{
						question_number: "10) for loops are loops that?", 
						number:"q10", 
						options:["a)  loops through a block of code a number of times", "b) loops through the properties of an object ", "c) loops through a block of code while a specified condition is true", "d)  also loops through a block of code while a specified condition is true"]
					}
				
				];

let Prompt = prompt("How many questions? (0 to 10 only)");
  
if(Prompt >= 0 && Prompt < 11) {
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
	alert("Input must be between 0 to 10")
	displayQuestions();
}

