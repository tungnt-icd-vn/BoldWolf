document.addEventListener('DOMContentLoaded', () => {
	var element = document.getElementById('menu-list');
	var trigger = document.getElementById('menu');

	trigger.addEventListener('click', () => {
		trigger.classList.toggle('is-active');
    element.classList.toggle('is-active');
	});
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.display = "flex";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}