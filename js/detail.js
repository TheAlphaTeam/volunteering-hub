function openTab1(tabName) {
  let closebottun = document.getElementsByClassName('containerTab');
  let closebottun1 = document.getElementsByClassName('containerTab1');
  for (let i = 0; i < closebottun1.length; i++) {
    closebottun[i].style.display = 'none';}
  for (let i = 0; i < closebottun1.length; i++) {
    closebottun1[i].style.display = 'none';}
  document.getElementById(tabName).style.display = 'block';
}
