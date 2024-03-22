//     document.addEventListener('DOMContentLoaded', function () {
//     const diceButtons = document.querySelectorAll('.dice');
//     const valueSpans = document.querySelectorAll('span');
//     const endButton = document.getElementById('endButton');
//     const winMessage = document.getElementById('winMessage');

//     let values = [];

//     // Function to generate a random number between 1 and 6 (inclusive)
//     function rollDice() {
//         return Math.floor(Math.random() * 6) + 1;
//     }

//     // Function to update the value span with the rolled dice value
//     function updateValue(index, value) {
//         valueSpans[index].textContent = value;
//     }

//     // Event listener for each dice button
//     diceButtons.forEach((button, index) => {
//         button.addEventListener('click', () => {
//             const newValue = rollDice();
//             values[index] = newValue;
//             updateValue(index, newValue);
//         });
//     });

//     // Event listener for end button
//     endButton.addEventListener('click', () => {
//         const max = Math.max(...values);
//         const winners = values.reduce((acc, val, index) => {
//             if (val === max) acc.push(index);
//             return acc;
//         }, []);

//         if (winners.length === 1) {
//             winMessage.textContent = `Congratulations ${document.querySelectorAll('input')[winners[0]].value}! You win with a score of ${max}.`;
//         } else {
//             let winnersString = winners.map(winnerIndex => document.querySelectorAll('input')[winnerIndex].value).join(' and ');
//             winMessage.textContent = `It's a tie between ${winnersString} with a score of ${max}.`;
//         }
//     });
// });
let players=document.querySelectorAll("input");
let btns=document.querySelectorAll(".dice");
let score=document.querySelectorAll("span");
let endButton=document.querySelector("#endButton")
let winMessage=document.querySelector("#winMessage")
console.log(score) // no span then nothing to select

//btns=[btns1,btns2,btns3,btns4,btns5]

// btns[0].addEventListener("click",rollDice)
// btns[1].addEventListener("click",rollDice)
// btns[2].addEventListener("click",rollDice)
// btns[3].addEventListener("click",rollDice)
endButton.disabled=true;
for(let t of btns){
t.addEventListener("click", rollDice)
}
let btnClickCount=0
function rollDice(eventDetails){
    console.log(eventDetails)

    //roll dice(1-6)
    let diceValue=1+parseInt(Math.random()*6)//between 0 to 6
    //add the dice value to the score[span,span,span,span]

    let clickedButton=eventDetails.target
    console.log(clickedButton)//this gives details about all 5 btns
    let clickedButton_id=clickedButton.diceValue
    console.log(clickedButton_id)//btn1
    let btn_id=clickedButton_id[3]
    let btn_index=btn_id-1
    concole.lo(btn_index)//0
    

    console.log(score)
    score[btn_index].innerText=diceValue

    //disable the button

    clickedButton.disabled=true;

    btnClickCount=btnClickCount+1
    if(btnClickCount==5){
        endButton.disabled=false;
    }



}
endButton.addEventListener("click".findWinner)

function findWinner(){
    //find the highest score

    let highestScore=0;
    for(let t of score){
        console.lof(t)
        let score_value=t.innerText;
        concole.log(score_value)

        if(score_value>highestScore){
            highestScore=score_value
            // winnerIndex.push(i)//add the value at the end of array
        }
    }
    console.log(highestScore)

    //find the index of all players with the highest score

    // let playerNames=""
    // for(let t of winnerIndex){
    //     playerNames
    // }
    let winnerIndex=[]
    for(let i=0;i<=score.length-1;i++){
        let score_value=score[i].innerText
        console.log(score_value)
        if(score_value==highestScore){
            winnerIndex.push(i)//add the value at the end oof array
        }
    }
    //find the names of the player with the highest score
    let playernames=""
    for(let t of winnerIndex){
        playernames=playernames+players[t].value+","
    }

    //console.log(playernames)
    //display the winner
    winMessage.innerText=playernames+"wins"



}