import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {
    var reusableSudokuSolver;

    beforeEach(function() {
        reusableSudokuSolver = new Sudoku('536789214189234675427615398213597846695841732874326951958472163361958427742163589');
    });

    it('should test if user solution is not valid', function() {
        var userSudokuSolver = new Sudoku('136789214189234675427615398213597846695841732874326951958472163361958427742163589');
        expect(userSudokuSolver.sudokuChecker()).toEqual(false);
    });

    it('should test if user solution is valid', function() {
        expect(reusableSudokuSolver.sudokuChecker()).toEqual(true);
    });

    it('should test if function creates an array', function() {
        let expectedArray =  [
        [5, 3, 6, 7, 8, 9, 2, 1, 4],
        [1, 8, 9, 2, 3, 4, 6, 7, 5],
        [4, 2, 7, 6, 1, 5, 3, 9, 8],
        [2, 1, 3, 5, 9, 7, 8, 4, 6],
        [6, 9, 5, 8, 4, 1, 7, 3, 2],
        [8, 7, 4, 3, 2, 6, 9, 5, 1],
        [9, 5, 8, 4, 7, 2, 1, 6, 3],
        [3, 6, 1, 9, 5, 8, 4, 2, 7],
        [7, 4, 2, 1, 6, 3, 5, 8, 9]
        ]
        expect(reusableSudokuSolver.boardFormat).toEqual(expectedArray);
    });

    it('should test if user input is valid', function() {
        var userInput = new Sudoku('136789210189234675427015398213597806695841732874326950958472163361958427042163589');
        expect(userInput.moveChecker(4,0,8)).toEqual(true);
    });

    it('should test if user input is invalid (NaN)', function() {
        var userInput = new Sudoku('136789210189234675427015398213597806695841732874326950958472163361958427042163589');
        expect(userInput.moveChecker('x',0,8)).toEqual(false);
    });

    it('should test if user input is invalid', function() {
        var userInput = new Sudoku('136789210189234675427015398213597806695841732874326950958472163361958427042163589');
        expect(userInput.moveChecker(7,0,8)).toEqual(false);
    });
    
})