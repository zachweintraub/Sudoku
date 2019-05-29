export class Sudoku {
    constructor(string) {
        this.allNums = string;
    }

    makeSudoku(){
        var sudoku = [];
      for(let i = 0; i < 81; i+=9){
          sudoku.push(this.allNums.substring(i, i+9).split('').map(x=>parseInt(x)));
      }
      return sudoku;
    }
    
    sudokuChecker(){
      function getSum(total, num) {
        return total += num;
      }
        const goal = 45;
        let sudoku = this.makeSudoku();
      console.log(sudoku);
      for(let i = 0; i<9; i++){
          if(sudoku[i].reduce(getSum) != goal){
            return false;
        }
      }
      for(let i = 0; i<9; i++){
          let sum = 0;
            for(let j = 0; j<9; j++){
            sum += sudoku[j][i];
        }
        if(sum != goal){
        return false;
        }
      }
      
      for(let i = 0; i < 9; i+=3){
          for(let j = 0; j < 9; j+=3){
            let sum = 0;
          for(let k = 0; k < 3; k++){
              sum += sudoku[j+k].slice(i, i+3).reduce(getSum);
            console.log(sudoku[j+k].slice(i, i+3));
          }
          if(sum != goal){
              return false;
          }
        }
      }
      return true;
    }
}