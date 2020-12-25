
// images
const img = document.querySelectorAll('.img-container');
const imgArr = Array.prototype.slice.call(img);
console.log(img);

const figcaption = document.querySelectorAll('figcaption');
console.log(figcaption)

// snow,music
const starsBtn = document.getElementById('snow');
const audio = document.getElementById("audio1");
const pauseAudio = document.getElementById('pauseMusic');
const pauseStars = document.getElementById('pauseSnow');
let sstarsInt;

// snow is falling
function createStars() {
    const star= document.createElement('i');
    const starClass = ['fa-star', 'fa-star-o'];
    let y = Math.round(Math.random());
    let rotate = Math.round(Math.random() * 360 + 1) + 'deg';
   
    //const snowflakeX = Math.random() * (window.innerWidth + window.innerWidth + 1) - window.innerWidth + 'px';
 

    star.classList.add('fa');
   
    star.classList.add(starClass[y]);
    star.style.position = 'absolute';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * (6 * window.innerHeight) + 'px';
    star.style.transform = `rotate(${rotate})`;
    star.style.filter = 'contrast(150%)';
 
    //star.style.transform = `translateX(${snowflakeX})`;
  
    star.style.opacity = Math.random();
    star.style.fontSize = Math.random() * 20 + 5 + 'px';
    

    document.body.appendChild(star);

        
   setTimeout(() => {
    star.remove();
    },5000)    
//snowflake change to star
    star.addEventListener('mouseover', function() {
        
       
        
         star.classList.add('fa-pulse');
         
     });  

}



starsBtn.addEventListener('click', function() {
    
    starsInt = setInterval(createStars, 100);
    audio.play();
    pauseAudio.style.opacity = 1;
    pauseStars.style.opacity = 1;

});

// turn off music, snow
pauseAudio.addEventListener('click', function () {
    audio.pause();
    
})

pauseStars.addEventListener('click', function() {
    clearInterval(starsInt);
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

// Click on gift to Gallery
const giftback = document.querySelector('.giftBack');
const gallery = document.querySelector('.gallery')

window.onload = gallery.remove();

giftback.addEventListener('click', function() {
    giftback.remove();
    document.body.append(gallery);
})