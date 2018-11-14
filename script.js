// This is the automatic function, and happens when the page is loaded.
function onLoad(){
    addRow();
}

// This adds two new rows, one for the title and another for the inputs.
function addRow(){
    if (document.getElementById("categories").rows.length < 12){
        // These are the variables that are u
        var rowNumber = document.getElementById("categories").rows.length / 2;
        var titleRow = document.createElement("tr");
        var firstTitle = document.createElement("td");
        firstTitle.setAttribute("class", "ft");
        firstTitle.setAttribute("id", "ft" + rowNumber);
        var secondTitle = document.createElement("td");
        secondTitle.setAttribute("class", "st");
        secondTitle.setAttribute("id", "st" + rowNumber);
        if (document.getElementById("categoryTitle").value == ""){
            var categoryTitle = "Homework";
        } else {
            var categoryTitle = document.getElementById("categoryTitle").value;
            document.getElementById("categoryTitle").value = "";
        }

        var inputRow = document.createElement("tr");
        var firstInputContainer = document.createElement("td");
        firstInputContainer.setAttribute("id", "ic" + rowNumber);
        var secondInputContainer = document.createElement("td");
        secondInputContainer.setAttribute("id", "sic" + rowNumber);
        var scoreInput = document.createElement("input");
        scoreInput.setAttribute("class", "score");
        var weightInput = document.createElement("input");
        weightInput.setAttribute("class", "weight");

        // This is where everything in the first row is appended
        titleRow.appendChild(firstTitle);
        titleRow.appendChild(secondTitle);
        document.getElementById("categories").appendChild(titleRow);

        // This is where everything in the second row is appended
        firstInputContainer.appendChild(scoreInput);
        secondInputContainer.appendChild(weightInput);
        inputRow.appendChild(firstInputContainer);
        inputRow.appendChild(secondInputContainer);
        document.getElementById("categories").appendChild(inputRow);

        // This is where everything is given its text and automatic values.
        firstTitle.innerHTML = categoryTitle + " Scores";
        secondTitle.innerHTML = "Percentage Weight";
        scoreInput.setAttribute("value", "1,2,3,22,24,40,42,66,67"); // These are the uniform numbers of (in order, with the exception of 67) Pee Wee Reese, Chase d'Arnaud, Babe Ruth, Clayton Kershaw, Willie Mays, Brian Fuentes, Jackie Robinson, and Yasiel Puig. 67 is the number of seasons that Vin Scully called the Dodgers.
        var weights = document.getElementsByClassName("weight");
        var rowAmount = document.getElementsByClassName("weight").length;
        if (rowAmount == 1 || rowAmount == 2 | rowAmount == 4 | rowAmount == 5){
            for (var a = 0; a < rowAmount; a++) {
                weights[a].value = 100 / rowAmount;
            }
        } else if (rowAmount == 3){
            weights[0].value = 30;
            weights[1].value = 30;
            weights[2].value = 40;
        } else if (rowAmount == 6){
            for (var b = 0; b < 5; b++){
                weights[b].value = 15;
            }
            weights[5].value = 25;
        }
    }
    for (var i = 0; i < document.getElementById("categories").rows.length / 2; i++){
        document.getElementById("ft" + i).style.backgroundColor = "white";
        document.getElementById("st" + i).style.backgroundColor = "white";
        document.getElementById("ic" + i).style.backgroundColor = "white";
        document.getElementById("sic" + i).style.backgroundColor = "white";
    }
}

// This calculates the grade that the user needs to get on their final.
function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
    if (currentGrade != null){
        var desiredGrade = document.getElementById("gradeDesired").value;
        var finalWeight = document.getElementById("finalWeight").value / 100;
        var neededGrade = (desiredGrade - currentGrade * (1 - finalWeight)) / finalWeight;
        var roundedNeededGrade = neededGrade.toFixed(2);
        if (0 < roundedNeededGrade){
            document.getElementById("requiredResult").innerHTML = "You need a minimum grade of " + roundedNeededGrade + "% on the final.";
        } else {
            document.getElementById("requiredResult").innerHTML = "You could score a zero on the final and still get a " + desiredGrade + "% in the class! Wow, good job!";
        }
        if (95 <= roundedNeededGrade && roundedNeededGrade <= 100){
            document.getElementById("requiredResult").innerHTML += " Good luck!";
        } else if (100 < roundedNeededGrade){
            document.getElementById("requiredResult").innerHTML += " Best of luck!";
        }
    } else {
        // These are just to reset the colors in case something went wrong.
        for (var i = 0; i < document.getElementById("categories").rows.length / 2; i++){
            document.getElementById("ft" + i).style.backgroundColor = "white";
            document.getElementById("st" + i).style.backgroundColor = "white";
            document.getElementById("ic" + i).style.backgroundColor = "white";
            document.getElementById("sic" + i).style.backgroundColor = "white";
        }
    }
}

