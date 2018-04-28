var WINDOW_WIDTH = 1000
var WINDOW_HEIGHT = 600;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 230;
var RADIUS = 15;
var SPACE = 1;
var BE = 1;
var EN = 52;
var colors = [ "#008000", "#00bbff", "#8a2be2", "#c71585", "#dd291e", "#ffa500" ];

var okey = document.getElementById("okey");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

function render( num ) {
	var num1 = parseInt(num / 10);
	var num2 = parseInt(num % 10);
	context.clearRect( 0, 0, WINDOW_WIDTH, WINDOW_HEIGHT );
	context.fillStyle = colors[ parseInt(Math.random() * 1000) % colors.length ];
	renderDigit( MARGIN_LEFT, MARGIN_TOP, num1 );
	renderDigit( MARGIN_LEFT + 7 + RADIUS * 2 * 8, MARGIN_TOP, num2 );
}

function renderDigit( x, y, num ) {
	for ( var i = 0; i < digit[num].length; i ++ ) {
		for (var j = 0; j < digit[num][i].length; j ++) {
			if ( digit[num][i][j] == 1 ) {
				context.beginPath();
				context.arc( x + SPACE * j + RADIUS * 2 * j + RADIUS, y + SPACE * i + RADIUS * 2 * i + RADIUS, RADIUS, 0, 2*Math.PI );
				context.closePath();
				context.fill();
			}
		}
	}
	
}

okey.onclick = function() {
	EN = document.getElementById("range").value;
	var numbers = [];
	for ( var i = 0; i < 15; i ++ ) {
		numbers.push( (Math.random() * 1000) % EN + BE  );
	}
	var count = 0;
	var int = setInterval(
		function() {
			if ( count == 14 ) {
				clearInterval( int );
			}
			render( numbers[count ++] );
		},
		170
	);
}