let winnOrLose
function hiddenButton() {
    winnOrLose = Math.floor(Math.random() * 3)
    for (let button of document.getElementsByTagName("button")) {
        button.addEventListener("click", function (e) {
            if ("winnerOrLoser" + winnOrLose == button.id) {
                button.innerHTML = "castigator"
            } else {
                button.innerHTML = "necastigator"
            }
        })
    }
}
window.onload = hiddenButton
