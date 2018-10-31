// NO GLOBAL VARIABLES. EVER. DON'T EVEN THINK ABOUT IT.

// This is the automatic function, and happens when the page is loaded.
function onLoad(){
    addRow();
}

// addRow() Adds a new category/weight row (up to 6)
function addRow(){
    if (document.getElementById("categories").rows.length < 12){
        // these are the variables
        var titleRow = document.createElement("tr");

        var firstTitle = document.createElement("td");
        firstTitle.setAttribute("class", "title");
        var secondTitle = document.createElement("td");
        secondTitle.setAttribute("class", "title");
        if (document.getElementById("categoryTitle").value == ""){
            var categoryTitle = "Homework";
        } else {
            var categoryTitle = document.getElementById("categoryTitle").value;
        }

        var inputRow = document.createElement("tr");

        var firstInputContainer = document.createElement("td");
        firstInputContainer.setAttribute("class", "inputCont");
        var secondInputContainer = document.createElement("td");
        secondInputContainer.setAttribute("class", "inputCont");

        var scoreInput = document.createElement("input");
        scoreInput.setAttribute("id", categoryTitle + " score");
        scoreInput.setAttribute("class", "input");
        var weightInput = document.createElement("input");
        weightInput.setAttribute("id", categoryTitle + " weight");
        weightInput.setAttribute("class", "input");

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

        // this is where everything is styled.
        firstTitle.innerHTML = categoryTitle + " Scores";
        secondTitle.innerText = "Percentage Weight";

        // this is how the category title input is reset.
        document.getElementById("categoryTitle").value = "";
    }
}

/* convertArrayStringToNumber(string) → takes a string of comma separated values (from page) and returns it as an array of
numbers.  Use string.split(“,”)  to convert a string into an array of strings, then iterate through and convert each
item in the array into a number like: array[i] = parseInt(array[i]) */
function convertArrayStringToNumber(string){
    var testString = "";
    var array = [];
    for(var i = 0; i < string.length; i++){
        if(string.substring(i, i+1) == ","){
            for(var j = i; j >= 0; j--){
                if (string.substring(j, j+1) == "," || j == 0){
                    var number = string.slice(j, i+1);
                    testString += number;
                    array.push(number);
                }
            }
        }
    }
    document.getElementById("testResult").innerHTML = testString;
}

// averageArray() → takes an array of numbers and returns the average of those numbers
function averageArray(){

}

/* calculateCurrentGrade() → takes data from page, calls on sub-functions to calculate the student grade and output it
back to page.  Also “return” the result so that calculateGradeNeeded() can use it. */
function calculateCurrentGrade(){

}

/* calculateGradeNeeded() → takes the current grade returned by calculateCurrentGrade() and the grade desired and does
the math to determine what the user needs on the final. */
function calculateGradeNeeded(){

}