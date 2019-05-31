import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Sudoku } from './../src/sudoku.js';

function compileString(){
    let string = "";
    for(let i = 1; i < 82; i++){
        let selector = "#"+i;
        if($(selector).val()==''){
            string += "0";
        } else {
            string += $(selector).val();
        }
    }
    console.log(string);
    return string;
}

function getSolution(string){
    let thisSudoku = new Sudoku(string);
    let solution = thisSudoku.solveSudoku();
    return solution;
}

function populateBoard(string){
    for(let i = 1; i < 82; i++){
        let selector = "#" + i;
        $(selector).attr('value', string[i-1]);
    }
}


$(function(){
    $('#formOne').submit(function(e){
        e.preventDefault();
        let start = new Date().getTime();
        let solution = getSolution(compileString());
        if(!solution){
            $('#error').show();
        } else {
            populateBoard(solution);
            $('#runtime').text(new Date().getTime() - start);
            $('#outcome').show();
        }

        
    })



});