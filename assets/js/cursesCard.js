let checkHeartAuthor = document.querySelector('.author-header-item .fa-heart');
let checkHeart = document.querySelectorAll('.courses-card .check-heart');
let check = 0;

checkHeartAuthor.addEventListener('click', () => {
    checkHeartAuthor.classList.toggle('fas')
})

checkHeart.forEach(heart => {
    heart.addEventListener('click', () => {
        if(check == 0) {
            heart.src = 'assets/images/png/redHeart.png'
            return check = 1
        } else {
            heart.src = 'assets/images/png/blueHeart.png'
            return check = 0
        }
    })
})