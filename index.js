$(document).ready(() => {
  shuffle()

  $("a.scrollTo").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });
})

function getCards() {
  return [].slice.call(document.querySelectorAll('.project-card'))
}

function shuffle() {
  getCards().forEach(card => {
    const position = randomPosition()
    const newIndex = Math.random
    const newStyle = {
      zIndex: Math.floor(Math.random() * 10),
      transform: `rotate(${position.randAngle}deg)`,
      left: `${position.randX}%`,
      top: `25%`,
      marginTop: `${position.randMargin}%`
    }
    Object.assign(card.style, newStyle)
  })
}

function randomPosition() {
  return {
    randAngle: Math.floor(Math.random() * 100) - 50,
    randX: Math.floor(Math.random() * 75),
    randMargin: Math.floor(Math.random() * 15) - 10
  }
}

function expand(element) {
  event.stopPropagation()
  const elementDescription = element.childNodes[3]
  if (element.classList.contains('expand')) {
    element.classList.remove('expand');
    element.classList.add('contract');
    elementDescription.classList.remove('show');
    reset()
  } else {
    reset()
    elementDescription.classList.add('show');
    element.classList.remove('contract');
    element.classList.add('expand');
  }
}

function reset() {
  getCards().forEach(card => {
    const elementDescription = card.childNodes[3]
    elementDescription.classList.remove('show');
    card.classList.remove('expand');
    card.classList.add('contract');
  })
}
