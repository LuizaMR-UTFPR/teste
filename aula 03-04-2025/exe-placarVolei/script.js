let scores = { 1: 0, 2: 0 };
let sets = { 1: 0, 2: 0 };

function updateScore(team, change) {
    scores[team] += change;
    if (scores[team] < 0) scores[team] = 0;
    
    if (scores[team] >= 25) {
        sets[team] += 1;
        scores[1] = 0;
        scores[2] = 0;
        updateSetsDisplay();
        checkWinner();
    }
    
    document.getElementById(`score${team}`).innerText = scores[team];
    logHistory(team, change);
}

function updateSetsDisplay() {
    document.getElementById("score1").innerText = scores[1];
    document.getElementById("score2").innerText = scores[2];
    document.getElementById("sets").innerText = `${sets[1]} - ${sets[2]}`;
}

function checkWinner() {
    for (let team = 1; team <= 2; team++) {
        if (sets[team] === 3) {
            let teamName = document.getElementById(`team${team}-name`).value;
            alert(`🎉 ${teamName} venceu a partida! 🎉`);
            document.body.style.backgroundColor = "gold";
            setTimeout(() => { document.body.style.backgroundColor = "darkcyan"; }, 3000);
        }
    }
}

function logHistory(team, change) {
    let historyList = document.getElementById("history-list");
    let now = new Date();
    let timestamp = now.toLocaleString();
    let teamName = document.getElementById(`team${team}-name`).value;
    let listItem = document.createElement("li");
    listItem.innerText = `${teamName} ${change > 0 ? "+" : ""}${change} ponto(s) - ${timestamp}`;
    historyList.prepend(listItem);
}

function updateTeamName(team) {
    let teamName = document.getElementById(`team${team}-name`).value;
    logHistory(team, `alterou o nome para ${teamName}`);
}
