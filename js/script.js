const btn1 = document.querySelector('.game--start');
btn1.addEventListener('click', startGame);
document
	.querySelectorAll('.cell')
	.forEach((cell) => cell.addEventListener('click', handleCellClick));

function makeGrid(size) {
	let grid = document.querySelector('.game--container');
	//grid.style.color = "blue"
	//grid_css =
	sizeString = size.toString();
	TemplateColumns = 'repeat(' + sizeString + ', auto)';
	grid.style.gridTemplateColumns = TemplateColumns;

	for (let i = 0; i < size * size; i++) {
		let dataCell = document.createElement('div');
		dataCell.setAttribute('data-cell-index', i);
		dataCell.classList.add('cell');
		grid.appendChild(dataCell);
	}
	document
		.querySelectorAll('.cell')
		.forEach((cell) => cell.addEventListener('click', cellClick));
}

function startGame() {
	let size = document.getElementById('gameSize').value;
	makeGrid(size);
}

function cellClick() {}

startGame();
