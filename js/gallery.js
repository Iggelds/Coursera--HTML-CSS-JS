function upDate(previewPic){
	var img = document.getElementById("image");
	img.style.backgroundImage = "url("+previewPic.src+")";
	img.style.backgroundColor = "#CCEECC";
	img.innerHTML = previewPic.alt;
}

function unDo(){
	var img = document.getElementById("image");
	img.style.backgroundImage = "url('')";
	img.style.backgroundColor = "#8e68ff";
	img.innerHTML = "Hover over an image below to display here";	   
}