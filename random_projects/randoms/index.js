
document.querySelector('.modal-exit').addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none';
    clearInterval(carouselTimer);
    carouselTimer = null;
})

let carouselTimer = null;
let modalTriggers = document.querySelectorAll('.img-div img');
modalTriggers.forEach(function(item) {
    item.addEventListener('click', function(){
        document.querySelector('.modal').style.display = 'block';
        let images = document.querySelectorAll('.modal-content img');
        for (i=0; i < images.length; i++){
            images[i].style.display = 'none';
        }  
    })
    
})

let index = 0;

document.querySelectorAll('.btn').forEach(function(plus) {
   
    plus.addEventListener('click', function() {
        
        let images = document.querySelectorAll('.modal-content img');
        if (plus.classList.contains('btn-left')) {
            index--
        } else {
            index++
        }

        if (index >= images.length) {
            index=0;
        }
    
        if (index < 0) {
            index = images.length-1;
        }
        
        myModal(index);
        console.log(index)
        
    })
    
})

function currentSlide(n){
    index=n;
    myModal(n);
}


function myModal(n) {
    let images = document.querySelectorAll('.modal-content img');
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    if (images[n]) {
        images[n].style.display = "block";
    }


    if(!carouselTimer) {
        carouselTimer = setInterval(() => {
            
            currentSlide(index+1)
            console.log(index)
        }, 2000);
    }
}



let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click', function(){
        if (button.classList.contains('left')){
            document.querySelector('.gallery_wrap').scrollLeft -= 200;
        } else {
            document.querySelector('.gallery_wrap').scrollLeft += 200;
        }
       
    })
})


function translateSlider(){
    let moveSlide = 0;
    let sliderBtn = document.querySelectorAll('.random_btn');
    let sliderContainer = document.querySelector('.random');
   

    
    sliderBtn[0].addEventListener('click', function(){
            moveSlide -= 500;
            if (moveSlide < 0) {
                moveSlide = 2000;
            }
        
            if (moveSlide > 2000) {
                moveSlide = 0;
            }
            console.log(moveSlide)

            
            
            
           
        })

        sliderBtn[1].addEventListener('click', function(){
            moveSlide += 500;
            if (moveSlide < 0) {
                moveSlide = 2000;
            }
        
            if (moveSlide > 2000) {
                moveSlide = 0;
            }
            console.log(moveSlide)

            
            
            
           
        })
        sliderContainer.style.transform = "translateX(-"+moveSlide+"px)"
        console.log(moveSlide)

    }

translateSlider();

