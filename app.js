//Set initial count
let count = 0;

//Select value and buttons
var span = document.querySelector('#value');

const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    
    btn.addEventListener("click", function(e){
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')){
            count--;
        }
        
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        
        //Checking to add some color
        if(count < 0){
            span.style.color = 'red';
        }
        else if(count > 0){
            span.style.color = 'green';
        }
        else{
            span.style.color = '#222';
        }
        span.textContent = count;
    })
    // console.log(btn);
});

// console.log(btns);

