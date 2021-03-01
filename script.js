
const button = document.querySelector('button');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

button.addEventListener('click', getApi);

function getApi() {
   let url = 'https://www.swapi.tech/api/people/?name=';
   let name = input.value;
   url += name;

   fetch(url)
      .then(res => res.json())
      .then(data => {  
         /*Och här*/
         console.log('People data:')
         console.log(data.result[0].properties) 
      })
      .catch(err => console.log(err))
}