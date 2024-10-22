//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/search.json?q=crime+and+punishment&fields=key,title,author_name,editions`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.q
       
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

