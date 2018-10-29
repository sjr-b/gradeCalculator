// NO GLOBAL VARIABLES. EVER. DON'T EVEN THINK ABOUT IT.

function setUpPage(){
    var rowCount = 0;
    var firstSection = "Homework";
    addRow(rowCount, firstSection);
    var sectionTitle = document.getElementById("userInput").value;
}

/* addRow() Adds a new category/weight row (up to 6) */
function addRow(rowCount, input){
    if(rowCount <= 6){
        // these are the variables for the table (oh-so-creatively named after the html code)
        var row = document.createElement("tr");
        var data = document.createElement("td");

        // this is where the rows and data are appended
        document.getElementById("gradeWeight").appendChild(row);
        row.append(data);

        // these inputs the border
        document.getElementById("gradeWeight").style.border = "1px solid black";
        data.style.border = "1px solid black";

        // this helps make sure that there are only six sections.
        data.innerHTML = input;
        rowCount++;
    }
}

/* convertArrayStringToNumber(string) → takes a string of comma separated values (from page) and returns it as an array of
numbers.  Use string.split(“,”)  to convert a string into an array of strings, then iterate through and convert each
item in the array into a number like: array[i] = parseInt(array[i]) */
function convertArrayStringToNumber(){

}

/* averageArray() → takes an array of numbers and returns the average of those numbers */
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