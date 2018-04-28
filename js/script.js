var WINDOW_WIDTH = 1000
var WINDOW_HEIGHT = 600;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 230;
var RADIUS = 15;
var SPACE = 1;
var BE = 1;
var EN = 52;
var colors = [ "#008000", "#00bbff", "#8a2be2", "#c71585", "#dd291e", "#ffa500" ];
var run = false;
var students = [];
var numbers = 0;

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var okey = document.getElementById("okey");
var group = document.getElementById("group");
var txt = document.getElementById("txt");
txt.innerHTML = "";

canvas.width = Math.round(document.body.clientWidth * 0.9);
canvas.height = Math.round(document.body.clientWidth * 0.42);

RADIUS = Math.round((canvas.height - 2 * MARGIN_TOP - 9 * SPACE) / 20);
MARGIN_TOP = Math.round( ( canvas.height - 9 * SPACE ) * 0.1 );
MARGIN_LEFT = Math.round( ( canvas.width - 12 * SPACE - 15 * RADIUS * 2 ) / 2 );

function render( num ) {
    var num1 = parseInt(num / 10);
    var num2 = parseInt(num % 10);
    context.clearRect( 0, 0, canvas.width, canvas.height );
    context.fillStyle = colors[ parseInt(Math.random() * 1000) % colors.length ];
    renderDigit( MARGIN_LEFT, MARGIN_TOP, num1 );
    renderDigit( MARGIN_LEFT + 6 + RADIUS * 2 * 8, MARGIN_TOP, num2 );
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
    if ( run ) {
        return;
    }
    run = true;
    
    EN = document.getElementById("range").value;
    EN = EN >= 100 ? 99 : EN;
    EN = EN <= 1 ? 2 : EN;
    var num = [];
    for ( var i = 0; i < 15; i ++ ) {
        num.push( (Math.random() * 1000) % EN + BE  );
    }
    var count = 0;
   
    var int = setInterval(
        function() {
            if ( count == 14 ) {
                clearInterval( int );
                run = false;
            }
            render( num[count ++] );
        },
        170
    );
}

 group.onclick = function() {
    if ( run ) {
        return;
    }
    run = true; 

    students = [];
    EN = document.getElementById("range").value;
    EN = EN >= 100 ? 99 : EN;
    EN = EN <= 1 ? 2 : EN;
    numbers = document.getElementById("numbers").value;
    numbers = numbers >= 45 ? 45 : numbers;
    numbers = numbers <= 0 ? 1 : numbers;

    var q = 0;
    var num = [];
    var temp = 0;
    for ( var i = 0; i < numbers; i ++ ) {
        temp = parseInt((Math.random() * 1000) % EN + BE);
        if ( num.includes(temp) ) {
            i --;
        } else {
            num.push( temp );
        }
        q ++;
        if ( q == 10000005 ) {
            return;
        }
    }
    var count = 0;
    
    var int = setInterval(
    function() {
        if ( count == numbers ) {
            clearInterval( int );
            run = false;
            return;
        }
            students[count] = num[count];
            render( num[count ++] );
            print();
        },
        170
    );
}

function print() {
    var temp = "";
    for ( var i = 0; i < students.length - 1; i ++ ) {
        temp += parseInt(students[i]) + ", ";
    }
    temp += parseInt(students[students.length - 1]);
    txt.innerHTML = temp;
}