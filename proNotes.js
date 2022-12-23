// Used to check if the JS script is properly linked
console.log('Welcome to the console')

// The Start Button function

document.getElementById("startbtn").onclick = function() {startbtnfn('','hi')};

function startbtnfn(triggerFunction,info){

	console.log('button clicked')
	alert('Start button works')

	const element = document.getElementById("wellOne");
	element.innerHTML = info;
}

// Confirms that the script has been completed
console.log('End of file')