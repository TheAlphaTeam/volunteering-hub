'use strict';
let count=0;
let info=[];
let contact=[];
let projectsList=[];
let form=document.getElementById('informationForm');
let project=document.getElementById('project');
let email=document.getElementById('email');
let userName=document.getElementById('userName');
form.addEventListener('submit', volunteerInformation);
function volunteerInformation(event){
  let counter=0;
  // event.preventDefault();
  if(project.value==='give them a chance'){
    localStorage.setItem('give them a chance',JSON.stringify(count+=1+getData1()));
  }else if(project.value==='tamkeen'){
    localStorage.setItem('tamkeen',JSON.stringify(count+=1+getData2()));

  }else if(project.value==='sewar'){

    localStorage.setItem('sewar',JSON.stringify(count+=1+getData3()));
  }else if(project.value==='books in the box'){
    localStorage.setItem('books in the box',JSON.stringify(count+=1+getData4()));
  }
  if(localStorage.getItem('names')!==null){
    contact=getEmail();
    info=getNames();
    projectsList=getProjects();
  }
  counter++;
  projectsList.push(project.value);
  localStorage.setItem('projectListing', JSON.stringify(projectsList));
  info.push(userName.value+' '+project.value );
  localStorage.setItem('names', JSON.stringify(info));
  contact.push(email.value);
  localStorage.setItem('contact', JSON.stringify(contact));

}
new Chart(document.getElementById('myChart'), {
  type: 'pie',
  data: {
    labels: ['give them a chance', 'sewar', 'tamkeen', 'books in the box'],
    datasets: [{
      label: 'Population (millions)',

      backgroundColor: ['#1e81b0', '#EEA47FFF','#ED2B33FF','#00203FFF'],
      data: [localStorage.getItem('give them a chance'),localStorage.getItem('sewar'),localStorage.getItem('tamkeen'),localStorage.getItem('books in the box')]

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
  let chanceCounter=JSON.parse(localStorage.getItem('give them a chance'));
  return chanceCounter;
}
function getData2(){
  let tamkeenCounter=JSON.parse(localStorage.getItem('tamkeen'));
  return tamkeenCounter;
}
function getData3(){
  let sewarCounter=JSON.parse(localStorage.getItem('sewar'));
  return sewarCounter;
}
function getData4(){
  let booksCounter=JSON.parse(localStorage.getItem('books in the box'));
  return booksCounter;
}
function getNames(){
  let names=JSON.parse(localStorage.getItem('names'));
  info.push(names);
  return names;
}
function getEmail(){
  let emails=JSON.parse(localStorage.getItem('contact'));
  contact.push(emails);
  return emails;
}
function getProjects(){
  let projectNames=JSON.parse(localStorage.getItem('projectListing'));
  projectsList.push(projectNames);
  return projectNames;
}
