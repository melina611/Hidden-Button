let winnOrLose
function hiddenButton() {
    winnOrLose = Math.floor(Math.random() * 3)
    document.getElementById("buttonGroup").addEventListener("click", function (e) {
        if (winnOrLose == 0) {
            if (e.target === document.getElementById("winnerOrLoser0")) {
                document.getElementById("winnerOrLoser0").innerHTML = "winner"
            } else if (e.target === document.getElementById("winnerOrLoser1")) {
                document.getElementById("winnerOrLoser1").innerHTML = "loser"
            } else {
                document.getElementById("winnerOrLoser2").innerHTML = "loser"
            }
        }
        if (winnOrLose == 1) {
            if (e.target === document.getElementById("winnerOrLoser0")) {
                document.getElementById("winnerOrLoser0").innerHTML = "loser"
            } else if (e.target === document.getElementById("winnerOrLoser1")) {
                document.getElementById("winnerOrLoser1").innerHTML = "winner"
            } else {
                document.getElementById("winnerOrLoser2").innerHTML = "loser"
            }
        }
        if (winnOrLose == 2) {
            if (e.target === document.getElementById("winnerOrLoser0")) {
                document.getElementById("winnerOrLoser0").innerHTML = "loser"
            } else if (e.target === document.getElementById("winnerOrLoser1")) {
                document.getElementById("winnerOrLoser1").innerHTML = "loser"
            } else {
                document.getElementById("winnerOrLoser2").innerHTML = "winner"
            }
        }
    })
}
window.onload = hiddenButton