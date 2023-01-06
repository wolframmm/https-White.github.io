if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"M|",
					"M |",
					"M i|",
					"M i |",
					"M i p|",
					"M i p |",
					"M i p e|",
					"M i p e |",
					"M i p e d|",
					"M i p e d |",	];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}