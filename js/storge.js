
let restotal=document.getElementById('total');
let restotal1=document.getElementById('total1');
let restotal2=document.getElementById('total2');
let restotal3=document.getElementById('total3');
// function Pic(name){
//   this.name=name;

//   Pic.allpic.push(this);
// }

// //let productList = getnames();
//   // if (productList === null) {
//   //   productList =Pic.allpic;
//   // }
// Pic.allpic=[];
// console.log(Pic.allpic);

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
  if(subject==='arabic'){
    resultlist.innerText=total;
  restotal.appendChild(unorderlist);
  }else if(subject==='math'){
    resultlist.innerText=total;
    restotal1.appendChild(unorderlist);
  }else if (subject==='science') {
    resultlist.innerText=total;
    restotal2.appendChild(unorderlist);
  }else if (subject==='science') {
    resultlist.innerText=total;
    restotal3.appendChild(unorderlist);
  }

}

function result(){
  let unorderlist=document.createElement('ul');
  unorderlist.innerText='';
  let resultlist=document.createElement('li');
  unorderlist.appendChild(resultlist);
  //let productList = getnames();
  // if (productList === null) {
  //   productList =Pic.allpic;
  // }

  if(subject==='arabic')
    resultlist.innerText=total;
  restotal.appendChild(unorderlist);
}

result();

function result1(){
  let unorderlist=document.createElement('ul');
  unorderlist.innerText='';
  let resultlist=document.createElement('li');
  unorderlist.appendChild(resultlist);
  let total=getnames1;
  resultlist.innerText=total;
  restotal1.appendChild(unorderlist);
}

result1();
