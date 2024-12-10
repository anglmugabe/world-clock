setInterval(function () {
	let kinshasaElement = document.querySelector("#kinshasa");

	let kinshasaDateElement = kinshasaElement.querySelector(".date");
	let kinshasaTimeElement = kinshasaElement.querySelector(".time");
	let kinshasaTime = moment().tz("Africa/Kinshasa");

	kinshasaDateElement.innerHTML = moment().format("MMMM Do YYYY");
	kinshasaTimeElement.innerHTML = kinshasaTime.format(
		"h:mm:ss [<small>]A[</small>]"
	);
}, 1000);

setInterval(function () {
	let cairoElement = document.querySelector("#cairo");

	let cairoDateElement = cairoElement.querySelector(".date");
	let cairoTimeElement = cairoElement.querySelector(".time");
	let cairoTime = moment().tz("Africa/Cairo");

	cairoDateElement.innerHTML = moment().format("MMMM Do YYYY");
	cairoTimeElement.innerHTML = cairoTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
