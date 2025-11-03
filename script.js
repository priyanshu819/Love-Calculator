// Project-3 [Love Calculator By Name ]


let form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    
    e.preventDefault();

    let boy=document.getElementById('Boy');
    let girl=document.getElementById('Girl');

    let l1=Boy.value.length;
    let l2=girl.value.length;

    let result=Math.pow(l1+l2,3)%101;

   document.querySelector('h2').textContent='Result : '+result+'%';


    // form.reset();

})