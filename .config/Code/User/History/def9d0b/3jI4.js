 document.querySelector('button').addEventListener('click',getAnime)

function getAnime(){
    fetch("/api")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}