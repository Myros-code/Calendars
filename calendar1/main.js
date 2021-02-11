
let time = document.querySelectorAll('.time');

time.forEach((item)=>{
    item.addEventListener('click',(event) =>{
        event.target.classList.toggle('active');
    })
});