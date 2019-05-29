import Sudoku from './../src/sudoku.js';

describe('Sudoku', function() {
    // console.log(Sudoku);
    var reusableSudokuChecker;

    beforeEach(function() {
        reusableSudokuChecker = new Sudoku('536789214189234675427615398213597846695841732874326951958472163361958427742163589');
    });

    it('should test if user solution is valid', function() {
        expect(reusableSudokuChecker.sudokuChecker()).toEqual(true);
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
        expect(reusableSudokuChecker.makeSudoku()).toEqual(expectedArray);
    });
    it('should pass', function() {
        expect(1).toEqual(1);
    });
    
})