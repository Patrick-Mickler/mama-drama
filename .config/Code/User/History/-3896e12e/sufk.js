document.querySelector('button').addEventListener('click',getWord);

function Getword(){
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)



    })
}