var calculation = ''
var result = ''

function submitInput(userInput) {
    if (userInput === '<') {
        let length = calculation.length
        let remove_character_index = length - 1

        calculation = calculation.slice(0, remove_character_index) + calculation.slice(remove_character_index + 1);
    }

    else {
        calculation = calculation + userInput
        console.log(calculation)
    }

    outputCalculation()
}

function postAndResponse() {
    // creating variables for ajax
    let xhr = new XMLHttpRequest();
    //let inputsJSON = {'inputs': inputs}

    // posting the values to flask
    xhr.open('post', '/api', true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.send(calculation);

    calculation = ''

    // responses to the ajax post
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {

            // change back to global if it doesn't work
            let response = JSON.parse(xhr.responseText)
            result = response['result'];
            outputResult()
        }
    }
}

function outputResult() {
    document.getElementById('result').innerText = 'Result: ' + result;
}

function outputCalculation() {
    document.getElementById('calculation').innerText = 'Calculation: ' + calculation;
}