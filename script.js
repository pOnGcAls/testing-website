let menuIcon = document.querySelector('.menu-icon');
let menuBar = document.querySelector('.menu-bar');


menuIcon.onclick = function() {
    menuBar.classList.toggle('show');
}

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var bannerIndex = 0;

var selected = document.querySelectorAll('.controls li');

selected.forEach((indicator, ind) => {
    indicator.addEventListener('click', () => {
        bannerIndex = ind;
        selected.forEach(select => select.classList.remove('selected'));
        indicator.classList.add('selected');
        slider.style.transform = 'translate(' + (bannerIndex) * -12.5 + '%)'
    });
});

rightArrow.addEventListener('click', () => {
    bannerIndex = (bannerIndex < 7) ? bannerIndex + 1 : 7;
    selected.forEach(select => select.classList.remove('selected'));
    indicatorParents.children[bannerIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (bannerIndex) * -12.5 + '%)';
});

leftArrow.addEventListener('click', () => {
    bannerIndex = (bannerIndex > 0) ? bannerIndex - 1 : 0;
    selected.forEach(select => select.classList.remove('selected'));
    indicatorParents.children[bannerIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (bannerIndex) * -12.5 + '%)';
});