const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


const galleryContainer = document.querySelector('.js-gallery');
const imagesList = createGallery(images);
galleryContainer.insertAdjacentHTML('beforeend',imagesList);


function createGallery(images){
  return images.map(({preview, original, description}) => {
    return `
   <li class="gallery__item">
     <a class="gallery__link"  href="${original}">
       <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt= "${description}">
      </a>
   </li>
  `;
  })
  .join('');
}

const backDrop = document.querySelector('.js-lightbox');

galleryContainer.addEventListener('click', getOriginalImage);
function getOriginalImage(event) {
  event.preventDefault();
  
  //2

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  //opening backdrop
  backDrop.classList.add('is-open');
  
  //change source
  const imgEl = document.querySelector('.lightbox__image');
  imgEl.src = event.target.dataset.source;
  imgEl.alt = event.target.alt;
  
  //closing backgrop
  const closeButton = document.querySelector('.lightbox__button');
  closeButton.addEventListener('click', backdropClose);
  
  function backdropClose(evt) {
    imgEl.setAttribute('src', "");
    imgEl.setAttribute('alt', "");
    backDrop.classList.remove('is-open');
  }
  
  const overlayEl = document.querySelector('.lightbox__overlay');
  overlayEl.addEventListener('click', () => backDrop.classList.remove('is-open'));


  window.addEventListener('keydown', onEscPress);
  function onEscPress(e) {
    if (e.code === 'Escape') {
      backDrop.classList.remove('is-open');
    }
  }

  //const allImages = images.map(image => image.original);
  
//let currentIndex = 0;

//window.addEventListener('keydown', arrowClick);
//function arrowClick(ev) {
  //if (ev.code = "ArrowLeft") {
    //currentIndex -= 1;
  //} else if (ev.code = "ArrowRight") {
    //currentIndex += 1;
    //}
//}
  
}
 




  
  
  



