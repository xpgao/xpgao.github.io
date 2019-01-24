

let button_array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



function makeButtons(){
    for (var i = 0; i < 26; i++){
		let btn = document.createElement("BUTTON");
        var t = document.createTextNode(button_array[i]);
		btn.setAttribute("value", button_array[i]);
		btn.className = 'button';
        btn.appendChild(t);

        var foo;		
		
		if(i < 13) {
			foo = document.getElementById("btnBox");
		} else {
			foo = document.getElementById("btnBox2");
		}
		
		foo.appendChild(btn);
	}
	
	document.addEventListener('click', function (e) {
		if(e.target && e.target.className == 'button') {
			var letter = e.target.getAttribute("value");
			console.log(letter);
			alert(letter);
	}});
}

function displayAlert(letter){
    alert(letter);
}

makeButtons();