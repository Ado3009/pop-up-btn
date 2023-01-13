let openButton = document.querySelector('.popUP-button button');

openButton.addEventListener('click', ()=>{
    let popContent = document.querySelector('.pop-content');
    let overlay = document.querySelector('.overlay');
    popContent.style.display = 'block';
    overlay.style.display = 'block';
});

let closeButton = document.querySelector('.close-btn');

closeButton.addEventListener('click', ()=>{
    let popContent = document.querySelector('.pop-content');
    let overlay = document.querySelector('.overlay');

    popContent.style.display = 'none';
    overlay.style.display = 'none';
});