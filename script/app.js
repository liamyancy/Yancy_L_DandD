(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
		  puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
		  dropZones = document.querySelectorAll('.drop-zone'),
		  gameBoard = document.querySelector('.puzzle-board');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {
		//change all the image elements on the page -> draggabe image sources
		//change the image elements on the left to match the selected puzzle
		pieceNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
			puzzlePieces [index].id = `${piece + this.dataset.puzzleref}`;
		});
		//and set the drop zone background image based on the puzzle the user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		
	}

	function allowDrag(event) {
		console.log('started dragging an image')
		event.dataTransfer.setData("text/plain", this.id)
	}

	function allowDragOver(event) {
		console.log('dragged over a drop zone')
		event.preventDefault();
	}

	function allowDrop(event) {
		//event.preventDefault();
		console.log('dropped on a drop zone')
	}

	function allowDrop(event) {
		//event.preventDefault();
		console.log('dropped on a drop zone')

		let currentImage = event.dataTransfer.getData("text/plain");

		event.target.appendChild(document.querySelector(`#${currentImage}`));
	}

	// add event handling here
	// /what triggers do we need?
	
	// click on the bottom buttons to change the puzzle we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});
	//call the function and pass the first new button as a reference
	//research call, apply and bind look at MDN
	changeImageSet.call(puzzleButtons[0]);

})();