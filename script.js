
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
    snowflake.style.animationDuration = Math.random() * 20 + 5 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = Math.random() * 20 + 5 + 'px';
    

    document.body.appendChild(snowflake);

   setTimeout(() => {
        snowflake.remove();
    },10000)

    //snowflake change to star
    snowflake.addEventListener('mouseover', function() {
        
       
       /* snowflake.classList.remove('far');*/
        snowflake.classList.remove('fa-snowflake');
       /* snowflake.classList.add('fas');*/
        snowflake.classList.add('fa-star');
        snowflake.style.animationDuration = 20 + 's';
        
        
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
});

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

        button.style.animation = `navLinkFade 0.5s ease forwards`;

        //hamburger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

let Images = {
    
}

function imgChange () {
    for(let i = 0; i < Images.length; i++) {

    }
}

// Change images
let x = 0;
const images = ['./2012/all.jpg', './2013/stul.jpg', './2014/all.jpg', './2015/all.jpg','./2016/all.jpg', './2017/all.jpg', './2018/all.jpg', './2019/všichni.jpg','./2020/all1.jpg'];
const captions = ['Rok 2012', 'Rok 2013', 'Rok 2014', 'Rok 2015', 'Rok 2016', 'Rok 2017', 'Rok 2018', 'Rok 2019', 'Červenec 2020'];
const time = 5000;
const caption = document.getElementById('caption');

function changeImg(){
    document.current.src = images[x];
   caption.textContent = captions[x];
    if(x < images.length - 1) {
        x++;
    } else {
        x = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;

