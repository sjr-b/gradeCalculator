// NO GLOBAL VARIABLES. EVER. DON'T EVEN THINK ABOUT IT.

// This is the onload function, and happens when the page is loaded.
function onLoad(){
    addRow();
}

// addRow() Adds a new category/weight row (up to 6)
function addRow(){
    // these are the variables
    var firstRow = document.createElement("tr");
    var firstData = document.createElement("td");
    firstData.setAttribute("class", "catTitle");
    var secondData = document.createElement("td");
    if (document.getElementById("categoryTitle").value == ""){
        var categoryTitle = "Homework"
    } else {
        var categoryTitle = document.getElementById("categoryTitle").value;
    }
    secondData.setAttribute("class", "perTitle")
    var secondRow = document.createElement("tr");
    var secondFirstData = document.createElement("tr");
    var secondSecondData = document.createElement("tr");
    var inputScores = document.createElement("input");
    inputScores.setAttribute("id", categoryTitle + "scores");
    inputScores.setAttribute("class", "inp");
    var inputWeight = document.createElement("input");
    inputWeight.setAttribute("id", categoryTitle + "weight");
    inputWeight.setAttribute("class", "inp");

    // this is where everything in the first row is appended
    document.getElementById("categories").appendChild(firstRow);
    firstRow.appendChild(firstData);
    firstRow.appendChild(secondData);

    // this is where everything in the second row is appended
    document.getElementById("categories").appendChild(secondRow);
    secondRow.appendChild(secondFirstData);
    secondRow.appendChild(secondSecondData);
    secondFirstData.appendChild(inputScores);
    secondSecondData.appendChild(inputWeight);

    // this is where everything is styled
    document.getElementById("categories").style.border = "2px solid black";
    firstData.innerHTML = categoryTitle + " Scores";
    secondData.innerText = "Percentage";
    firstData.style.border = "1px dashed black";
    secondData.style.border = "1px dashed black";

    // this is how the category title input is reset.
    document.getElementById("categoryTitle").value = "";
}

/* convertArrayStringToNumber(string) → takes a string of comma separated values (from page) and returns it as an array of
numbers.  Use string.split(“,”)  to convert a string into an array of strings, then iterate through and convert each
item in the array into a number like: array[i] = parseInt(array[i]) */
function convertArrayStringToNumber(){

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

// This function makes sure that addRun