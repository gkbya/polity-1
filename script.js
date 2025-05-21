document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const correctOption = question.dataset.correct || question.dataset.answer;
    const options = question.querySelectorAll("li");

    options.forEach((option) => {
      option.addEventListener("click", () => {
        // Prevent multiple attempts
        if (question.classList.contains("answered")) return;
        question.classList.add("answered");

        const selected = option.dataset.option;

        // Mark selected option
        if (selected === correctOption) {
          option.style.backgroundColor = "lightgreen";
        } else {
          option.style.backgroundColor = "lightcoral";

          // Also highlight the correct option
          options.forEach((opt) => {
            if (opt.dataset.option === correctOption) {
              opt.style.backgroundColor = "lightgreen";
            }
          });
        }
      });
    });
  });
});
