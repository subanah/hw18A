let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let input = document.querySelector('.input')

btn1.addEventListener('click' ,()=>{
   // alert('ok')
   input.type = "text";
   btn1.style.display = "none";
   btn2.style.display = "block";
});
btn2.addEventListener('click' ,()=>{
   // alert('ok')
   input.type = "password";
   btn2.style.display = "none";
   btn1.style.display = "block";
});