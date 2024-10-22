//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h3').innerText=data.classes[0].name
        data.subclasses.forEach( obj=> document.querySelector('li').innerText = obj.name)
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

