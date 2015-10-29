	var nameObj = {
		fName: "",
		lName: "",
	};
/*
	var race = prompt("Pick a race");
	switch (race) {
		case "Dwarf":
		dwarfNameGen();
		break;

		case "Elf":
		elfNameGen();
		break;

		case "Human":
		humanNameGen();
		break;

		default:
		alert("That's not valid!");
		break;
		}
*/

	function arrSearch(arrName) {
		return arrName[Math.floor(Math.random() * arrName.length)];
	}	


	function dwarfNameGen() {
		nameObj.fName = arrSearch(dwarfFNames);
		nameObj.lName = arrSearch(dwarfLNames);
		nameDisplay();
		}

	function elfNameGen() {
		nameObj.fName = arrSearch(elfFNames);
		nameObj.lName = arrSearch(elfLNames);
		nameDisplay();
		}

	function humanNameGen() {
		nameObj.fName = arrSearch(humanFNames);
		nameObj.lName = arrSearch(humanLNames);
		nameDisplay();
		}

	function nameDisplay() {
		document.getElementById("name").innerHTML = nameObj.fName + " " + nameObj.lName;
		console.log(nameObj.fName + " " + nameObj.lName);
		}

