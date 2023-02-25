const button = document.querySelector('button');
const div = document.querySelector('.wrapper');


function getDadJoke(){
fetch('https://icanhazdadjoke.com/slack')
    .then((res)=>res.json())
    .then((data)=> {
        div.innerText = data.attachments[0].text;
    })
    .catch((e)=>{
        console.log(e);
    })
}

button.addEventListener('click', getDadJoke);