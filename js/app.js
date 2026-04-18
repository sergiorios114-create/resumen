// Interacciones comunes: tabs, flashcards, quiz.

document.addEventListener('click', function(e){
  // Tabs
  if (e.target.classList.contains('tab-btn')){
    var tab = e.target.dataset.tab;
    var container = e.target.closest('.tabs');
    container.querySelectorAll('.tab-btn').forEach(function(b){ b.classList.remove('active'); });
    container.querySelectorAll('.tab-content').forEach(function(c){ c.classList.remove('active'); });
    e.target.classList.add('active');
    var content = container.querySelector('#'+tab);
    if (content) content.classList.add('active');
  }

  // Flashcards
  var card = e.target.closest('.flashcard');
  if (card) card.classList.toggle('flipped');

  // Quiz
  if (e.target.classList.contains('quiz-opt')){
    var parent = e.target.closest('.quiz-options');
    parent.querySelectorAll('.quiz-opt').forEach(function(o){ o.classList.remove('correct','wrong'); });
    if (e.target.dataset.correct === '1'){
      e.target.classList.add('correct');
    } else {
      e.target.classList.add('wrong');
      var correct = parent.querySelector('[data-correct="1"]');
      if (correct) correct.classList.add('correct');
    }
  }
});
