
$(document).ready(function() {
    $("form#romanizeForm").submit(function(event) {
        event.preventDefault();
    });
    var userInput = parseInt($("#userInput").val());

var V = 5;


    function romanize(value) {
       if (value === 1) {
           return "I";
        } else if (value === 5) {
           return "V";
       } else if (value === 10) {
        return "X";
       } else if (value === 50) {
        return "L";
       } else if (value === 100) {
           return "C";
       } else if (value === 500) {
           return "D";
       } else if (value === 1000) {
           return "M";
       }
    
    
    }
    
    var testCases = [
        5,
        10,
        100,
        1000
    ];

    function test() {
        testCases.forEach(function(test){
            console.log(test + '\t' + romanize(test));
        });
    }

    test();
    
});

