const projectsContainer = document.querySelector('.projects-container');
const cards = document.querySelectorAll('.projects-container .card')
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let counter = 1;
const size = 600;
projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
function positionTop() 
{
return typeof window.pageYOffset != 'undefined' ?  window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
} 
var isTopOfPage=true;
window.onscroll=function(){
if(positionTop()>100){
    document.getElementById("nav").style.backgroundColor='white'
}else{

    document.getElementById("nav").style.backgroundColor='transparent'

}
}
nextBtn.addEventListener('click', ()=>{
    if(counter >= cards.length - 1) return;
    projectsContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    projectsContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

projectsContainer.addEventListener('transitionend', ()=>{
    if(cards[counter].id === 'lastClone') {
        projectsContainer.style.transition = "none";
        counter = cards.length - 2;
        projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if(cards[counter].id === 'firstClone') {
        projectsContainer.style.transition = "none";
        counter = cards.length - counter;
        projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});