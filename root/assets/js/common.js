document.addEventListener('DOMContentLoaded', () => {
	var element = document.getElementById('menu-list');
	var trigger = document.getElementById('menu');

	trigger.addEventListener('click', () => {
		trigger.classList.toggle('is-active');
    element.classList.toggle('is-active');
	});
});