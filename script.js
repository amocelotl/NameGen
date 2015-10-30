var nameObj = {
	fName: "",
	lName: "",
};

function arrSearch(arrName) {
	return arrName[Math.floor(Math.random() * arrName.length)];
	}	

function nameDisplay() {
	console.log(nameObj.fName + " " + nameObj.lName);
	$(document).ready(function(){
		var name = (nameObj.fName + " " + nameObj.lName);
  		$("#name").text(name);
	});
}

$(document).ready(function(){
	$('#dwarfButton').click(function(){
		nameObj.fName = arrSearch(dwarfFNames);
		nameObj.lName = arrSearch(dwarfLNames1) + arrSearch(dwarfLNames2);
		nameDisplay();
	});

	$('#elfButton').click(function(){
		nameObj.fName = arrSearch(elfFNames);
		nameObj.lName = arrSearch(elfLNames);
		nameDisplay();
	});

	$('#humanButton').click(function(){
		if (Math.random() > 0.8) {
			nameObj.fName = arrSearch(humanFNames) + " " + arrSearch(humanFNames)
		}

		else {
			nameObj.fName = arrSearch(humanFNames);
		}
		nameObj.lName = arrSearch(humanLNames);
		nameDisplay();
	});
});