console.log("ciao ale");

$(document).ready(() => {

	icons.forEach(e => {
		$("main").append(`<div>
			<i class="${e.family} ${e.prefix}${e.name}"></i>
			<div>${e.name}</div>
		</div>`);
	});

	
})
