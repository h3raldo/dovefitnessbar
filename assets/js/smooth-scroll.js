var scrollTo = document.getElementsByClassName('scroll-to');
for (var i = 0; i < scrollTo.length; i++) {
	var element = scrollTo[i];
	element.addEventListener("click", function(event){
		event.preventDefault();
		let target = this.getAttribute('data-target');
		document.querySelector(target).scrollIntoView({
			behavior: 'smooth',
			block: "start",
			inline: "nearest"
		});
	});
}