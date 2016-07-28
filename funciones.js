function alternaDisplay(id1) {
	var e = document.getElementById(id1);
	if (e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}

function cambiaImagen(imagen, src) {
	imagen.src =src;
}

function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		center: new google.maps.LatLng(44.5403, -78.5463),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions)
}