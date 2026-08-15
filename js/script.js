const scrollArrow = document.querySelector('.scroll-down');

if (scrollArrow) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            scrollArrow.classList.add('hidden');
        } else {
            scrollArrow.classList.remove('hidden');
        }
    });
}