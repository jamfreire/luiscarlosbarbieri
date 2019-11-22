$(document).ready(function(){

	$(".foto").click(function(){
		var modal = document.getElementById('lightbox');
		var modalImg = document.getElementById("img");
		var captionText = document.getElementById("caption");
		modal.style.display = "block";
    	modalImg.src = this.src;
    	captionText.innerHTML = this.alt;
	});
});