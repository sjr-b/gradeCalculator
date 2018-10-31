// NO GLOBAL VARIABLES. EVER. DON'T EVEN THINK ABOUT IT.

// This is the onload function, and happens when the page is loaded.
function onLoad(){
    addRow();
}

// addRow() Adds a new category/weight row (up to 6)
function addRow(){
    var row = document.createElement("tr");
    var firstData = document.createElement("td");
    var emptyBetween = document.createElement("td");
    var secondData = document.createElement("td");
    var categoryTitle = document.getElementsByTagName("input").value;
    document.getElementById("categories").appendChild(row);
    row.appendChild(firstData);
    row.appendChild(emptyBetween);
    row.appendChild(secondData);
    firstData.innerHTML = categoryTitle;
    firstData.innerText = "test";
    secondData.innerText = "Percentage";
    firstData.style.backgroundColor = "red";
    firstData.style.length = "25px";
    secondData.style.backgroundColor = "red";

    var buttonPlace = document.getElementById("firstBreak");
    var button = document.createElement("button");
    var buttonMessage = document.createTextNode("Add A Category");
    document.insertBefore(buttonPlace, button);
    button.innerHTML = buttonMessage;

    var textInput = document.createElement("input");
    textInput.setAttribute("type", "text");
    textInput.setAttribute("value", "");
    button.insertBefore(button, textInput);
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