'use strict';

let slideIndex = 1 ;
document.getElementById('previousImage').addEventListener('click', function(){previous();});
document.getElementById('nextImage').addEventListener('click', function(){next();});
document.getElementById('dot1').addEventListener('click', function(){showSlides( slideIndex = 1);});
document.getElementById('dot2').addEventListener('click', function(){showSlides( slideIndex = 2);});
document.getElementById('dot3').addEventListener('click', function(){showSlides( slideIndex = 3);});

function next(){
  if( slideIndex === 1 ){
    showSlides(2);
    slideIndex = 2;
  } else if( slideIndex === 2 ){
    showSlides(3);
    slideIndex = 3;
  }else if( slideIndex === 3 ){
    showSlides(1);
    slideIndex = 1;
  }
}

function previous(){
  if( slideIndex === 1 ){
    showSlides(3);
    slideIndex = 3;
  } else if( slideIndex === 2 ){
    showSlides(1);
    slideIndex = 1;
  }else if( slideIndex === 3 ){
    showSlides(2);
    slideIndex = 2;
  }
}
function showSlides (slideindex) {

  console.log(slideindex);
  if (slideindex === 1){
    document.getElementById('imageSlide1').style.display = 'block';
    document.getElementById('imageSlide2').style.display = 'none';
    document.getElementById('imageSlide3').style.display = 'none';
  }
  if (slideindex === 2){
    document.getElementById('imageSlide2').style.display = 'block';
    document.getElementById('imageSlide1').style.display = 'none';
    document.getElementById('imageSlide3').style.display = 'none';
  }
  if (slideindex === 3){
    document.getElementById('imageSlide3').style.display = 'block';
    document.getElementById('imageSlide1').style.display = 'none';
    document.getElementById('imageSlide2').style.display = 'none';
  }
}
showSlides(1);


// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(tabName) {
  
  let closebottun = document.getElementsByClassName('containerTab');
  let closebottun1 = document.getElementsByClassName('containerTab1');
  for (let i = 0; i < closebottun.length; i++) {
    closebottun[i].style.display = 'none'; 
    closebottun1[i].style.display = 'none';
  }
  document.getElementById(tabName).style.display = 'block';
}


// let counter ;
// let commentdata = localStorage.getItem('Home Page comment');
// let getData = JSON.parse(commentdata);
// let commentArray = [getData,];
// if (commentArray){
//   counter = commentArray.length-1;
// } else {
//   counter = 0 ;
// }
// let comment = document.getElementById('commentForm');
// comment.addEventListener('submit', toLocal);
// function toLocal(event){
//   event.preventDefault();

//   if(counter){
//     commentArray[counter] = JSON.stringify(document.getElementById('myTextarea').value);
//   }
//   console.log(document.getElementById('myTextarea').value);
//   localStorage.setItem('Home Page comment',commentArray );
//   counter++;
// }
