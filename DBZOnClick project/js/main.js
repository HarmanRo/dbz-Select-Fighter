const contestants = document.querySelectorAll('.selected')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForChar))

function checkForChar(click){
	if(click.target.classList.contains("roseGoku")){
		document.querySelector('#rose').classList.toggle("hidden")
		
	}else if(click.target.classList.contains("blueVegeta")){
		document.querySelector('#blue').classList.toggle("hidden")

	}else if(click.target.classList.contains("buu")){
		document.querySelector('#buu').classList.toggle("hidden")

	}else if(click.target.classList.contains("jiren")){
		document.querySelector('#jiren').classList.toggle("hidden")

	}else if(click.target.classList.contains("ggoku")){
		document.querySelector('#goku').classList.toggle("hidden")

	}else if(click.target.classList.contains("krillin")){
		document.querySelector('#krill').classList.toggle("hidden")
	}
	else if(click.target.classList.contains("goldFrieza")){
		document.querySelector('#gold').classList.toggle("hidden")
	}
	else if(click.target.classList.contains("broly")){
		document.querySelector('#broly').classList.toggle("hidden")
	}
	else if(click.target.classList.contains("beerus")){
		document.querySelector('#beerus').classList.toggle("hidden")
	}
	else if(click.target.classList.contains("andriod21")){
		document.querySelector('#andriod21').classList.toggle("hidden")
	}
	else if(click.target.classList.contains("cell")){
		document.querySelector('#cell').classList.toggle("hidden")
	}
	else if(click.target.classList.contains("kale")){
		document.querySelector('#kale').classList.toggle("hidden")
	}

}
