let finalPara = document.getElementById("finalPara");
let userInput = document.getElementById("userInput");

let randumNumber = Math.ceil(Math.random() * 100);
console.log(randumNumber)

function checkGuess() {
    let gussedElement = parseInt(userInput.value);
    console.log(gussedElement)

    if (gussedElement > randumNumber) {
        finalPara.textContent = "Too High! Try Again!";
        finalPara.style.backgroundColor = "#1e217c";
    } else if (gussedElement < randumNumber) {
        finalPara.textContent = "Too Low! Try Again!";
        finalPara.style.backgroundColor = "#1e217c";
    } else if (gussedElement === randumNumber) {
        finalPara.textContent = "Congrats! You Got It!";
        finalPara.style.backgroundColor = "green";
    } else {
        finalPara.textContent = "Pls Enter A Valid Input!";
        finalPara.style.backgroundColor = "#1e217c";
    }

}
