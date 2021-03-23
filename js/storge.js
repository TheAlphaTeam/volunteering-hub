'use strict';
let resultGiveAchance=document.getElementById('giveAchance');
let resultSewar=document.getElementById('sewar');
let resultTamkeen=document.getElementById('tamkeen');
let resultBooks=document.getElementById('books');

let volunteers=[];

let arrayproject=localStorage.getItem('projectListing');
let unorderlist=document.createElement('ul');
let unorderlist1=document.createElement('ul');
let unorderlist2=document.createElement('ul');
let unorderlist3=document.createElement('ul');
resultGiveAchance.appendChild(unorderlist);
resultSewar.appendChild(unorderlist1);
resultTamkeen.appendChild(unorderlist2);
resultBooks.appendChild(unorderlist3);

let resultlist=document.createElement('li');
let resultlist1=document.createElement('li');
let resultlist2=document.createElement('li');
let resultlist3=document.createElement('li');

localStorage.setItem('arrays',arrayproject);
function result1(){
  let namesLength=JSON.parse(localStorage.getItem('names'));
  for(let i=0;i<namesLength.length;i++){
    if(namesLength[i].includes('give them a chance')){
      resultlist=document.createElement('li');
      volunteers[i]=JSON.stringify(namesLength[i]).substr(1,JSON.stringify(namesLength[i].length-19));
      resultlist.innerText= volunteers[i];
      unorderlist.appendChild(resultlist);
    }else if(namesLength[i].includes('sewar')){
      resultlist1=document.createElement('li');
      volunteers[i]=JSON.stringify(namesLength[i]).substr(1,JSON.stringify(namesLength[i].length-5));
      resultlist1.innerText= volunteers[i];
      unorderlist1.appendChild(resultlist1);
    }else if((namesLength[i].includes('tamkeen'))){
      resultlist2=document.createElement('li');
      volunteers[i]=JSON.stringify(namesLength[i]).substr(1,JSON.stringify(namesLength[i].length-7));
      resultlist2.innerText= volunteers[i];
      unorderlist2.appendChild(resultlist2);
    }else if((namesLength[i].includes('books in the box'))){
      resultlist3=document.createElement('li');
      volunteers[i]=JSON.stringify(namesLength[i]).substr(1,JSON.stringify(namesLength[i].length-16));
      resultlist3.innerText= volunteers[i];
      unorderlist3.appendChild(resultlist3) ;
    }
  }
}
result1();

