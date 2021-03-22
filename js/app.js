'use strict';
const form=document.getElementById('formSubmit');
const box=document.getElementById('messageBox');
const submitButton=document.getElementById('save');
let counter = 0 ;

submitButton.addEventListener('click', save);
let messageArray = [];
function save(event) {
  event.preventDefault();
  if(counter){
    messageArray[counter] = JSON.stringify(document.getElementById('messageBox').value);
  }
  localStorage.setItem('About us comments',messageArray);
  counter++;
}


// let comment = document.getElementById('commentForm');
// comment.addEventListener('submit', toLocal);
// let commentArray = [];
// function toLocal(event){
//   event.preventDefault();
//   if(counter){
//     commentArray[counter] = JSON.stringify(document.getElementById('myTextarea').value);
//   }
//   console.log(document.getElementById('myTextarea').value);
//   localStorage.setItem('Home Page comment',commentArray );
  
// }