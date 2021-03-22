
const restotal=document.getElementById('total');

function getnames(){
  let data = localStorage.getItem('names');
  data =JSON.parse(data);
  return data;
}

function result(){
  let unorderlist=document.createElement('ul');
  unorderlist.innerText='';
  let resultlist=document.createElement('li');
  unorderlist.appendChild(resultlist);
  let total=getnames;
  resultlist.innerText=total;
  restotal.appendChild(unorderlist);
}


