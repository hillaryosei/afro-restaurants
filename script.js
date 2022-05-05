let hour = new Date().getHours();

if (hour >= 18 || hour < 6) {
    const background = document.querySelector('body');
    background.style.backgroundColor = 'black';
    background.style.color = 'white'

    const header = document.querySelector('h1 > a');
    header.className = 'dark';

    const navigation = document.querySelectorAll('nav > a');

    navigation[0].className = 'dark';
    navigation[1].className = 'dark';
    navigation[2].className = 'dark';

    const footer = document.querySelector('footer > p > a')
    footer.className = 'dark';
}


let images = document.querySelectorAll('main > a > img');

function changeOpacity() {
    images[0].style.opacity = '0.5';
    images[1].style.opacity = '0.5';
    images[2].style.opacity = '0.5';

    this.style.opacity = '1';
}

function resetOpacity() {
    images[0].style.opacity = '1';
    images[1].style.opacity = '1';
    images[2].style.opacity = '1';
}

images[0].addEventListener('mouseover', changeOpacity);
images[1].addEventListener('mouseover', changeOpacity);
images[2].addEventListener('mouseover', changeOpacity);

images[0].addEventListener('mouseout', resetOpacity);
images[1].addEventListener('mouseout', resetOpacity);
images[2].addEventListener('mouseout', resetOpacity);