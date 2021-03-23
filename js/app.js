'use strict';
let form=document.getElementById('formSubmit');
let box=document.getElementById('messageBox');
let comments = [];
form.addEventListener('submit', toLocal);
function toLocal(event){
  if(localStorage.getItem('aboutusComment')!==null){
    comments=getComment();
  }

  comments.push(box.value);
  localStorage.setItem('aboutusComment',JSON.stringify(comments));

}
function getComment(){
  let comment=JSON.parse(localStorage.getItem('aboutusComment'));
  comments.push(comment);
  return comment;

}


