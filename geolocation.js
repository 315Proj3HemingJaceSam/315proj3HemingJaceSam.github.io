function requestMap(){
	if(!navigator.geolocation) throw "Geolocation not Supported!";
	var image = document.createElement("img");
	navigator.geolocation.getCurrentPosition(setMapURL);
	return image;
}

function setMapURL(pos){
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longitude;
	var accuracy = pos.coords.accuracy;

	var url = "http://maps.google.com/maps/api/staticmap" +
	"?center=" + latitude + "," + "longitude" + "&size=640x640&sensor=true";

	var zoomlevel = 20;
	if(accuracy >80)
		zoomlevel -= Math.round(Math.log(accuracy/50)/Math.LN2);
	url += "&zoom=" + zoomlevel;

	image.src = url;
}