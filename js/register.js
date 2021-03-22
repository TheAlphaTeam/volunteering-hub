'use strict';
let count=0;
let info=[];
let contact=[];
let form=document.getElementById('informationForm');
let subject=document.getElementById('subject');
let email=document.getElementById('email');
let userName=document.getElementById('userName');
form.addEventListener('submit', volunteerInformation);
function volunteerInformation(event){
  if(document.getElementById('subject').value==='arabic'){
    localStorage.setItem('arabic',JSON.stringify(count+=1+getData1()));
  }else if(document.getElementById('subject').value==='math'){
    localStorage.setItem('math',JSON.stringify(count+=1+getData2()));

  }else if(document.getElementById('subject').value==='science'){

    localStorage.setItem('science',JSON.stringify(count+=1+getData4()));
  }else if( document.getElementById('subject').value==='coding'){
    localStorage.setItem('coding',JSON.stringify(count+=1+getData3()));
  }
  info=getNames();
  contact=getEmail();
  info.push( document.getElementById('userName').value);
  localStorage.setItem('names', JSON.stringify(info));
  contact.push( document.getElementById('email').value);
  localStorage.setItem('contact', JSON.stringify(contact));
}
new Chart(document.getElementById('myChart'), {
  type: 'pie',
  data: {
    labels: ['Arabic', 'Math', 'Science', 'Coding'],
    datasets: [{
      label: 'Population (millions)',
      backgroundColor: ['#3e95cd', '#8e5ea2','#3cba9f','#e8c3b9'],
      data: [localStorage.getItem('arabic'),localStorage.getItem('math'),localStorage.getItem('science'),localStorage.getItem('coding')]
    //   data: [arabic,math,science,coding]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Our network'
    }
  }
});
function getData1(){
  let arabic=JSON.parse(localStorage.getItem('arabic'));
  return arabic;
}
function getData2(){
  let math=JSON.parse(localStorage.getItem('math'));
  return math;
}
function getData3(){
  let coding=JSON.parse(localStorage.getItem('coding'));
  return coding;
}
function getData4(){
  let science=JSON.parse(localStorage.getItem('science'));
  return science;
}
function getNames(){
  let names=JSON.parse(localStorage.getItem('names'));
  info.push(names);
  return names;
}
function getEmail(){
  let emails=JSON.parse(localStorage.getItem('contact'));
  info.push(emails);
  return emails;
}

