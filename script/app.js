(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img');

	function changeImageSet() {
		//change all the image elements on the page -> draggabe image sources
		//and set the drop zone background
		
		debugger;
	}
	// add event handling here
	// /what triggers do we need?
	
	// click on the bottom buttons to change the puzzle we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet))

})();
