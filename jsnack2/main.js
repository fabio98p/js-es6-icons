console.log("funzia");

$(document).ready(() => {

	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	const minNumero = parseInt(prompt("inserisci un numero", 3))
	const maxNumero = parseInt(prompt("inserisci un numero piu grande", 9))
	filtrato(array, minNumero, maxNumero)
	sliceato(array, minNumero, maxNumero)

	//function
	function filtrato(array, minNumero, maxNumero) {
		// const newArray = []
		// array.forEach((e, i) => {
		// 	if (minNumero <= i && maxNumero >= i) {
		// 		newArray.push(e)
		// 	}
		// });
		const newArray = array.filter((e, i) => minNumero <= i && maxNumero >= i)
		console.log(newArray);
	}
	function sliceato(array, minNumero, maxNumero) {
		const newArraySlice = array.slice(minNumero, maxNumero+1)
		console.log(newArraySlice);
	}

})