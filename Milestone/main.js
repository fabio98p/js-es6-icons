console.log("ciao ale");

$(document).ready(() => {

	icons.forEach((e, index) => {
		$("main").append(`<div>
			<i class="${e.family} ${e.prefix}${e.name}"></i>
			<div>${e.name}</div>
		</div>`);

		$($("main i")[index]).addClass(()=>{
			if (e.type == "animal") {
				return "animal"
			} else if (e.type == "vegetable") {
				return "vegetable"
			} else if (e.type == "user") {
				return "user"
			}
		})


	});

})

//function

function myNewFunction(sel) {

	if (sel.options[sel.selectedIndex].id == "all") {
		$("main > div").show()
	} else if (sel.options[sel.selectedIndex].id == "animal") {
		$("main > div").hide()
		$("main div i.animal").parent().show()
	}else if (sel.options[sel.selectedIndex].id == "vegetable") {
		$("main > div").hide()
		$("main div i.vegetable").parent().show()
	} else if (sel.options[sel.selectedIndex].id == "user") {
		$("main > div").hide()
		$("main div i.user").parent().show()
	}  

}
