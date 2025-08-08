const p1 = {
    score: 0,
    display: document.querySelector("#player-1-score"),
    button: document.querySelector("#p1")
}

const p2 = {
    score: 0,
    display: document.querySelector("#player-2-score"),
    button: document.querySelector("#p2")
}

const select = document.querySelector("#goal");
const reset = document.querySelector("#reset");

let winningScore = 3;

reset.addEventListener('click', resetGame);

select.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetGame();
})

p1.button.addEventListener('click', function(){
    updateScore(p1, p2);
    checkWinner();
});

p2.button.addEventListener('click', function(){
    updateScore(p2, p1);
    checkWinner();
});

function updateScore(player, opponent) {
    player.score++;
    player.display.innerText = player.score;
    if (player.score > opponent.score) {
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");
    } else if (player.score === opponent.score) {
        p1.display.classList.remove("has-text-success");
        p1.display.classList.remove("has-text-danger");
        p2.display.classList.remove("has-text-success");
        p2.display.classList.remove("has-text-danger");
    }
}

function resetGame() {
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    p1.display.classList.remove("has-text-success");
    p1.display.classList.remove("has-text-danger");
    p2.display.classList.remove("has-text-success");
    p2.display.classList.remove("has-text-danger");
    p1.button.disabled = false;
    p2.button.disabled = false;
}

function checkWinner() {
    if (p1.score === winningScore || p2.score === winningScore) {
        p1.button.disabled = true;
        p2.button.disabled = true;
    }
}

