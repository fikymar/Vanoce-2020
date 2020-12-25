
// images
const img = document.querySelectorAll('.img-container');
const imgArr = Array.prototype.slice.call(img);
console.log(img);

const figcaption = document.querySelectorAll('figcaption');
console.log(figcaption)

// snow,music
const snowBtn = document.getElementById('snow');
const audio = document.getElementById("audio1");
const pauseAudio = document.getElementById('pauseMusic');
const pauseSnow = document.getElementById('pauseSnow');
let snowflakeInt;

// snow is falling
function createSnowflake() {
    const snowflake = document.createElement('i');
    const snowflakeX = Math.random() * (window.innerWidth + window.innerWidth + 1) - window.innerWidth + 'px';
    let randomRotate = Math.random() * 301 - 150 + 'deg';

    snowflake.classList.add('far');
    snowflake.classList.add('fa-snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.transform = 'rotate(-150deg)';
    snowflake.style.transform = `translateX(${snowflakeX})`;
    snowflake.style.animationDuration = Math.random() * 40 + 10 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 5 + 'px';
    

    document.body.appendChild(snowflake);

   setTimeout(() => {
        snowflake.remove();
    },15000)

    //snowflake change to star
    snowflake.addEventListener('mouseover', function() {
        
       
       /* snowflake.classList.remove('far');*/
        snowflake.classList.remove('fa-snowflake');
       /* snowflake.classList.add('fas');*/
        snowflake.classList.add('fa-star');
        snowflake.style.animationDuration = 40 + 's';
       
        
    });  
}

snowBtn.addEventListener('click', function() {
    
    snowflakeInt = setInterval(createSnowflake, 30);
    audio.play();
    pauseAudio.style.opacity = 1;
    pauseSnow.style.opacity = 1;

});

// turn off music, snow
pauseAudio.addEventListener('click', function () {
    audio.pause();
    
})

pauseSnow.addEventListener('click', function() {
    clearInterval(snowflakeInt);
})

//navigation responsive
const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const button = document.querySelector('button');
    const navLinks = document.querySelectorAll('.nav-links li');
    const burger= document.querySelector('.hamburger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.style.opacity = '0.5';
    
        //links animations
        navLinks.forEach((link, index) => {
            // index / 7 + 2 delay of next animation
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 1}s`;
            }
        });

        button.style.animation = `navLinkFade 0.5s ease forwards 0.5s`;

        //hamburger animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

// image caption on hover
imgArr.forEach(function (item) {
    
    item.addEventListener('mouseover', function() {
        figcaption.forEach(function (itemh2){
            itemh2.style.opacity = 1;
        })
  
})
});
/*
function changeColor () {
    const red = Math.round(Math.random() * 255) + 1;
    const green = Math.round(Math.random() * 255) + 1;
    const blue = Math.round(Math.random() * 255) + 1;
    const alpha = parseFloat(Math.random().toFixed(1));
    const body = document.querySelector('body');

    body.style.background =`rgba(${red}, ${green}, ${blue}, ${alpha})`;
   
    console.log(red,green,blue,alpha);


}
setInterval(changeColor, 10000);*/