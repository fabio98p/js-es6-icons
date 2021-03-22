console.log("ciao ale");

$(document).ready(() => {

	icons.forEach((e, index) => {
		$("main").append(`<div>
			<i class="${e.family} ${e.prefix}${e.name}"></i>
			<div>${e.name}</div>
		</div>`);
		
		$($("main i")[index]).css("color", () => {
			if (e.type == "animal") {
				console.log("blue");
				return "blue"
			} else if (e.type == "vegetable") {
				console.log("orance");
				return "orange"
			} else if (e.type == "user") {
				console.log("purple");
				return "purple"
			}
		})
	});


})
