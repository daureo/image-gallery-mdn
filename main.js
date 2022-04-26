const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgList = ['../images/pic1.jpg',
                'images/pic2.jpg',
                'images/pic3.jpg',
                'images/pic4.jpg',
                'images/pic5.jpg'];
/* Looping through images */
for (item of imgList){
        const newImage = document.createElement('img');
        newImage.setAttribute('src',item);
        thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', e => {
    if(!e.target.classList.toggle('dark')){
        e.target.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        
    } else {
        e.target.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
/*Showing the selected img*/

thumbBar.addEventListener('click', e => {
    displayedImage.src = e.target.src ;
})