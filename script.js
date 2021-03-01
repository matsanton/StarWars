
const button = document.querySelector('button');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');
const errorMsg = document.querySelector('#error-msg');

button.addEventListener('click', getApi);
input.addEventListener('keyup', (e) => {
   if (e.key == 'Enter') {
      button.click();
   }
});

function getApi() {
   errorMsg.innerHTML = '';
   let url = 'https://www.swapi.tech/api/people/?name=';
   let name = input.value;
   if (name) {
      url += name;
      fetch(url)
         .then(res => res.json())
         .then(data => {
            const props = data.result[0].properties;
            console.table(props);
            let s =
               `Name: ${props.name}\r\n` +
               `Height: ${props.height}\r\nMass: ${props.mass}\r\n` +
               `Hair color: ${props.hair_color}\r\nSkin color: ${props.skin_color}\r\n` +
               `Eye color:  ${props.eye_color}\r\nBirth year: ${props.birth_year}\r\n` +
               `Gender: ${props.gender}`;
            textArea.innerHTML = s;
            input.value = '';
         })
         .catch(err => {
            errorMsg.innerHTML = `<span style="color:red">Hittade inte ${name}</span>`;
            console.log("Ett fel inträffade:" + err);
            input.focus();
         });
   }
}

input.focus();