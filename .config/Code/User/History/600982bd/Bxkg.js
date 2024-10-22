//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/search.json?q=${choice}t&fields=key,title,author_name,editions,editions.key,editions.title,editions.ebook_access,editions.language`

{

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.docs[14].title
       
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
}
