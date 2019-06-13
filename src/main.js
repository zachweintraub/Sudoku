import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import $ from 'jquery';
import { Sudoku } from './../src/sudoku.js';
import { puzzles } from './../src/puzzles';


console.log(puzzles.medium);

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
        if(string[i-1] == 0) {
            $(selector).val("");
        } else {
            $(selector).val(string[i-1]);
        }
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
        $('input').css('color', 'black');
        $('#error').hide();
        $('#outcome').hide();
        $('#invalid').hide();
        clearBoard();
    });

    $('#addEasy').click(function(){
        $('input').css('color', 'green');
        populateBoard(puzzles.easy[Math.floor(Math.random()*puzzles.easy.length)]);
    });
    $('#addMedium').click(function(){
        $('input').css('color', 'orange');
        populateBoard(puzzles.medium[Math.floor(Math.random()*puzzles.medium.length)]);
    });
    $('#addHard').click(function(){
        $('input').css('color', 'red');
        populateBoard(puzzles.hard[Math.floor(Math.random()*puzzles.hard.length)]);
    });
    $('#addEvil').click(function(){
        $('input').css('color', 'purple');
        populateBoard(puzzles.evil[Math.floor(Math.random()*puzzles.evil.length)]);
    });
});