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

function validateInput(string) {
    let thisSudoku = new Sudoku(string);
    return thisSudoku.verifyInput();
}

function getSolution(string){
    let thisSudoku = new Sudoku(string);
    let solution = thisSudoku.solveSudoku();
    return solution;
}

function populateBoard(string){
    for(let i = 1; i < 82; i++){
        let selector = "#" + i;
        $(selector).val(string[i-1]);
    }
}

function clearBoard(){
    console.log('i am clearing');
    $('input').val('');
    for(let i = 1; i < 82; i++){
        let selector = "#" + i;
        $(selector).attr('value', '');
    }
}


$(function(){
    $('#formOne').submit(function(e){
        e.preventDefault();
        $('#error').hide();
        $('#outcome').hide();
        $('#invalid').hide();
        let start = new Date().getTime();
        if(!validateInput(compileString())) {
            $('#invalid').show();
        } else {
            let solution = getSolution(compileString());
            if(!solution){
                $('#error').show();
            } else {
                populateBoard(solution);
                $('#runtime').text(new Date().getTime() - start);
                $('#outcome').show();
            }
        }
        
    });

    $('#clearButton').click(function(){
        $('#error').hide();
        $('#outcome').hide();
        $('#invalid').hide();
        clearBoard();
    })

});