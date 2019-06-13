
$(document).ready(function() {
    $("form#romanizeForm").submit(function(event) {

    var userInput = parseInt($("#userInput").val());
// var I = 1;
// var V = 5;
// var X = 10;
// var L = 50;
// var C = 100;
// var D = 500;
// var M = 1000;

// var romanNumerals = [I, V, X, L, C, D, M]

//     function romanize(value) {
//     //    if (value === I) {
//     //        return "I";
//     //     } else if (value === V) {
//     //        return "V";
//     //    } else if (value === X) {
//     //     return "X";
//     //    } else if (value === L) {
//     //     return "L";
//     //    } else if (value === C) {
//     //        return "C";
//     //    } else if (value === D) {
//     //        return "D";
//     //    } else if (value === M) {
//     //        return "M";
//     //    }

//     //    if (value > (3*I) && value < V) {
//     //        return "IV";
//     //    } 

//     //    trying a for loop here

//        for (let index = 0; index < romanNumerals.length; index++) {
//            if (value < I || value > 3999) {
//                return false;          
//             } else if (value > romanNumerals[index]) {
//                 return romanNumerals[index] + romanize(value - romanNumerals[index])
//             }
           
//        }

//     }
    
    
//     }
    
    // var testCases = [
    //     1,
    //     5,
    //     10,
    //     50,
    //     100,
    //     500,
    //     1000,
    //     4
    // ];

    // function test() {
    //     testCases.forEach(function(test){
    //         console.log(test + '\t' + romanize(test));
    //     });
    // }

    // test();

    function romanize(value) {
        var literals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
        for (var i = 0; i < literals.length; i++) {
            if(value < 1)
                return "";       
    
            if(value >= literals[i]) {
                return romanNumerals[i] + romanize(value - literals[i]);        
            }
        }
    }
    
    var resultant = romanize(userInput);

    $("#resultantPrint").append("<p>"+resultant +"</p>");



event.preventDefault();
});
});