// This calculates what grade the student currently has.
function calculateCurrentGrade(){
    // This is just to clear the "grade needed" report when people press the "calculate current grade" button, so that the numbers don't mismatch.
    document.getElementById("currentResult").innerHTML = "";

    // This is where the weights are all put into an array of numbers.
    var rawWeights = document.getElementsByClassName("weight");
    var arrayWeights = [];
    for (var b = 0; b < rawWeights.length; b++){
        arrayWeights[b] = convertArrayStringToNumber(rawWeights[b].value.toString());
    }

    // This checks to make sure that all of the weights actually add up to 100. If not, the user is notified and the page resets.
    if (checkWeight() != 100){
        alert("Oops, the weights do not add up to one hundred! Please check them. Thank you!");
        return null;
    }

    // This is where an array of scores is formed, and where the user is notified as to how bad of a grade they have in each section.
    var rawScores = document.getElementsByClassName("score");
    var arrayScores = [];
    for (var a = 0; a < rawScores.length; a++){
        var numbers = convertArrayStringToNumber(rawScores[a].value.toString());
        for (var d = 0; d < numbers.length; d++){
            var nanCheck = Number.isNaN(numbers[d]);
            if (nanCheck == true){
                alert("Unfortunately, there seems to be an issue! Your inputs are either incomplete or contain something other than numbers or commas (in the exact format of #,#,#,#). Please recheck your inputs, thank you!");
                return null;
            } else if (numbers[d] < 0){
                alert("Hi! Please recheck your scores, as it seems that one of them is negative. It is almost certainly impossible for you to get a negative grade on an assignment. If your teacher really did give you that grade, well... I'm sorry.");
                return null;
            } else if (110 < numbers[d]){
                alert("Hello user! We're so sorry, but we don't think that any teacher would give you above 110% on an assignment. Please recheck your numbers. Thank you!");
                return null;
            }
        }
        arrayScores[a] = averageArray(numbers);
        // These colors will indicate to the user how their grade in each section is.
        document.getElementById("ft" + a).style.backgroundColor = giveColor(averageArray(numbers));
        document.getElementById("st" + a).style.backgroundColor = giveColor(averageArray(numbers));
        document.getElementById("ic" + a).style.backgroundColor = giveColor(averageArray(numbers));
        document.getElementById("sic" + a).style.backgroundColor = giveColor(averageArray(numbers));
    }


    // This is where the grade is calculated, DOMed onto the page, and then returned.
    var currentGrade = 0;
    for (var c = 0; c < arrayScores.length; c++){
        currentGrade += arrayScores[c] * arrayWeights[c] / 100;
    }
    var roundedCurrentGrade = currentGrade.toFixed(2);
    if (roundedCurrentGrade == NaN){
        alert("Unfortunately, there seems to be an issue! There appears to be a few words inputted to the scores sections. The only thing that you can have there is numbers and commas. Please recheck your inputs, thank you!");
        return null;
    }
    document.getElementById("currentResult").innerHTML = "Your current grade is " + roundedCurrentGrade + "%.";
    return currentGrade;
}

// This function takes an array of numbers and averages all of them.
function averageArray(arr){
    var amount = 0;
    for (var i = 0; i < arr.length; i++){
        amount += arr[i];
    }
    return amount / arr.length;
}

// This function converts an array of strings into an array of numbers.
function convertArrayStringToNumber(str){
    var stringArray = str.split(",");
    var arr = [];
    for (var i = 0; i < stringArray.length; i++){
        arr[i] = parseInt(stringArray[i]);
    }
    return arr;
}

// This function just returns the color that the program should give each section based on the grade. It is based pretty heavily off of Illuminate.
function giveColor(grade){
    if (grade == null){
        return "white";
    } else if (grade < 60){
         return "indianred";
    } else if (60 <= grade && grade < 70){
        return "lightsalmon";
    } else if (70 <= grade && grade < 80){
        return "lightgoldenrodyellow";
    } else if (80 <= grade && grade < 90){
        return "lightcyan";
    } else if (90 <= grade && grade < 100){
        return "lightgreen";
    } else if (100 <= grade){
        return "green";
    }
}


// This function checks all of the weights to make sure that they all add up to 100%.
function checkWeight(){
    var raw = document.getElementsByClassName("weight");
    var arrComp = [];
    for (var i = 0; i < raw.length; i++){
        arrComp[i] = parseFloat(raw[i].value.toString());
    }
    var count = 0;
    for (var j = 0; j < arrComp.length; j++){
        count += arrComp[j];
    }
    return count;
}

// This is a secret comment. Not really, just saying hi to whoever happens to be reading this. Hello!