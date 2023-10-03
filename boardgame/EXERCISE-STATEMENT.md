### Task

An ambitious game developer wants to make one of the top 10 games in the world. However, there is a problem. Because he makes board games, it takes a lot of his time to create the board and populate it with game pieces. To speed up this process, he has asked you to make his work quicker and simpler.

Your task is to create a function that first generates a board (two-dimensional array) and then populates that board with values using an array of pieces, where each piece is an object with board coordinates and the value of the piece within the board.

### Problem statement

The game designer gives you three arguments: length, width, and pieces. Each argument is as follows:

length (First argument): This is the length of the outer array of the two-dimensional array representation of the board.
width (Second argument): This is the length of the inner arrays of the two-dimensional array representation of the board.
pieces (Third argument): This is an array of objects where each object has the following properties:
row: Has a number value representing the index of the outer array of two-dimensional array representations of the board.
col: Has a number value representing the index of the inner array of two-dimensional array representations of the board.
value: Is the string value representing the piece that will be assigned to the respective index inside the two-dimensional array representation of the board.
Create a two-dimensional array of the respective length and width and populate it with the pieces’ values of the objects residing in the array, passed to the third (pieces) argument. All unpopulated indices will be assigned to " " value (a string with only a single space character).

###### NOTE: Make sure to ignore the objects with an out of bounds index in the array of pieces.
