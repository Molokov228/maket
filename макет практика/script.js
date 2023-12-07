const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentSlide = 0;

function changeSlide(direction) {
	currentSlide += direction;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	} else if (currentSlide >= slides.length) {
		currentSlide = 0;
	}
	const offset = -currentSlide * slideWidth;
	slider.style.transform = `translateX(${offset}px)`;
}




changeSlide(0);


slider.addEventListener('transitionend', () => {
	if (currentSlide === slides.length) {
		slider.style.transition = 'none';
		currentSlide = 0;
		slider.style.transform = `translateX(0)`;
		setTimeout(() => {
			slider.style.transition = 'transform 0.5s ease-in-out';
		});
	}
});



const dropdownButton = document.getElementById('DropButton');
var dropdownList = document.getElementsByClassName("dropdown-list");
// var dd = document;
const buttonText = document.getElementById('button-text');
const buttonIcon = document.getElementById('button-icon');
const divdrop = document.getElementById('dropdiv');

let isOpen = false;



// // Закрыть список при клике вне списка
// document.addEventListener('click', (e) => {
// 	if (!dropdownButton.contains(e.target) && !dropdownList.contains(e.target)) {
// 		dropdownList.style.display = 'none';
// 		dropdownButton.src = 'img/Group 278.svg';
// 		isOpen = false;
// 	}
// });

function ee(id){
	const front_bord = document.querySelector("#"+id);
	let dropdown = document.querySelector("#"+id).children[1];
	let dropdown_btn = document.querySelector("#"+id).children[0].children[1].children[0];
	console.log(dropdown);
	if (isOpen) {
		dropdown.style.display = 'none';
		dropdown_btn.src = 'img/Group 278.svg';
		// front_bord.style.border = 'none';
	} else {
		dropdown.style.display = 'flex';
		dropdown_btn.src = 'img/-.png';
		dropdown_btn.style.height = 'auto'
		// front_bord.style.border = 'initial';
	}
	isOpen = !isOpen;
}


let currentSlidep = 0; // индекс текущего слайда

function changeSlid(n) {
    const slides = document.getElementsByClassName('pr_slide');
    slides[currentSlidep].classList.remove('active');
    currentSlidep = (currentSlidep + n + slides.length) % slides.length;
    slides[currentSlidep].classList.add('active');
}



const slider1 = document.querySelector('.slider1');
const slides1 = document.querySelectorAll('.slide1');
const slideWidth1 = slides1[0].offsetWidth;
let currentSlide1 = 0;

function changeSlide1(direction) {
	currentSlide1 += direction;
	if (currentSlide1 < 0) {
		currentSlide1 = slides1.length - 1;
	} else if (currentSlide1 >= slides1.length) {
		currentSlide1 = 0;
	}
	const offset = -currentSlide1 * slideWidth1;
	slider1.style.transform = `translateX(${offset}px)`;
}

changeSlide1(0);


slider1.addEventListener('transitionend', () => {
	if (currentSlide1 === slides1.length) {
		slider1.style.transition = 'none';
		currentSlide1 = 0;
		slider1.style.transform = `translateX(0)`;
		setTimeout(() => {
			slider1.style.transition = 'transform 0.5s ease-in-out';
		});
	}
});