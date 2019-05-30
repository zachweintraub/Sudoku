import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Sudoku } from './../src/sudoku.js';

function compileString(){
    let string = "";
    for(let i = 1; i < 82; i++){
        let selector = "#"+i;
        console.log(selector);
        console.log($(selector).val());
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
        $(selector).val =  string[i-1];
    }
}


$(function(){
    $('#formOne').submit(function(e){
        e.preventDefault();
        populateBoard(getSolution(compileString()));

        
    })



});