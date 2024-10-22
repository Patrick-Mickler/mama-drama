let deck = 'data.deck_id'

fetch(`https://www.deckofcardsapi.com/api/deck/new/`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        deck = data.deck_id
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo(){
  
  fetch(`https://www.deckofcardsapi.com/api/deck/<<${deck}>>/draw/?count=2`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

