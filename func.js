

function myFunc(x) {
	x.classList.toggle("change")

	var y = document.getElementById("links");
	if (y.style.display === "block") {
		y.style.display="none";
	}
	else {
		y.style.display = "block";
	}
}