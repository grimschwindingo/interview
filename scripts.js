let squares = document.querySelectorAll('.square')

for (let i = 0; i < squares.length; i++) {
	squares[i].addEventListener('click', function() {
		this.parentElement.classList.toggle('view')
	})
}
