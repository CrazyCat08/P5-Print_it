const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const numberOfSlides = slides.length;
console.log("nombre de slides: ", numberOfSlides)

carrousel();

function createDots() {
	// Récupération de la div de classe .dots
	const rowOfDots = document.querySelector(".dots")
	console.log(rowOfDots)
	for (let i = 0; i < numberOfSlides; i++) {
		// Création des div bullet points
		let dot = document.createElement("div");
		// Attribution de la classe .dot aux bullet points
		dot.setAttribute("class", "dot");
		// Insertion des bullet points dans l'élément parent (rowOfDots)
		rowOfDots.appendChild(dot);
		console.log(dot);
		
		if (i === 0) {
			dot.classList.add("dot_selected")
		}
		
	}	 
}

function updateDot(position) {
	const listOfPoints = document.querySelectorAll(".dot");
	
	for (let index = 0; index< listOfPoints.length; index++) {
		
		let dot = listOfPoints[index];
		if (index === position) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
		
	}
	
}

function updateSlide(position) {
	let CurrentSlide = slides[position];
	console.log("position actuelle de la slide : ", CurrentSlide);
	
	let bannerImg = document.querySelector(".banner-img");
	
	let imgPath = './assets/images/slideshow/' + CurrentSlide.image;
	console.log(imgPath);
	
	let imgTagLine = CurrentSlide.tagLine;
	console.log("La tag line est: ", imgTagLine);
	
	bannerImg.src = imgPath;
	console.log("path de l'image: ", bannerImg.src);
	
	bannerImg.alt='Slide no. ' + (position + 1);
	console.log("alt de l'image: ", bannerImg.alt);
	
	let bannerImgTitle = document.querySelector("#banner p");
	console.log("Titre de l' image de la bannière", bannerImgTitle);
	
	bannerImgTitle.innerHTML = imgTagLine;
	console.log("Contenu HTML du paragraphe de la bannière: ", bannerImgTitle.innerHTML);
}

function carrousel() {

	// Création des bullet points
	createDots();

	let arrowLeft = document.querySelector(".arrow_left");
	let arrowRight = document.querySelector(".arrow_right");
	let i = 0;
	
	arrowRight.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche droite");
		i++;
		if (i === numberOfSlides) {
			i = 0;
		}
		console.log("position slide: ", (i+1));
		updateDot(i);
		updateSlide(i);
	}
	)
	
	arrowLeft.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche gauche");
		i--;
		if (i === -1) {
			i = numberOfSlides - 1;
		}
		console.log("position slide: ", (i+1));
		updateDot(i);
		updateSlide(i);
	}
	)

}

