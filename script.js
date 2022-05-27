let button = document.querySelector("button");
button.addEventListener("click",()=>{
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let an = `RGB(${r},${g},${b})`;
  document.body.style.background = an;
  button.style.color = an;
  button.firstChild.nodeValue = an;
})
