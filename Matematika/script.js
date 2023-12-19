function toggleAnswer(questionNumber) {
    var answer = document.getElementById("answer" + questionNumber);
    answer.style.display = (answer.style.display === "none" || answer.style.display === "") ? "block" : "none";
}
