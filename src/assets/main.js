let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
    answer = Math.floor(Math.random() * 9999);
    answer = answer.toString();

    switch(answer.length <= 4){
        case answer.length === 3:
          answer = "0" + answer
         break;

        case answer.length === 2:
        answer =  "00" + answer
         break;

         case answer.length === 1:
         answer = "000" + answer
         break;

         default:
            answer ==  answer;

    }


    attempt = 0;
    return answer;

}

console.log(setHiddenFields());