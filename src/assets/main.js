let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
    answer = Math.floor(Math.random() * 10000).toString;

    switch(answer.value.length <= 4){
        case answer.value.length === 3:
         answer.value += "0" + answer
         break;

        case answer.value.length === 2:
         answer.value += "00" + answer
         break;

         case answer.value.length === 1:
         answer.value += "000" + answer
         break;

         default:
            answer.value ==  answer;

    }


    attempt = 0;


}

console.log(setHiddenFields());