var inputs = ""

function submitInput(userInput) {
    if (userInput === '<') {
        let length = inputs.length
        let remove_character_index = length - 1
    }

    else {
        inputs = inputs + userInput
        console.log(inputs)
    }
}

function postAndResponse() {
    // creating variables for ajax
    let xhr = new XMLHttpRequest();
    let inputsJSON = {'inputs': inputs}

    // posting the values to flask

    xhr.open('post', '/api', true);
    xhr.send(inputsJSON);

    // responses to the ajax post
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {

            // change back to global if it doesn't work
            let results = JSON.parse(xhr.responseText)
            let result = results['result'];
        }
    }
}
