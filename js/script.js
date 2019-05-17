let headerBtn = document.querySelector('.header__btn'),
    modal = document.querySelector('.modal'),
    modalOverlay = document.querySelector('.modal-overlay'),
    closeBtn = document.querySelector('.modal__close');

    // console.log(modalOverlay);
    // console.log(modal);

// headerBtn.addEventListener('click', function() {
//     modal.style.display = 'block';
//     modalOverlay.style.display = 'block';
// });

// closeBtn.addEventListener('click', function() {
//     modal.style.display = 'none';
//     modalOverlay.style.display = 'none';
// });

// modalOverlay.addEventListener('click', function() {
//     modal.style.display = 'none';
//     modalOverlay.style.display = 'none';    
// });

headerBtn.addEventListener('click', function() {
    modal.classList.add('active');
    modalOverlay.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', function() {
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
});







