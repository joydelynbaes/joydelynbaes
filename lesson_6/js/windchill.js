


		let temp = 49;//parseFloat(document.getElementById("temp").value);
		let speed = 12; //parseFloat(document.getElementById("wind").value);

		let chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
		document.getElementById("chillOutput").innerHTML = chill.toFixed(2);

	}