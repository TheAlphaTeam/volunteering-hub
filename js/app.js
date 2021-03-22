'use strict';
let form=document.getElementById('formSubmit');
let box=document.getElementById('messageBox');
let comments = [];
form.addEventListener('submit', toLocal);
function toLocal(event){
  if(localStorage.getItem('homeComment')!==null){
    comments=getComment();
  }
  comments.push(box.value);
  localStorage.setItem('homeComment',JSON.stringify(comments));

}
function getComment(){
  let comment=JSON.parse(localStorage.getItem('homeComment'));
  comments.push(comment);
  return comment;

}