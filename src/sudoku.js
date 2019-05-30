export class Sudoku {
    constructor(string) {
        this.allNums = string;
        this.boardFormat = this.makeSudoku();
    }

    //convert a string of 81 single-digit integers into a sudoku grid
    makeSudoku(){
        var sudoku = [];
      for(let i = 0; i < 81; i+=9){
          sudoku.push(this.allNums.substring(i, i+9).split('').map(x=>parseInt(x)));
      }
      return sudoku;
    }
    
    //check whether a completed sudoku board is correct
    sudokuChecker(){
      function getSum(total, num) {
        return total += num;
      }
        const goal = 45;
        let sudoku = this.boardFormat;
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

    //check whether a given number already exists within the same row, column, and block
    moveChecker(num, yCoord, xCoord) {
      let boardFormat = this.boardFormat;
      if(num.isNan()){
        return false;
      }
      //check the row
      for(let i = 0; i < 9; i++){
        if(boardFormat[yCoord][i] == num && i != xCoord){
          return false;
        }
      }
      //check the column
      for(let i = 0; i < 9; i++){
        if(boardFormat[i][xCoord] == num && i != yCoord){
          return false;
        }
      }
      //check the block
      //top row of blocks
      if(yCoord < 3){
        //left block
        if(xCoord < 3){
          for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
        //middle block
        if(xCoord > 2 && xCoord < 6){
          for(let i = 0; i < 3; i++){
            for(let j = 3; j < 6; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
        //right block
        if(xCoord > 5){
          for(let i = 0; i < 3; i++){
            for(let j = 6; j < 9; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
      }
      //middle row of blocks
      if(yCoord > 2 && yCoord < 6){
        //left block
        if(xCoord < 3){
          for(let i = 3; i < 6; i++){
            for(let j = 0; j < 3; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
        //middle block
        if(xCoord > 2 && xCoord < 6){
          for(let i = 3; i < 6; i++){
            for(let j = 3; j < 6; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
        //right block
        if(xCoord > 5){
          for(let i = 3; i < 6; i++){
            for(let j = 6; j < 9; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
      }
      //bottom row of blocks
      if(yCoord > 5){
        //left block
        if(xCoord < 3){
          for(let i = 6; i < 9; i++){
            for(let j = 0; j < 3; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
        //middle block
        if(xCoord > 2 && xCoord < 6){
          for(let i = 6; i < 9; i++){
            for(let j = 3; j < 6; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
        //right block
        if(xCoord > 5){
          for(let i = 6; i < 9; i++){
            for(let j = 6; j < 9; j++){
              if(boardFormat[i][j] == num && yCoord != i && xCoord != j){
                return false;
              }
            }
          }
        }
      }
      return true;
    }
}