

  // 1 => <div class='wall'></div>
	// 2 => <div class='coin'></div>
	// 3 => <div class='ground'></div>
	// 4 => <div class='ghost'></div>
	// 5 => <div class='pacman'></div>

  // query the DOM and grab the element with an id of score
  // save that in a variable called counter
  // make a varibale called score


  pacman = {
  		x: 8,
  		y: 11,
  	}
  	map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //Row 1
      [1,2,2,2,2,2,2,1,2,2,2,2,2,2,1], //Row 2
      [1,2,1,2,1,1,2,1,2,1,1,2,1,2,1], //Row 3
      [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1], //Row 4
      [1,2,1,2,1,2,1,1,1,2,1,2,1,2,1], //Row 5
      [1,2,2,2,1,2,2,2,2,2,1,2,2,2,1], //Row 6
      [1,1,1,2,1,2,1,3,1,2,1,2,1,1,1], //Row 7
      [1,1,1,2,2,2,1,3,1,2,2,2,1,1,1], //Row 8
      [1,1,1,2,2,2,1,3,1,2,2,2,1,1,1], //Row 9
      [1,1,1,2,1,2,1,1,1,2,1,2,1,1,1], //Row 10
      [1,2,2,2,2,2,2,5,2,2,2,2,2,2,1], //Row 11
      [1,2,1,2,1,1,2,2,2,1,1,2,1,2,1], //Row 12
      [1,2,1,2,2,2,2,2,2,2,2,2,1,2,1], //Row 13
      [1,2,2,2,1,2,2,1,2,2,1,2,2,2,1], //Row 14
      [1,2,1,1,1,1,2,1,2,1,1,1,1,2,1], //Row 15
      [1,2,2,2,2,2,2,2,2,2,2,2,2,2,1], //Row 16
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], //Row 17
  	]
  	var el = document.getElementById('world');
    var score = 0;

  	function drawWorld(){
  		el.innerHTML = '';
  		for(var y = 0; y < map.length ; y = y + 1) {
  			for(var x = 0; x < map[y].length ; x = x + 1) {
  				if (map[y][x] === 1) {
  					el.innerHTML += "<div class='wall'></div>";
  				}
  				else if (map[y][x] === 2) {
  					el.innerHTML += "<div class='coin'></div>";
  				}
  				else if (map[y][x] === 3) {
  					el.innerHTML += "<div class='ground'></div>";
  				}
  				else if (map[y][x] === 4) {
  					el.innerHTML += "<div class='ghost'></div>";
  				}
  				else if (map[y][x] === 5) {
  					el.innerHTML += "<div class='pacman'></div>";
  				}
  			}
  			el.innerHTML += "<br>";
  		}
  	}
  	drawWorld();
  	document.onkeydown = function(event){
  		// console.log(event);
  		if (event.keyCode === 37){ // PACMAN MOVE LEFT
  			if ( map[pacman.y][pacman.x-1] !== 1){
  				map[pacman.y][pacman.x] = 3;
  				pacman.x = pacman.x - 1;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
          // score++
          // set counters html to be score
  			}
  		}
  		else if (event.keyCode === 38){ // PACMAN MOVE UP
  			if ( map[pacman.y-1][pacman.x] !== 1){
  				map[pacman.y][pacman.x] = 3;
  				pacman.y = pacman.y - 1;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}
  		else if (event.keyCode === 39){ // PACMAN MOVE RIGHT
  			if ( map[pacman.y][pacman.x+1] !== 1){
  				map[pacman.y][pacman.x] = 3;
  				pacman.x = pacman.x + 1;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}
  		else if (event.keyCode === 40){ // PACMAN MOVE DOWN
  			if ( map[pacman.y+1][pacman.x] !== 1){
  				map[pacman.y][pacman.x] = 3;
  				pacman.y = pacman.y + 1;
  				map[pacman.y][pacman.x] = 5;
  				drawWorld();
  			}
  		}

      drawWorld();

  	}
