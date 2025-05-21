document.querySelectorAll('.question').forEach(question => {
  const correctOption = question.dataset.correct;

  question.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', () => {
      question.querySelectorAll('li').forEach(li => {
        const isCorrect = li.dataset.option === correctOption;

        if (isCorrect) {
          li.style.backgroundColor = 'green';
          li.style.color = 'white';
        } else if (li === option) {
          li.style.backgroundColor = 'red';
          li.style.color = 'white';
        }

        li.style.pointerEvents = 'none';
      });
    });
  });
});
