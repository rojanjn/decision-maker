const answers = [
    "Yes.",
    "No.",
    "Ask again later.",
    "Definitely.",
    "I wouldn't count on it.",
    "Maybe...",
    "Absolutely not.",
    "Without a doubt.",
    "That's a tricky question...",
    "Ooh, I don't know about that.",
    "Go for it.",
    "Don't hesitate on it."
]

document.getElementById("askBtn").addEventListener("click", ()=>{
    const input = document.getElementById("askQ").ariaValueMax.trim();
    const answerE1 = document.getElementById("answer");

    if (input === ""){
        answerE1.textContent = "You must ask a question, Champ!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * answers.length);
    answerE1.textContent = answers[randomIndex];
});