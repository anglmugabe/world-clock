function updateTime() {
	let kinshasaElement = document.querySelector("#kinshasa");

	if (kinshasaElement) {
		let kinshasaDateElement = kinshasaElement.querySelector(".date");
		let kinshasaTimeElement = kinshasaElement.querySelector(".time");
		let kinshasaTime = moment().tz("Africa/Kinshasa");

		kinshasaDateElement.innerHTML = moment().format("MMMM Do YYYY");
		kinshasaTimeElement.innerHTML = kinshasaTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}

	let cairoElement = document.querySelector("#cairo");

	if (cairoElement) {
		let cairoDateElement = cairoElement.querySelector(".date");
		let cairoTimeElement = cairoElement.querySelector(".time");
		let cairoTime = moment().tz("Africa/Cairo");

		cairoDateElement.innerHTML = moment().format("MMMM Do YYYY");
		cairoTimeElement.innerHTML = cairoTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}

	let mauritiusElement = document.querySelector("#mauritius");

	if (cairoElement) {
		let mauritiusDateElement = mauritiusElement.querySelector(".date");
		let mauritiusTimeElement = mauritiusElement.querySelector(".time");
		let mauritiusTime = moment().tz("Indian/Mauritius");

		mauritiusDateElement.innerHTML = moment().format("MMMM Do YYYY");
		mauritiusTimeElement.innerHTML = mauritiusTime.format(
			"h:mm:ss [<small>]A[</small>]"
		);
	}
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}

	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
	<div class="city"> 
	<div>
	<h2>${cityName}</h2>
	<div class="date">${cityTime.format("MMMM Do YYYY")} </div>
	</div>
	<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
		"A"
	)}</small></div>
	</div> 
	<a href="index.html">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
