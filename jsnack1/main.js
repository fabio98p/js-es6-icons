console.log("funzia");

$(document).ready(() => {
	//Creare un array di oggetti: ogni oggetto descriverà una bici
	//da corsa con le seguenti proprietà: nome e peso. 
	//Stampare a schermo la bici con peso minore.
	//Usiamo il forEach

	const bici = [{
		tipo: "mtb",
		colore: "blu",
		marca: "bianchi",
		peso: random(7, 30),
	},
	{
		tipo: "bici",
		colore: "rosso",
		marca: "svazg",
		peso: random(7, 30),
	},
	{
		tipo: "cletta",
		colore: "arancione",
		marca: "pippero",
		peso: random(7, 30),
	}
	]
	console.log(bici);
	var bicileggera = bici[0].peso
	var indexBicileggera = 0
	bici.forEach((e, i, array) => {
		console.log(e.peso);
		if (e.peso < bicileggera) {
			bicileggera = e.peso
			indexBicileggera = i

		}
	})
	console.log(bici[indexBicileggera].tipo, bici[indexBicileggera].peso);

})

function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}