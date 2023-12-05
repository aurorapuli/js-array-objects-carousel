
// creo arr delle immagini

const images = [ 
  { 
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
   },

  { 
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart', 
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
  },

  { 
    image: 'img/03.webp',
    title: 'Fortnite', 
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
   },

  { 
    image: 'img/04.webp',
    title: 'Stray', 
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
  },

  { 
    image: 'img/05.webp',
    title: "Marvel's Avengers", 
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
  } 
];

// mi ricavo i bottoni da index

const buttonNext =  document.getElementById('button-next');
const buttonPrev = document.getElementById('buttonprev');
let col = document.getElementById('col');


let activeItem = 0;

let img = document.getElementsByClassName('img');

console.log(img);


images.forEach((element, i) => {
    
    const imgItem = 
    `
    <div class="img ${activeItem}">
        <img src="${element.image}"alt="">
        <div class="text-img">
          <h3>${element.title}</h3>
          <p>${element.text}</p>
        </div>
    </div>
    `;

    col.innerHTML += imgItem;

    

    if(i === 0){

        img[i].classList.add('active');
        
    }
  
    console.log(img[activeItem]);
    
    activeItem++;


});


buttonNext.addEventListener( "click",
  function(){
      img[activeItem].classList.remove('active');

      activeItem++;

      img[activeItem].classList.add('active');
         console.log(img[activeItem]);

});




   


         

           
 

