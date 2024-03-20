let players = document.querySelectorAll("input")
let btns = document.querySelectorAll(".dice")
let score = document.querySelectorAll("span")
let endBtn = document.querySelector("#endButton")
let output = document.querySelector("#winMessage")

endBtn.disabled = true 

for (let t of btns) 
{ t.addEventListener("click", rollDice) }

let btnsCount = 0
function rollDice(eventDetails)
{
    eventDetails.target.disabled = true
    
    btnsCount = btnsCount + 1
    if(btnsCount==btns.length)
    { endBtn.disabled = false }

    let index = eventDetails.target.id.slice(-1) - 1

    let diceArray = [1,2,3,4,5,6]
    let randomIndex = parseInt(Math.random()*diceArray.length)
    let diceValue = diceArray[randomIndex]

    score[index].innerText = diceValue

}

endBtn.addEventListener("click", findWinner)

function findWinner()
{   
    let highestScore = 0
    for(let t of score)
    {
        if(t.innerText > highestScore)
        { highestScore = t.innerText}
    }

    let winnerIndex = []
    for(i=0; i<score.length; i++)
    { 
        if(+score[i].innerText==highestScore)
        { winnerIndex.push(i) }
    }

    let winners = ""
    for(let t of winnerIndex)
    {
        winners = winners + players[t].value + ","
    }


    winners = winners.slice(0,-1)

    output.innerHTML = ` <br> ${winners} wins`

}