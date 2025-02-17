const users = {};
const candidates = [
    { name: "Ajay", votes: 0 },
    { name: "Vijay", votes: 0 },
    { name: "Sanjay", votes: 0 }
];
let currentUser = null;

function login() {
    const username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter a username");
        return;
    }
    if (!users[username]) {
        users[username] = { hasVoted: false };
    }
    currentUser = username;
    document.getElementById("login-form").style.display = "none";
    document.getElementById("voting-section").style.display = "block";
    displayCandidates();
}

function displayCandidates() {
    const list = document.getElementById("candidates-list");
    list.innerHTML = "";
    candidates.forEach((candidate, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${candidate.name} <button onclick="vote(${index})">Vote</button>`;
        list.appendChild(li);
    });
}

function vote(index) {
    if (users[currentUser].hasVoted) {
        alert("You have already voted!");
        return;
    }
    candidates[index].votes++;
    users[currentUser].hasVoted = true;
    alert("Vote cast successfully!");
    showResults();
}

function showResults() {
    document.getElementById("voting-section").style.display = "none";
    document.getElementById("results").style.display = "block";
    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = "";
    candidates.sort((a, b) => b.votes - a.votes);
    candidates.forEach(candidate => {
        const li = document.createElement("li");
        li.textContent = `${candidate.name}: ${candidate.votes} votes`;
        resultsList.appendChild(li);
    });
}
