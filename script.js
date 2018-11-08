// NO GLOBAL VARIABLES. EVER. DON'T EVEN THINK ABOUT IT.

// This is the automatic function, and happens when the page is loaded.
function onLoad(){
    addRow();
}

// addRow() Adds a new category/weight row (up to 6)
function addRow(){
    if (document.getElementById("categories").rows.length < 12){
        // these are the variables
        var rowNumber = document.getElementById("categories").rows.length / 2;
        var titleRow = document.createElement("tr");
        var firstTitle = document.createElement("td");
        var secondTitle = document.createElement("td");
        if (document.getElementById("categoryTitle").value == ""){
            var categoryTitle = "Homework";
        } else {
            var categoryTitle = document.getElementById("categoryTitle").value;
            document.getElementById("categoryTitle").value = "";
        }

        var inputRow = document.createElement("tr");
        var firstInputContainer = document.createElement("td");
        var secondInputContainer = document.createElement("td");
        var scoreInput = document.createElement("input");
        scoreInput.setAttribute("class", "score");
        scoreInput.setAttribute("id", "s" + rowNumber);
        var weightInput = document.createElement("input");
        weightInput.setAttribute("class", "weight");
        weightInput.setAttribute("id", "w" + rowNumber);

        // this is where everything in the first row is appended
        titleRow.appendChild(firstTitle);
        titleRow.appendChild(secondTitle);
        document.getElementById("categories").appendChild(titleRow);

        // this is where everything in the second row is appended
        firstInputContainer.appendChild(scoreInput);
        secondInputContainer.appendChild(weightInput);
        inputRow.appendChild(firstInputContainer);
        inputRow.appendChild(secondInputContainer);
        document.getElementById("categories").appendChild(inputRow);

        // this is where everything is given its names classes, and automatic values
        firstTitle.innerHTML = categoryTitle + " Scores";
        secondTitle.innerText = "Percentage Weight";
        scoreInput.setAttribute("value", "1,3,24,40,42,66,67"); // These are the uniform numbers of (in order, with the exception of 67) Pee Wee Reese, Babe Ruth, Willie Mays, Brian Fuentes, Jackie Robinson, and Yasiel Puig. 67 is the number of seasons that Vin Scully called the Dodgers.
        var weights = document.getElementsByClassName("weight");
        var rowNumber = document.getElementsByClassName("weight").length;
        for (var i = 0; i < rowNumber; i++) {
            weights[i].value = 100 / rowNumber;
        }
    }
}

/* calculateGradeNeeded() → takes the current grade returned by calculateCurrentGrade() and the grade desired and does
the math to determine what the user needs on the final. */
/*function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
}*/

// This is just a test function.
function test(){
    var rawScores = [];
    for (var a = 0; a < document.getElementsByClassName("score").length; a++){
        rawScores.push(document.getElementById("s" + a).value);
    }
    var arrayScores = [];
    for (var b = 0; b < rawScores.length; b++){
        var numbers = convertArrayStringToNumber(rawScores);
        arrayScores.push(averageArray(numbers));
    }
    for (var i = 0; i < rawScores.length; i++){
        document.getElementById("testP").innerHTML += rawScores[i] + " " + arrayScores[i] + " || ";
    }
}

/* calculateCurrentGrade() → takes data from page, calls on sub-functions to calculate the student grade and output it
back to page.  Also “return” the result so that calculateGradeNeeded() can use it. */
function calculateCurrentGrade(){
    // this is where everything with the scores happens.
    var rawScores = document.getElementsByClassName("score");
    var arrayScores = [];
    for (var a = 0; a < rawScores.length; a++){
        var numbers = convertArrayStringToNumber(rawScores[a].value.toString());
        arrayScores.push(averageArray(numbers[a]));
    }

    // this is where the stuff for the weights happens.
    var rawWeights = document.getElementsByClassName("weight");
    var arrayWeights = [];
    for (var b = 0; b < document.getElementsByClassName("weight").length; b++){
        arrayWeights.push(convertArrayStringToNumber(rawWeights[b].value.toString()));
    }

    // this is where the grade is actually calculated, DOMed into HTML, and finally returned.
    var currentGrade = 0;
    for (var c = 0; c < arrayScores.length; c++){
        currentGrade += arrayScores[c].value * arrayWeights[c].value / 100;
    }
    document.getElementById("currentResult").innerHTML = "Your current grade is " + currentGrade;
    return currentGrade;
}

// averageArray() → takes an array of numbers and returns the average of those numbers
function averageArray(arr){
    var amount = 0;
    for (var i = 0; i < arr.length; i++){
        amount += arr[i];
    }
    return amount / arr.length;
}

/* convertArrayStringToNumber(string) → takes a string of comma separated values (from page) and returns it as an array of
numbers.  Use string.split(“,”)  to convert a string into an array of strings, then iterate through and convert each
item in the array into a number like: array[i] = parseInt(array[i]) */
function convertArrayStringToNumber(str){
    var stringArray = str.split(",");
    var arr = [];
    for (var i = 0; i < str.length; i++){
        arr[i] = parseInt(stringArray[i]);
    }
    return arr;
}