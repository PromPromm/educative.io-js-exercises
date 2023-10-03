console.log('Hello World')
var generate = function(length, width, pieces)
{
    var board = []
    for (i=0; i < length; i++){
        board.push([])
        for (j=0; j < width; j++) {
          board[i].push(" ")
        }
    } 
    pieces.forEach((obj)=> {
      if ((obj["row"] >= 0 && obj["row"] < length) && (obj["col"] >= 0 && obj["col"] < width) ) {
        board[obj.row][obj.col] = obj.value
      }
    })
    return board
}
var pieces = [{"row": 0, "col": 0, "value": 'X'},
{"row": 0, "col": 1, "value": 'O'},
{"row": 0, "col": 2, "value": 'X'},
{"row": 1, "col": 0, "value": 'O'},
{"row": 1, "col": 1, "value": 'X'},
{"row": -3, "col": 2, "value": 'X'},
{"row": 1, "col": 2, "value": 'O'},
{"row": 2, "col": 0, "value": 'X'},
{"row": 2, "col": 1, "value": 'O'},
{"row": 2, "col": 2, "value": 'X'},
{"row": 7, "col": 14, "value": 'O'} ]

console.log(generate(3,3, pieces))