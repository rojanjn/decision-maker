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
];

const askBtn = document.getElementById("askBtn");
const input = document.getElementById("askQ");
const answerEl = document.getElementById("answer");
const ballElement = document.getElementById("circle");

askBtn.addEventListener("click", () => {
    const question = input.value.trim();

    if (question === "") {
        answerEl.textContent = "You must ask a question, Champ!";
        return;
    }

    ballElement.classList.add("shake");
    setTimeout(() => ballElement.classList.remove("shake"), 600);

    const randomIndex = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIndex];

    typeAnswer(randomAnswer, answerEl);
});

function typeAnswer(text, element) {
    element.textContent = "";

    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(interval);
        }
    }, 50);
}
