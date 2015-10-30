var nameObj = {
	fName: "",
	lName: "",
};

function pageLoad() {
	$(document).ready(function() {
		$('body').fadeIn(2000);
	});
}
pageLoad();

function arrSearch(arrName) {
	return arrName[Math.floor(Math.random() * arrName.length)];
	}	

function nameDisplay() {
	console.log(nameObj.fName + " " + nameObj.lName);
	$(document).ready(function(){
		var name = (nameObj.fName + " " + nameObj.lName);
  		$("#name").text(name).fadeIn("slow");
  		
// JQuery mouse over will hide generated name.
	// Why can't I do this?
	// When one function ENDS, start another one...
/*			$("button").click(function() {
  			$('#name').fadeOut("slow");

  		});
*/

	});
}

	function nameFade() {
		$(document).ready(function(){

		});
	}

$(document).ready(function(){
	$('#dwarfButton').click(function(){
		nameObj.fName = arrSearch(dwarfFNames);
		nameObj.lName = arrSearch(dwarfLNames1) + arrSearch(dwarfLNames2);
		if (Math.random() > 0.9) {
			nameObj.lName = nameObj.lName + " " + "'" + arrSearch(dwarfCog) + "'";
		}
		nameDisplay();
	});

	$('#elfButton').click(function(){
		nameObj.fName = arrSearch(elfFNames);
		nameObj.lName = arrSearch(elfLNames);
		nameDisplay();
	});

	$('#humanButton').click(function(){
		if (Math.random() > 0.8) {
			nameObj.fName = arrSearch(humanFNames) + " " + arrSearch(humanFNames);
		}
		else {
			nameObj.fName = arrSearch(humanFNames);
		}
		nameObj.lName = arrSearch(humanLNames);
		nameDisplay();
	});
});

