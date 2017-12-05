

$(document).ready(function() {

var cards= [
  {question: "who am i", answer: 'amy'},
  {question: "dogs name", answer: "dougie"},
  {question:"knows javascript", answer:"nope"}
]
var i= 0

function clearCards() {
  $(".question").empty()
  $(".answer").empty()
}

function randomCards(){
  i += 1
  if (i>= cards.length) {
    i= 0
  }

}

$(".Next-Button").on("click", function() {
  clearCards()
  randomCards()
  var p= "<p class='question'>" + cards[i].question + "</p>"
  $('.flashcard').append(p)

})

$(".Answer-Button").on("click", function() {
  var p= "<p class='answer'>" + cards[i].answer + "</p>"
  $('.flashcard').append(p)
})
})
