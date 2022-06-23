
const showBtn = document.querySelector(' .header_wrapper .bar_btn button');
const cancelBtn = document.querySelector('  .nav_items .cancel_btn button');
const navItmes = document.querySelector('.header_wrapper .nav_items');
const navLinks = document.querySelectorAll('.header_wrapper  .nav_items .nav_link');

showBtn.addEventListener('click' , ()=>{
   navItmes.classList.add('active');
   
})
cancelBtn.addEventListener('click' , ()=>{
    navItmes.classList.remove('active');
   
 })

 navLinks.forEach(function(bar){
    bar.addEventListener('click' , ()=>{
        navItmes.classList.remove('active');
    })
 })

 



//  scrolled related 

 const navBar = document.querySelector(' .header_wrapper .navbar');

 window.onscroll= function(){
    if(document.documentElement.scrollTop > 20){
        navBar.classList.add('header_scrolled');
    }
    else{
        navBar.classList.remove('header_scrolled');
    }
 }