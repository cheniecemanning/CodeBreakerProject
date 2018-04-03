let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (!validateInput(input.value)){   
        return false;
    } else{
        attempt.value++; 
    }
}

function getResults(input){
    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

    for(i = 0; i < input.length; i++){
        if (input.value.charAt(i) == answer.value.charAt(i)){
            html += '<span class="glyphicon glyphicon-ok"></span>';
        } else if (answer.value.includes(input.value.chartAt(i))){
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        }else{
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>'
}
//implement new functions here
function setHiddenFields(){
    answer.value = Math.floor(Math.random() * 9999);
    answer.value = answer.value.toString();

    switch(answer.value.length <= 4){
        case answer.value.length === 3:
          answer.value = "0" + answer.value
         break;

        case answer.length === 2:
        answer.value =  "00" + answer.value
         break;

         case answer.length === 1:
         answer.value = "000" + answer.value
         break;

         default:
            answer.value ==  answer.value;
    }

    attempt.value = 0;
    return answer;
}

function setMessage(message){
   document.getElementById('message').innerHTML = message;
}

function validateInput(input){
    if (input.length === 4){ 
        return true;
    } else{
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}
console.log(setHiddenFields());